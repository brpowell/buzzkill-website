import { getLatestData } from "@/lib/nyt";
import { Metadata } from "next";
import DynamicBody from "../components/dynamic-body";
import NYTGameTitle from "../components/nyt-game-title";
import NYTButton from "../components/nyt-button";
import Connections from "./components/connections";
import NYTGameSubtitle from "../components/nyt-game-subtitle";
import { metadataForGamePage } from "@/lib/metadata";

export const metadata: Metadata = metadataForGamePage(
  "Connections",
  "Get some help with today's NYT Connections."
);

export default async function NYTConnectionsPage() {
  const data = await getLatestData("connections");

  return (
    <main className="bg-[rgb(179,167,254)]">
      <DynamicBody className="bg-[rgb(179,167,254)]" />
      <NYTGameTitle title="Connections" />
      {/* <div className="flex justify-center">
      </div> */}
      {data ? (
        <>
          <NYTGameSubtitle date={data.addedAt} editor={data.editor} />
          <p className="my-8">
            {
              "Click a group to reveal the group name. Click again to reveal the words."
            }
          </p>
          <Connections data={data} />
        </>
      ) : (
        <div>{"Weird, we couldn't find any data. Check back later..."}</div>
      )}
      <NYTButton path="/games/connections" />
    </main>
  );
}
