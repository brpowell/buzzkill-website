"use client";

import { SpellingBeeGameData } from "@/lib/types";
import { useMemo, useState } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export interface SpellingBeeProps {
  data: SpellingBeeGameData;
}

export default function SpellingBee({ data }: SpellingBeeProps) {
  const allWords = useMemo(() => data.answers.sort(), [data.answers]);
  const [markedWords, setMarkedWords] = useState<string[]>([]);

  const onWordClick = (word: string) => {
    if (!markedWords.includes(word)) {
      setMarkedWords([...markedWords, word]);
    }
  };

  const onUndoClick = () => {
    if (markedWords.length > 0) {
      setMarkedWords(markedWords.slice(0, -1));
    }
  };

  return (
    <div>
      <div className="text-lg font-semibold">{`${markedWords.length}/${allWords.length} words`}</div>
      {markedWords.length === allWords.length ? (
        <div className="text-2xl text-gray-700 text-opacity-50 mt-4">
          All done!
        </div>
      ) : (
        <ul className="flex flex-col w-full items-center">
          {allWords.map(
            (word) =>
              !markedWords.includes(word) && (
                <li key={word} className={`w-full transition-all`}>
                  <button
                    className="w-full bg-white border-white mt-4 py-3 px-3 rounded shadow-sm bg-opacity-70 text-lg hover:bg-opacity-90 transition-all"
                    onClick={() => onWordClick(word)}
                  >
                    {word}
                  </button>
                </li>
              )
          )}
        </ul>
      )}
      {markedWords.length > 0 && (
        <button
          className="fixed transition-all right-6 bottom-6 bg-white bg-opacity-70 p-3 rounded-full hover:bg-opacity-100 shadow-lg"
          onClick={onUndoClick}
        >
          <ArrowUturnLeftIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
