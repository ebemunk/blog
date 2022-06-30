#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write

import { ParseTree } from "https://esm.sh/@mliebelt/pgn-parser@1.4.4";
import { Chess } from "https://esm.sh/chess.js@0.13.3";
import { writeEMT } from "./test.ts";
import { allPlayers, playerName, readPgn } from "./util.ts";

const games = await readPgn();

export interface GameResult {
  result: "w" | "l" | "d";
  isWhite: boolean;
  endPositionFen: string;
  game: ParseTree;
}

export interface Result {
  points: number;
  sb: number;
  games: GameResult[];
  resultsAgainst: { [key: string]: number };
}

const players = allPlayers(games);

const standings = new Map<string, Result>();

for (const player of players) {
  standings.set(player, {
    points: 0,
    sb: 0,
    games: [],
    resultsAgainst: Array.from(players).reduce(
      (acc, p) => ({ ...acc, [p]: 0 }),
      {}
    ),
  });
}

for (const game of games) {
  if (!game.tags?.Result) {
    throw new Error("game has no result");
  }

  if (!game.tags.White || !game.tags.Black) {
    continue;
  }

  const chess = new Chess();
  for (const move of game.moves) {
    chess.move(move.notation.notation);
  }
  const endPositionFen = chess.fen();

  writeEMT(game);

  const whiteName = playerName(game.tags.White);
  const blackName = playerName(game.tags.Black);
  const white = standings.get(whiteName)!;
  const black = standings.get(blackName)!;

  if (game.tags.Result === "1-0") {
    white.games.push({
      result: "w",
      isWhite: true,
      endPositionFen,
      game,
    });
    black.games.push({
      result: "l",
      isWhite: false,
      endPositionFen,
      game,
    });
    white.points++;
    white.resultsAgainst[blackName]++;
  } else if (game.tags.Result === "0-1") {
    white.games.push({
      result: "l",
      isWhite: true,
      endPositionFen,
      game,
    });
    black.games.push({
      result: "w",
      isWhite: false,
      endPositionFen,
      game,
    });
    black.points++;
    black.resultsAgainst[whiteName]++;
  } else if (game.tags.Result === "1/2-1/2") {
    white.games.push({
      result: "d",
      isWhite: true,
      endPositionFen,
      game,
    });
    black.games.push({
      result: "d",
      isWhite: false,
      endPositionFen,
      game,
    });
    white.points += 0.5;
    black.points += 0.5;
    white.resultsAgainst[blackName] += 0.5;
    black.resultsAgainst[whiteName] += 0.5;
  }
}

for (const name of players) {
  const player = standings.get(name)!;
  for (const [opponent, mul] of Object.entries(player.resultsAgainst)) {
    player.sb += mul * standings.get(opponent)!.points;
  }
}

await Deno.writeTextFile(
  "../viz/src/data/standings.json",
  JSON.stringify(
    Array.from(standings).sort((a, b) => b[1].points - a[1].points),
    null,
    2
  )
);
