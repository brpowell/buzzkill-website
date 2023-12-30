import Image from "next/image";
import Link from "next/link";

export interface NYTButtonProps {
  path: string;
}

export default function NYTButton({ path }: NYTButtonProps) {
  const url = new URL(path, "https://www.nytimes.com").href;
  return (
    <Link
      href={url}
      className="text-lg my-8 bg-white px-3 py-2 rounded-sm flex gap-3 max-w-fit"
    >
      <Image src={"/nyt.svg"} alt="Play on NYT" width={16} height={16} />
      Play on NYT
    </Link>
  );
}
