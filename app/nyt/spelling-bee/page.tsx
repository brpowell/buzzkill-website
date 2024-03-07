import { Metadata } from "next";
import NYTButton from "../components/nyt-button";
import DynamicBody from "../components/dynamic-body";
import NYTGameSubtitle from "../components/nyt-game-subtitle";
import NYTGameTitle from "../components/nyt-game-title";
import { metadataForGamePage } from "@/lib/metadata";
import { GAME_DATA_TTL } from "@/lib/constants";
import SpellingBee from "./components/spelling-bee";
import { getLatestDataCached } from "@/lib/get-collection";

export const metadata: Metadata = metadataForGamePage(
  "Spelling Bee",
  "Get some help with today's NYT Spelling Bee."
);

export const revalidate = GAME_DATA_TTL;

export default async function NYTSpellingBeePage() {
  const data = await getLatestDataCached("spelling-bee");

  return (
    <main className="bg-[rgb(247,218,33)]">
      <DynamicBody className="bg-[rgb(247,218,33)]" />
      <NYTGameTitle title="Spelling Bee" />
      {data ? (
        <>
          <NYTGameSubtitle editor={data.editor} date={data.printDate} />
          <NYTButton path="/puzzles/spelling-bee" />
          <p className="my-8 max-w-96">
            Click on a word to mark it as found, and remove it from the list. If
            you accidently remove a word, press the undo button at the bottom.
          </p>
          <SpellingBee data={data} />
        </>
      ) : (
        <div>{"Weird, we couldn't find any data. Check back later..."}</div>
      )}
    </main>
  );
}
