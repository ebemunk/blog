import standingsJson from "./data/standings.json";
import { Result } from "../../collect/standings";

const standings = standingsJson as [string, Result][];

export { standings };
