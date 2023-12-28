import { getLatestData } from "@/lib/nyt";
import { Metadata } from "next";
import DynamicBody from "../components/dynamic-body";

export const metadata: Metadata = {
  title: "Letter Boxed",
};

export default async function NYTLetterBoxedPage() {
  const data = await getLatestData("letter-boxed");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[rgb(252,113,107)]">
      <DynamicBody className="bg-[rgb(252,113,107)]" />
      {JSON.stringify(data, null, 2)}
    </main>
  );
}
