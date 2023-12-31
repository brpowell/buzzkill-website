import { cache } from "react";
import puppeteer, { ConnectOptions } from "puppeteer";
import * as firebase from "firebase-admin";
import { db } from "./firebase";
import { GameConfig, GameData, GameDataResponse } from "./types";
import { getTodayEST, simpleDate } from "./date";

export const getGameData = async <T extends keyof Omit<GameData, "wordle">>(
  config: GameConfig<T>
): Promise<GameData[T]> => {
  // get current date using EST
  const dateString = simpleDate(getTodayEST());

  const dateDoc = db.doc(`${config.collection}/${dateString}`);

  // check cached response
  const data = await dateDoc.get();
  if (data.exists) {
    console.log("returning cached response");
    return data.data() as unknown as GameData[T];
  }

  // fetch answers from game
  const browserlessToken = process.env.BROWSERLESS_TOKEN;
  const url = new URL(config.path, "https://www.nytimes.com").href;
  const browser = await (process.env.NODE_ENV === "production"
    ? puppeteer.connect({
        browserWSEndpoint: `wss://chrome.browserless.io?token=${browserlessToken}`,
      })
    : puppeteer.launch({ headless: "new" }));
  const page = await browser.newPage();
  await page.goto(url);
  const results = await page.evaluate(() => {
    return (window as any).gameData as GameDataResponse[T];
  });

  const keyData = {
    ...(await config.parse(results, page)),
    addedAt: firebase.firestore.FieldValue.serverTimestamp(),
  };

  // save answers to store
  await dateDoc.set(keyData);

  return keyData;
};

// cache latest data
export const getLatestData = cache(
  async <T extends keyof GameData>(
    collection: T
  ): Promise<GameData[T] | undefined> => {
    const result = await db
      .collection(collection)
      .orderBy("addedAt", "desc")
      .limit(1)
      .get();
    if (result.docs.length > 0) {
      return {
        ...result.docs[0].data(),
        addedAt: result.docs[0].get("addedAt").toDate().toISOString(),
      } as GameData[T];
    }
  }
);
