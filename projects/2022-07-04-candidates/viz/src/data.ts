import { Result } from "../../collect/standings";
import pgnstats from "./data/pgnstats.json";
import standingsJson from "./data/standings.json";

const standings = standingsJson as [string, Result][];

export { standings, pgnstats };
