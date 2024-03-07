import { getTodayEST } from "@/lib/date";
import { getFirebase } from "@/lib/firebase";
import { getGameData } from "./nyt";

export const fetchWordle = async () => {
  console.log("fetching wordle");
  const today = getTodayEST();
  const url = `https://www.nytimes.com/svc/wordle/v2/${today}.json`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    await getFirebase()
      .firestore()
      .doc(`wordle/${today}`)
      .set({
        ...data,
        addedAt: getFirebase().firestore.FieldValue.serverTimestamp(),
      });
    return Response.json({ data });
  }

  return Response.error();
};

export const fetchConnections = async () => {
  console.log("fetching connections");
  const today = getTodayEST();
  const url = `https://www.nytimes.com/svc/connections/v2/${today}.json`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    await getFirebase()
      .firestore()
      .doc(`connections/${today}`)
      .set({
        ...data,
        addedAt: getFirebase().firestore.FieldValue.serverTimestamp(),
      });
    return Response.json({ data });
  }

  return Response.error();
};

export const fetchSpellingBee = async () => {
  console.log("fetching spelling bee");
  const data = await getGameData({
    path: "/puzzles/spelling-bee",
    collection: "spelling-bee",
    parse: (data) => data.today,
  });
  const doc = getFirebase().firestore().doc(`spelling-bee/${data.printDate}`);
  await doc.set(data);

  return Response.json({ data });
};

export const fetchLetterBoxed = async () => {
  console.log("fetching letter boxed");
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

  const doc = getFirebase().firestore().doc(`letter-boxed/${data.printDate}`);
  await doc.set(data);

  return Response.json({ data });
};
