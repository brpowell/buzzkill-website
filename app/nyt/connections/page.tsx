import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connections",
};

export default async function NYTConnectionsPage() {
  const url = "https://aconnections-rwa5zgenkq-uc.a.run.app";
  const response = await fetch(url, { next: { revalidate: 120 } });
  const data = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[rgb(179,167,254)]">
      {JSON.stringify(data, null, 2)}
    </main>
  );
}
