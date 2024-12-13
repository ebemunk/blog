import { parse, ParseTree } from "@mliebelt/pgn-parser";
import { readFile } from "fs/promises";

export function clockToSeconds(clock: string) {
  const [hours, minutes, seconds] = clock.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

export function secondsToClock(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;
  return `${hours}:${minutes}:${sec}`;
}

function getResults(games: ParseTree[]) {
  const results = games.reduce(
    (acc, game) => {
      const prevGame = acc[acc.length - 1];
      if (game.tags!.Result === "1-0") {
        acc.push({
          [game.tags.White]: prevGame[game.tags.White] + 1,
          [game.tags.Black]: prevGame[game.tags.Black],
          white: game.tags.White,
        });
      }
      if (game.tags.Result === "0-1") {
        acc.push({
          [game.tags.White]: prevGame[game.tags.White],
          [game.tags.Black]: prevGame[game.tags.Black] + 1,
          white: game.tags.White,
        });
      }
      if (game.tags.Result === "1/2-1/2") {
        acc.push({
          [game.tags.White]: prevGame[game.tags.White] + 0.5,
          [game.tags.Black]: prevGame[game.tags.Black] + 0.5,
          white: game.tags.White,
        });
      }

      return acc;
    },
    [{ "Ding, Liren": 0, "Gukesh D": 0 }]
  );
  console.log(results);
}

async function main() {
  const __dirname = new URL(".", import.meta.url).pathname;
  const file = await readFile(__dirname + "/wcc2024.pgn", "utf-8");
  const games = parse(file, {
    startRule: "games",
  }) as ParseTree[];
  // console.log(games[0]);
  // console.log(games[0].moves.map((m) => clockToSeconds(m.commentDiag.clk)));
  getResults(games);
}

main().catch(console.error);
