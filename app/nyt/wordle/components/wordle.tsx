"use client";

import { useState } from "react";

export interface WordleProps {
  word: string;
}

export default function Wordle({ word }: WordleProps) {
  const letters = word.split("").map((letter) => letter.toUpperCase());

  const [revealed, setRevealed] = useState<{ [letter: string]: boolean }>(
    letters.reduce((acc, key) => {
      return {
        ...acc,
        [key]: false,
      };
    }, {})
  );

  const allRevealed = Object.values(revealed).every((isRevealed) => isRevealed);

  return (
    <div className="text-center">
      <div className="flex flex-row gap-2">
        {Object.entries(revealed).map(([letter, isRevealed]) => {
          return (
            <button
              key={letter}
              className={`${
                isRevealed
                  ? "bg-green-600 text-white [transform:rotateX(360deg)]"
                  : ""
              } p-2 w-14 h-14 flex justify-center items-center text-3xl font-bold border-2 border-slate-300 transition-all duration-500 cursor-pointer [transform-style:preserve-3d]`}
              onClick={() =>
                setRevealed({
                  ...revealed,
                  [letter]: true,
                })
              }
            >
              {isRevealed ? letter : "?"}
            </button>
          );
        })}
      </div>
      {!allRevealed && (
        <button
          className="bg- text-white p-2 mt-4 bg-green-600"
          onClick={() =>
            setRevealed(
              letters.reduce((acc, key) => {
                return {
                  ...acc,
                  [key]: true,
                };
              }, {})
            )
          }
        >
          Reveal All
        </button>
      )}
    </div>
  );
}
