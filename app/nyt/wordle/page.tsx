import { getLatestData } from "@/lib/nyt";
import { Metadata } from "next";
import DynamicBody from "../components/dynamic-body";
import NYTButton from "../components/nyt-button";
import Wordle from "./components/wordle";
import { longDateString } from "@/lib/date";
import NYTGameTitle from "../components/nyt-game-title";
import NYTGameSubtitle from "../components/nyt-game-subtitle";

export const metadata: Metadata = {
  title: "Wordle",
};

export default async function NYTWordlePage() {
  const data = await getLatestData("wordle");

  return (
    <main className="bg-[#e3e3e1]">
      <DynamicBody className="bg-[#e3e3e1]" />
      <NYTGameTitle title="Wordle" />
      {data ? (
        <>
          <NYTGameSubtitle date={data.print_date} editor={data.editor} />
          <p className="my-8">Tap a square to reveal a letter.</p>
          <div className="mb-10">
            <Wordle word={data.solution} />
          </div>
        </>
      ) : (
        <div>{"Weird, we couldn't find any data. Check back later..."}</div>
      )}
      <NYTButton path="/games/wordle" />
    </main>
  );
}
