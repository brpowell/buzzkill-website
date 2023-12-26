import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spelling Bee",
};

export default async function NYTSpellingBeePage() {
  const url = "https://aspellingbee-rwa5zgenkq-uc.a.run.app";
  const response = await fetch(url);
  const data = await response.json();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[rgb(247,218,33)]">
      <h1 className="text-5xl mb-12">Spelling Bee</h1>
      <ul>
        {data.answers.map((answer: string) => (
          <li key={answer}>{answer}</li>
        ))}
      </ul>
      {JSON.stringify(data, null, 2)}
    </main>
  );
}
