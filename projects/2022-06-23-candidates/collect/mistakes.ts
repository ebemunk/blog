#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write

import { allPlayers, playerName, readPgn } from "./util.ts";

const games = await readPgn();

interface Mis {
  inaccuracy: number;
  mistake: number;
  blunder: number;
}
const map = new Map<string, Mis>();

const players = allPlayers(games);

for (const player of players) {
  map.set(player, {
    inaccuracy: 0,
    mistake: 0,
    blunder: 0,
  });
}

for (const game of games) {
  for (const move of game.moves) {
    const player = playerName(game.tags[move.turn === "w" ? "White" : "Black"]);
    const mis = map.get(player);

    if (move.commentDiag?.comment?.startsWith(" Inaccuracy")) {
      mis.inaccuracy++;
    }

    if (move.commentDiag?.comment?.startsWith(" Mistake")) {
      mis.mistake++;
    }

    if (move.commentDiag?.comment?.startsWith(" Blunder")) {
      mis.blunder++;
    }
  }
}

await Deno.writeTextFile(
  "../viz/src/data/mistakes.json",
  JSON.stringify(Array.from(map.entries()), null, 2)
);
