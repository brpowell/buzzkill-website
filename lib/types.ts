// import { Page } from "puppeteer";

interface BaseGameData {
  addedAt: string;
}

export interface SpellingBeeGameData {
  id: number;
  printDate: string;
  answers: string[];
  pangrams: string[];
  editor: string;
  displayDate: string;
  displayWeekday: string;
}

export interface ConnectionsGameData extends BaseGameData {
  id: number;
  // groups: {
  //   [name: string]: {
  //     level: number;
  //     members: string[];
  //   };
  // };
  categories: Array<{
    title: string;
    cards: Array<{
      content: string;
      position: number;
    }>;
  }>;
  startingGroups: string[][];
  editor?: string;
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

export interface WordleGameData extends BaseGameData {
  solution: string;
  editor: string;
  id: number;
  print_date: string;
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
  parse: (data: GameDataResponse[T], page: any) => Promise<any> | any;
}
