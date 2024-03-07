import { cache } from "react";
import { getLatestData } from "./nyt";

// cache latest data
export const getLatestDataCached = cache(getLatestData);
