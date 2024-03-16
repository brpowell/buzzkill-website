import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { games } from "@/lib/constants";

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
        <Image
          src={"/logo.webp"}
          width={450}
          height={337}
          alt="buzzkill.tips - just tell me"
        />
        <h3 className="text-lg mb-12 text-gray-600 text-center px-4">
          Tools and answers to your favorite New York Times games, updated
          daily. <br />
          <br /> Made out of playful spite.
        </h3>
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
    </main>
  );
}
