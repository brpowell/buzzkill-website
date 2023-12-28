import { Metadata } from "next";
import NYTButton from "../components/nyt-button";
import { getLatestData } from "@/lib/nyt";
import DynamicBody from "../components/dynamic-body";

export const metadata: Metadata = {
  title: "Spelling Bee",
};

export default async function NYTSpellingBeePage() {
  const data = await getLatestData("spelling-bee");

  return (
    <main className="flex min-h-screen flex-col p-14 items-center bg-[rgb(247,218,33)]">
      <DynamicBody className="bg-[rgb(247,218,33)]" />
      <h1 className="text-5xl mb-8">Spelling Bee</h1>
      {data ? (
        <>
          <h2 className="text-2xl mb-1">{`${data.displayWeekday}, ${data.displayDate}`}</h2>
          <h3 className="text-black">{`By ${data.editor}`}</h3>
          <NYTButton path="/puzzles/spelling-bee" />
          <ul className="flex flex-col w-full items-center">
            {data.answers.sort().map((answer: string) => (
              <li
                key={answer}
                className="w-full border-2 border-opacity-20 border-white mt-4 p-3 rounded-sm shadow-lg bg-opacity-50 text-lg max-w-72"
              >
                {answer}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>{"Weird, we couldn't find any data. Check back later..."}</div>
      )}
    </main>
  );
}
