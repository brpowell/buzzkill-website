import { getLatestData } from "@/lib/nyt";
import { Metadata } from "next";
import DynamicBody from "../components/dynamic-body";
import NYTGameTitle from "../components/nyt-game-title";
import NYTGameSubtitle from "../components/nyt-game-subtitle";
import NYTButton from "../components/nyt-button";

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
          {Object.entries(data.groups).map(([key, value]) => {
            return (
              <div key={key} className="flex flex-row gap-2">
                {value.members.map((member) => {
                  return <div key={member}>{member}</div>;
                })}
              </div>
            );
          })}
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
