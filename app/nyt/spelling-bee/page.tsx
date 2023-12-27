import { Metadata } from "next";
import NYTButton from "../components/NYTButton";

export const metadata: Metadata = {
  title: "Spelling Bee",
};

export default async function NYTSpellingBeePage() {
  const url = "https://aspellingbee-rwa5zgenkq-uc.a.run.app";
  const response = await fetch(url, { next: { revalidate: 120 } });
  const data = await response.json();
  return (
    <main className="flex min-h-screen flex-col p-14 bg-[rgb(247,218,33)] items-center">
      <h1 className="text-5xl mb-8">Spelling Bee</h1>
      <h2 className="text-2xl mb-1">{`${data.displayWeekday}, ${data.displayDate}`}</h2>
      <h3 className="text-black">{`By ${data.editor}`}</h3>
      <NYTButton />
      <ul className="flex flex-col w-full items-center">
        {data.answers.sort().map((answer: string) => (
          <li
            key={answer}
            className="w-full border-2 border-opacity-20 border-white mt-4 p-3 rounded-sm shadow-lg bg-opacity-50 text-lg max-w-72"
          >
            {answer}
          </li>
        ))}
      </ul>
    </main>
  );
}
