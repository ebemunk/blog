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
  vs: string;
  points: number;
  sb: number;
}

export interface Result {
  points: number;
  sb: number;
  games: GameResult[];
  winsAgainst: { [key: string]: number };
}

const players = allPlayers(games);

const standings = new Map<string, Result>();

for (const player of players) {
  standings.set(player, {
    points: 0,
    sb: 0,
    games: [],
    winsAgainst: Array.from(players).reduce(
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

  const lastWhite = white.games.slice(-1)[0];
  const lastBlack = black.games.slice(-1)[0];
  if (game.tags.Result === "1-0") {
    white.games.push({
      result: "w",
      isWhite: true,
      endPositionFen,
      game,
      vs: blackName,
      points: (lastWhite?.points ?? 0) + 1,
      sb: NaN,
    });

    black.games.push({
      result: "l",
      isWhite: false,
      endPositionFen,
      game,
      vs: whiteName,
      points: lastBlack?.points ?? 0,
      sb: NaN,
    });
    white.points++;
    white.winsAgainst[blackName]++;
  } else if (game.tags.Result === "0-1") {
    white.games.push({
      result: "l",
      isWhite: true,
      endPositionFen,
      game,
      vs: blackName,
      points: lastWhite?.points ?? 0,
      sb: NaN,
    });
    black.games.push({
      result: "w",
      isWhite: false,
      endPositionFen,
      game,
      vs: whiteName,
      points: (lastBlack?.points ?? 0) + 1,
      sb: NaN,
    });
    black.points++;
    black.winsAgainst[whiteName]++;
  } else if (game.tags.Result === "1/2-1/2") {
    white.games.push({
      result: "d",
      isWhite: true,
      endPositionFen,
      game,
      vs: blackName,
      points: (lastWhite?.points ?? 0) + 0.5,
      sb: NaN,
    });
    black.games.push({
      result: "d",
      isWhite: false,
      endPositionFen,
      game,
      vs: whiteName,
      points: (lastBlack?.points ?? 0) + 0.5,
      sb: NaN,
    });
    white.points += 0.5;
    black.points += 0.5;
    white.winsAgainst[blackName] += 0.5;
    black.winsAgainst[whiteName] += 0.5;
  }
}

for (const name of players) {
  const player = standings.get(name)!;
  const games = player.games;
  for (let i = 0; i < games.length; i++) {
    const winsAgainst = games
      .slice(0, i + 1)
      .filter((game) => ["w", "d"].includes(game.result))
      .reduce(
        (acc, game) => ({
          ...acc,
          [game.vs]: (acc?.[game.vs] ?? 0) + (game.result === "w" ? 1 : 0.5),
        }),
        {} as { [key: string]: number }
      );
    games[i].sb = 0;
    for (const [opponent, mul] of Object.entries(winsAgainst)) {
      games[i].sb += mul * standings.get(opponent)!.games[i].points;
    }
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
