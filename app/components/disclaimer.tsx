import Link from "next/link";
import { usePathname } from "next/navigation";
import { headers } from "next/headers";

export default function Disclaimer() {
  let textColor = "text-slate-400";

  return (
    <footer className="flex flex-col items-center text-center text-sm mt-24 mb-8">
      <div
        className={`px-6 md:px-40 ${textColor} mix-blend-difference max-w-screen-lg`}
      >
        The games and their respective icons featured herein are the exclusive
        property of{" "}
        <span>
          <Link href="https://nytimes.com" className="text-blue-600">
            The New York Times.
          </Link>
        </span>{" "}
        Buzzkill.tips is an independent entity and is not affiliated with,
        endorsed by, or in any way officially connected to The New York Times.
        Additional icons by{" "}
        <Link href="https://icons8.com/" className="text-blue-600">
          Icons8
        </Link>
        .
      </div>
    </footer>
  );
}
