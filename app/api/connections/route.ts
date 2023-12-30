import { getTodayEST, simpleDate } from "@/lib/date";
import { db } from "@/lib/firebase";
import { getGameData, getLatestData } from "@/lib/nyt";

export async function PUT() {
  const data = await getGameData({
    path: "/games/connections",
    collection: "connections",
    parse: async (data, page) => {
      const keyData = data[data.length - 1];
      const newStartingGroups = keyData.startingGroups.map((group, i) => ({
        level: i,
        members: group,
      }));

      const result = {
        ...keyData,
        startingGroups: newStartingGroups,
      } as any;

      try {
        const editorElem = await page.$("span.pz-moment__info-editor");
        if (!editorElem) {
          throw new Error("No editor element found");
        }
        const editor = await page.evaluate((el) => el.textContent, editorElem);
        if (!editor) {
          throw new Error("No editor text content found");
        }
        result["editor"] = editor.replace("By ", "");
      } catch (e) {
        console.warn(e);
      }

      return result;
    },
  });

  const latest = await getLatestData("connections");

  if (!latest || latest.id !== data.id) {
    const today = simpleDate(getTodayEST());
    const doc = db.doc(`connections/${today}`);
    await doc.set(data);
  }

  return Response.json({ data });
}
