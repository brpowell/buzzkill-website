"use client";

import { ConnectionsGameData } from "@/lib/types";
import { useState } from "react";

export interface ConnectionsProps {
  data: ConnectionsGameData;
}

// export default function Connections({ data }: ConnectionsProps) {
//   const [selected, setSelected] = useState<string[]>([]);
//   const [hintWord, setHintWord] = useState<string | null>(null);
//   const onClick = (
//     group: keyof ConnectionsProps["data"]["groups"],
//     word: string
//   ) => {
//     if (selected.includes(word)) {
//       setSelected(selected.filter((w) => w !== word));
//       return;
//     }
//     setSelected([...selected, word]);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-4">
//         {Object.values(data.groups)
//           .flatMap((group) => group.members)
//           .map((member) => {
//             return (
//               <button
//                 key={member}
//                 className="px-4 py-6 border rounded-md justify-center items-center flex bg-gray-50"
//               >
//                 {member}
//               </button>
//             );
//           })}
//       </div>
//       {selected.length > 0 && <button>Clear selected</button>}
//     </div>
//   );
// }

interface RevealState {
  [name: string]: {
    group: boolean;
    members: boolean;
  };
}

export default function Connections({ data }: ConnectionsProps) {
  const groups = Object.entries(data.groups).map(([name, stuff]) => {
    return {
      name,
      members: stuff.members,
    };
  });
  const [revealState, setRevealState] = useState<RevealState>(
    groups.reduce((acc, group) => {
      acc[group.name] = {
        group: false,
        members: false,
      };
      return acc;
    }, {} as RevealState)
  );

  return (
    <div className="flex flex-col gap-3">
      {groups.map((group) => {
        return (
          <button
            key={group.name}
            className="px-4 py-2 bg-slate-200 rounded-sm"
            onClick={() => {
              if (!revealState[group.name].group) {
                setRevealState({
                  ...revealState,
                  [group.name]: {
                    group: true,
                    members: false,
                  },
                });
                return;
              }
              if (!revealState[group.name].members) {
                setRevealState({
                  ...revealState,
                  [group.name]: {
                    group: true,
                    members: true,
                  },
                });
                return;
              }
            }}
          >
            <h3 className="text-lg font-bold mb-3">
              {revealState[group.name].group ? group.name : "Reveal group"}
            </h3>
            <h3 className="text-lg font-bold mb-3">
              {revealState[group.name].group &&
                !revealState[group.name].members &&
                "Reveal members"}
            </h3>
            {revealState[group.name].members &&
              group.members.map((member) => {
                return <div key={member}>{member}</div>;
              })}
          </button>
        );
      })}
    </div>
  );
}
