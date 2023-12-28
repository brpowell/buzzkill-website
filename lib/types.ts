export interface SpellingBeeGameData {
  id: number;
  printDate: string;
  answers: string[];
  pangrams: string[];
  editor: string;
  displayDate: string;
  displayWeekday: string;
}

export interface ConnectionsGameData {
  id: number;
  groups: {
    [name: string]: {
      level: number;
      members: string[];
    };
  };
  startingGroups: string[][];
}

export interface LetterBoxedGameData {
  id: number;
  expiration: number;
  ourSolution: string[];
  printDate: string;
  sides: string[];
  par: number;
  editor: string;
}

export interface WordleGameData {
  solution: string;
  editor: string;
  id: number;
  print_date: string;
  addedAt: string;
}

export interface GameDataResponse {
  "spelling-bee": {
    today: SpellingBeeGameData;
  };
  connections: ConnectionsGameData[];
  "letter-boxed": LetterBoxedGameData;
  wordle: WordleGameData;
}

export interface GameData
  extends Pick<GameDataResponse, "letter-boxed" | "wordle"> {
  "spelling-bee": SpellingBeeGameData;
  connections: ConnectionsGameData;
}

export interface GameConfig<T extends keyof GameData> {
  path: string;
  collection: T;
  parse: (data: GameDataResponse[T]) => any;
}
