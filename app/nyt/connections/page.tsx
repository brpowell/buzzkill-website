import { Metadata } from "next";
import DynamicBody from "../components/dynamic-body";
import NYTGameTitle from "../components/nyt-game-title";
import NYTButton from "../components/nyt-button";
import Connections from "./components/connections";
import NYTGameSubtitle from "../components/nyt-game-subtitle";
import { metadataForGamePage } from "@/lib/metadata";
import { GAME_DATA_TTL } from "@/lib/constants";
import { getLatestDataCached } from "@/lib/get-collection";

export const metadata: Metadata = metadataForGamePage(
  "Connections",
  "Get some help with today's NYT Connections."
);

export const revalidate = GAME_DATA_TTL;

export default async function NYTConnectionsPage() {
  const data = await getLatestDataCached("connections");

  return (
    <main className="bg-[rgb(179,167,254)]">
      <DynamicBody className="bg-[rgb(179,167,254)]" />
      <NYTGameTitle title="Connections" />
      {/* <div className="flex justify-center">
      </div> */}
      {data ? (
        <>
          <NYTGameSubtitle date={data.addedAt} editor={data.editor} />
          <NYTButton path="/games/connections" />
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
    </main>
  );
}
