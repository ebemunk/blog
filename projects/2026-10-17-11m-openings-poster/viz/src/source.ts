import raw from "./data/openings-2m.json";
import { normalize } from "./tree";

export const sourceTree = normalize(raw);
