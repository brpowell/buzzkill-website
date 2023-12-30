"use client";

import { ConnectionsGameData } from "@/lib/types";
import { useState } from "react";

export interface ConnectionsProps {
  data: ConnectionsGameData;
}

export default function Connections({ data }: ConnectionsProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [hintWord, setHintWord] = useState<string | null>(null);
  const onClick = (
    group: keyof ConnectionsProps["data"]["groups"],
    word: string
  ) => {
    if (selected.includes(word)) {
      setSelected(selected.filter((w) => w !== word));
      return;
    }
    setSelected([...selected, word]);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {Object.values(data.groups)
          .flatMap((group) => group.members)
          .map((member) => {
            return (
              <div
                key={member}
                className="px-4 py-6 border rounded-md justify-center items-center flex bg-gray-50"
              >
                {member}
              </div>
            );
          })}
      </div>
    </div>
  );
}
