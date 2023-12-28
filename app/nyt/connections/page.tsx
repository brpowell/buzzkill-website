import { getLatestData } from "@/lib/nyt";
import { Metadata } from "next";
import DynamicBody from "../components/dynamic-body";

export const metadata: Metadata = {
  title: "Connections",
};

export default async function NYTConnectionsPage() {
  const data = await getLatestData("connections");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[rgb(179,167,254)]">
      <DynamicBody className="bg-[rgb(179,167,254)]" />
      {JSON.stringify(data, null, 2)}
    </main>
  );
}
