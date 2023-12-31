import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { games } from "@/lib/games";

const description =
  "Discover solutions for New York Times games and puzzles. Get unstuck and enjoy your gameplay more!";

export const metadata: Metadata = {
  title: "Buzzkill.tips - NYT Games & Puzzles Solutions",
  description,
  openGraph: {
    title: "Buzzkill.tips: Answers to NYT Games & Puzzles.",
    siteName: "Buzzkill.tips",
    description,
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center pt-8 sm:p-18">
        <h1 className="text-6xl mb-4">Buzzkill.tips</h1>
        <h3 className="text-lg mb-4 text-gray-600 text-center px-4">
          Tools and answers to your favorite New York Times games
        </h3>
        <h4 className="text-md mb-12 text-gray-400 italic">
          Just tell me <span className="not-italic ml-1">{""}🫠</span>
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {games.map((game) => {
            return (
              <Link key={game.path} href={game.path}>
                <div
                  className={`hover:bg-slate-100 text-lg justify-between border h-full rounded-sm p-6 min-w-44 flex items-center flex-row gap-2 transition-colors hover:bg-${game.color}`}
                >
                  <Image
                    priority
                    src={game.icon}
                    alt={game.name}
                    width={28}
                    height={28}
                    className="mr-1"
                  />
                  <div className="text-left w-full">{game.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center py-6 mt-12 text-gray-500">
        <div>Made out of playful spite.</div>
      </div>
    </main>
  );
}
