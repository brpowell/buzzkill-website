import { getLatestData } from "@/lib/nyt";
import { Metadata } from "next";
import DynamicBody from "../components/dynamic-body";
import NYTGameTitle from "../components/nyt-game-title";
import NYTButton from "../components/nyt-button";
import Connections from "./components/connections";

export const metadata: Metadata = {
  title: "Connections",
};

export default async function NYTConnectionsPage() {
  const data = await getLatestData("connections");

  return (
    <main className="bg-[rgb(179,167,254)]">
      <DynamicBody className="bg-[rgb(179,167,254)]" />
      <NYTGameTitle title="Connections" />
      {data ? (
        <>
          <Connections data={data} />
        </>
      ) : (
        <div>{"Weird, we couldn't find any data. Check back later..."}</div>
      )}
      <div className="flex justify-center">
        <NYTButton path="/games/connections" />
      </div>
    </main>
  );
}
