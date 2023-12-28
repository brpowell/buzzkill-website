import { db } from "@/lib/firebase";
import { getGameData } from "@/lib/nyt";

export async function PUT() {
  const data = await getGameData({
    path: "/puzzles/letter-boxed",
    collection: "letter-boxed",
    parse: (data) => {
      return {
        id: data.id,
        expiration: data.expiration,
        ourSolution: data.ourSolution,
        printDate: data.printDate,
        sides: data.sides,
        par: data.par,
        editor: data.editor,
      };
    },
  });

  const doc = db.doc(`letter-boxed/${data.printDate}`);
  await doc.set(data);

  return Response.json({ data });
}
