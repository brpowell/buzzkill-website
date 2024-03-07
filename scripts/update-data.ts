import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);

dotenv.config({
  path: join(__filename, "..", "..", ".env.local"),
});

import { join } from "path";
import {
  fetchConnections,
  fetchLetterBoxed,
  fetchSpellingBee,
  fetchWordle,
} from "@/lib/games";
import { fileURLToPath } from "url";
import { getFirebase } from "@/lib/firebase";

getFirebase();

(async () => {
  await fetchWordle();
  await fetchSpellingBee();
  await fetchConnections();
  await fetchLetterBoxed();
})();
