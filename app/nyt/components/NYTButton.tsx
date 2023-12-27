import Image from "next/image";
import Link from "next/link";

export default function NYTButton() {
  return (
    <Link href="https://www.nytimes.com/puzzles/spelling-bee">
      <button className="text-lg my-8 bg-white px-4 py-3 rounded-sm flex gap-3">
        <Image src={"/nyt.svg"} alt="Play on NYT" width={20} height={20} />
        Play on NYT
      </button>
    </Link>
  );
}
