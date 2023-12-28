"use client";

import { useEffect, useRef, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { games } from "@/lib/games";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close the sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarRef]);

  useEffect(() => {
    const body = document.body;

    // Disable scroll on the body when the sidebar is open
    if (isOpen) {
      const originalStyle = body.style.overflow;
      body.style.overflow = "hidden";

      return () => {
        body.style.overflow = originalStyle; // Re-enable scroll when the component is unmounted or the sidebar is closed
      };
    }
  }, [isOpen]); // Only re-run the effect if isOpen changes

  return (
    <div ref={sidebarRef} className="p-4">
      {/* Button to toggle sidebar */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <Bars3Icon className="h-6 w-6 text-gray-800" />
      </button>

      {/* Overlay with transition classes */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar panel */}
      <div
        className={`absolute top-0 left-0 z-30 w-64 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Content for your sidebar */}
        <nav>
          <div className="pr-4 py-4 pl-2 text-2xl">buzzkill.tips</div>
          <div className="text-md pl-2 pt-2">Games</div>
          {/* Links or content goes here */}
          {games.map((game) => {
            return (
              <Link
                key={game.path}
                href={game.path}
                className="flex flex-row hover:bg-gray-700 p-4 items-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  priority
                  src={game.icon}
                  alt={game.name}
                  width={game.iconSize ?? 34}
                  height={game.iconSize ?? 34}
                  className={game.name === "Wordle" ? "mr-2" : ""}
                />
                <div className="block text-white">{game.name}</div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
