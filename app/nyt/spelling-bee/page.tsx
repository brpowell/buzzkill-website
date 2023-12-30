import { Metadata } from "next";
import NYTButton from "../components/nyt-button";
import { getLatestData } from "@/lib/nyt";
import DynamicBody from "../components/dynamic-body";
import NYTGameSubtitle from "../components/nyt-game-subtitle";
import NYTGameTitle from "../components/nyt-game-title";
import { metadataForGamePage } from "@/lib/metadata";

export const metadata: Metadata = metadataForGamePage(
  "Spelling Bee",
  "Get some help with today's NYT Spelling Bee."
);

export default async function NYTSpellingBeePage() {
  const data = await getLatestData("spelling-bee");

  return (
    <main className="bg-[rgb(247,218,33)]">
      <DynamicBody className="bg-[rgb(247,218,33)]" />
      <NYTGameTitle title="Spelling Bee" />
      {data ? (
        <>
          <NYTGameSubtitle editor={data.editor} date={data.printDate} />
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
