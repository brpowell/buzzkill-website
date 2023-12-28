import { getLatestData } from "@/lib/nyt";
import { Metadata } from "next";
import DynamicBody from "../components/dynamic-body";
import NYTButton from "../components/nyt-button";
import Wordle from "./components/wordle";
import { longDateString } from "@/lib/date";

export const metadata: Metadata = {
  title: "Wordle",
};

export default async function NYTWordlePage() {
  const data = await getLatestData("wordle");

  return (
    <main className="flex min-h-screen flex-col items-center p-14 bg-[#e3e3e1]">
      <DynamicBody className="bg-[#e3e3e1]" />
      <h1 className="text-5xl mb-8">Wordle</h1>
      {data ? (
        <>
          <h2 className="text-2xl mb-1">{longDateString(data.print_date)}</h2>
          <h3 className="text-black">{`By ${data.editor}`}</h3>
          <div className="my-8">
            <Wordle word={data.solution} />
          </div>
          <NYTButton path="/games/wordle" />
        </>
      ) : (
        <div>{"Weird, we couldn't find any data. Check back later..."}</div>
      )}
    </main>
  );
}
