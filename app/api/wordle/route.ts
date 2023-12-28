import { getTodayEST, simpleDate } from "@/lib/date";
import * as firebase from "firebase-admin";
import { db } from "@/lib/firebase";

export async function PUT() {
  const today = simpleDate(getTodayEST());
  const url = `https://www.nytimes.com/svc/wordle/v2/${today}.json`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    await db.doc(`wordle/${today}`).set({
      ...data,
      addedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return Response.json({ data });
  }

  return Response.error();
}
