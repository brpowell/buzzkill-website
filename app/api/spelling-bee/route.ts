import { db } from "@/lib/firebase";
import { getGameData } from "@/lib/nyt";

export async function PUT() {
  const data = await getGameData({
    path: "/puzzles/spelling-bee",
    collection: "spelling-bee",
    parse: (data) => data.today,
  });
  const doc = db.doc(`spelling-bee/${data.printDate}`);
  await doc.set(data);

  return Response.json({ data });
}
