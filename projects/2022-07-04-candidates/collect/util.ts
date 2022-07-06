import { parse, ParseTree } from "https://esm.sh/@mliebelt/pgn-parser@1.4.4";

export async function readPgn() {
  const file = await Deno.readTextFile("./tourney.pgn");
  const games = file
    // TimeControl value is invalid PGN
    .replaceAll(/^\[TimeControl.+$/gm, "");

  const parsed = parse(games, { startRule: "games" }) as ParseTree[];
  if (!Array.isArray(parsed)) throw new Error("games not an array!");
  return parsed;
}

export function allPlayers(games: ParseTree[]) {
  const players = new Set<string>();
  for (const game of games) {
    if (!game.tags?.White || !game.tags?.Black) {
      console.error("game has no white or black player", game.tags);
      continue;
    }
    players.add(playerName(game.tags.White));
    players.add(playerName(game.tags.Black));
  }
  return players;
}

export function playerName(name: string) {
  let ret = name;
  if (name.includes(", ")) {
    const [last, first] = name.split(", ");
    ret = `${first} ${last}`;
  }

  if (ret === "Liren Ding") return "Ding Liren";
  return ret;
}
