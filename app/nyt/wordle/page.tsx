import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wordle",
};

const getToday = () => {
  const todaysDate = new Date();
  const estDate = new Date(
    todaysDate.toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const dateString = estDate.toISOString().split("T")[0];
  return {
    date: todaysDate,
    dateString,
  };
};

export default async function NYTWordlePage() {
  const { dateString } = getToday();
  const url = `https://www.nytimes.com/svc/wordle/v2/${dateString}.json`;
  const response = await fetch(url);
  const data = await response.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#e3e3e1]">
      {data.solution}
    </main>
  );
}
