import { getTodayEST, simpleDate } from "@/lib/date";
import { db } from "@/lib/firebase";
import { getGameData, getLatestData } from "@/lib/nyt";

export async function PUT() {
  const data = await getGameData({
    path: "/games/connections",
    collection: "connections",
    parse: (data) => {
      const keyData = data[data.length - 1];
      const newStartingGroups = keyData.startingGroups.map((group, i) => ({
        level: i,
        members: group,
      }));
      return {
        ...keyData,
        startingGroups: newStartingGroups,
      };
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
