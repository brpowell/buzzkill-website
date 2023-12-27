import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

const games = [
  {
    name: "Spelling Bee",
    path: "/nyt/spelling-bee",
    icon: "/game-icons/spelling-bee-icon.svg",
    color: "game-spelling-bee",
  },
  {
    name: "Connections",
    path: "/nyt/connections",
    icon: "/game-icons/connections-icon.svg",
    color: "game-connections",
  },
  {
    name: "Letter Boxed",
    path: "/nyt/letter-boxed",
    icon: "/game-icons/letter-boxed-icon.svg",
    color: "game-letter-boxed",
  },
  {
    name: "Wordle",
    path: "/nyt/wordle",
    icon: "/game-icons/wordle-icon.svg",
    color: "game-wordle",
    iconSize: 23,
  },
];

export const metadata: Metadata = {
  title: "Buzzkill.tips",
  description: "Get answers to your favorite games",
};

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between flex-col">
      <div className="flex flex-col items-center pt-12 sm:p-24">
        <h1 className="text-6xl mb-4">Buzzkill.tips</h1>
        <h3 className="text-2xl mb-12 italic text-gray-500">Just tell me</h3>
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
                    width={game.iconSize ?? 34}
                    height={game.iconSize ?? 34}
                    className={game.name === "Wordle" ? "mr-2" : ""}
                  />
                  <div className="text-left w-full">{game.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <footer className="flex justify-center py-6 text-gray-500">
        Made out of playful spite
      </footer>
    </main>
  );
}
