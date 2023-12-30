"use client";

import { useState } from "react";

export interface WordleProps {
  word: string;
}

export default function Wordle({ word }: WordleProps) {
  const [letterState, setLetterState] = useState<
    Array<{ letter: string; isRevealed: boolean }>
  >(
    word
      .split("")
      .map((letter) => ({ letter: letter.toUpperCase(), isRevealed: false }))
  );

  const allRevealed = letterState.every((entry) => entry.isRevealed);

  return (
    <div className="text-center">
      <div className="flex flex-row gap-2">
        {letterState.map(({ letter, isRevealed }, outerI) => {
          return (
            <button
              key={letter}
              className={`${
                isRevealed
                  ? "bg-green-600 text-white [transform:rotateX(360deg)]"
                  : ""
              } p-2 w-14 h-14 flex justify-center items-center text-3xl font-bold border-2 border-slate-300 transition-all duration-500 cursor-pointer [transform-style:preserve-3d]`}
              onClick={() =>
                setLetterState(
                  letterState.map((entry, innerI) => {
                    if (outerI === innerI) {
                      return {
                        ...entry,
                        isRevealed: true,
                      };
                    }
                    return entry;
                  })
                )
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
            setLetterState(
              letterState.map((entry) => {
                return {
                  ...entry,
                  isRevealed: true,
                };
              })
            )
          }
        >
          Reveal All
        </button>
      )}
    </div>
  );
}
