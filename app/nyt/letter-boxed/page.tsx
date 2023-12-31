import { getLatestData } from "@/lib/nyt";
import { Metadata } from "next";
import DynamicBody from "../components/dynamic-body";
import NYTGameTitle from "../components/nyt-game-title";
import NYTGameSubtitle from "../components/nyt-game-subtitle";
import NYTButton from "../components/nyt-button";
import { metadataForGamePage } from "@/lib/metadata";
import { GAME_DATA_TTL } from "@/lib/constants";

export const metadata: Metadata = metadataForGamePage(
  "Letter Boxed",
  "Get some help with today's NYT Letter Boxed."
);

export const revalidate = GAME_DATA_TTL;

export default async function NYTLetterBoxedPage() {
  const data = await getLatestData("letter-boxed");

  return (
    <main className="bg-[rgb(252,113,107)]">
      <DynamicBody className="bg-[rgb(252,113,107)]" />
      <NYTGameTitle title="Letter Boxed" />
      {data ? (
        <>
          <NYTGameSubtitle date={data.printDate} editor={data.editor} />
          <NYTButton path="/puzzles/letter-boxed" />
          <div className="mt-10">
            <h3 className="text-lg font-bold mb-3">One solution is...</h3>
            {data.ourSolution.map((solution) => {
              return <div key={solution}>{solution}</div>;
            })}
          </div>
        </>
      ) : (
        <div>{"Weird, we couldn't find any data. Check back later..."}</div>
      )}
    </main>
  );
}
