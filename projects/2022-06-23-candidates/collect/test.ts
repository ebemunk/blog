#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write
import { ParseTree } from "https://esm.sh/@mliebelt/pgn-parser@1.4.4";
import { readPgn } from "./util.ts";

// const games = await readPgn();

// const ecos = new Map<string, number>();
// for (const game of games) {
//   if (ecos.has(game.tags?.ECO)) {
//     ecos.set(game.tags?.ECO, ecos.get(game.tags?.ECO)! + 1);
//   } else {
//     ecos.set(game.tags?.ECO, 1);
//   }
// }

// const openings = new Map<string, number>();
// for (const game of games) {
//   if (openings.has(game.tags?.Opening)) {
//     openings.set(game.tags?.Opening, openings.get(game.tags?.Opening)! + 1);
//   } else {
//     openings.set(game.tags?.Opening, 1);
//   }
// }

// console.log(Array.from(ecos).sort((a, b) => b[1] - a[1]));
// console.log(Array.from(openings).sort((a, b) => b[1] - a[1]));

export function writeEMT(game: ParseTree) {
  let white = clockToSeconds("2:00:00");
  let black = clockToSeconds("2:00:00");

  for (const move of game.moves) {
    if (move.moveNumber === 40) {
      const hour = clockToSeconds("1:00:00");
      white += hour;
      black += hour;
    }
    if (move.moveNumber === 60) {
      const fifteenmins = clockToSeconds("0:15:00");
      white += fifteenmins;
      black += fifteenmins;
    }
    if (move.moveNumber > 60) {
      const thirtymins = clockToSeconds("0:00:30");
      white += thirtymins;
      black += thirtymins;
    }

    const currentPlayerClock = move.turn === "w" ? white : black;
    if (!move.commentDiag?.clk) {
      console.log("no clock", move);
      if (!move.commentDiag) move.commentDiag = {};
      move.commentDiag.emt = secondsToClock(0);
      continue;
    }
    const moveClk = clockToSeconds(move.commentDiag.clk!);
    const emt = currentPlayerClock - moveClk;

    if (move.turn === "w") {
      white = moveClk;
    } else {
      black = moveClk;
    }

    move.commentDiag.emt = secondsToClock(emt);

    // console.log(
    //   `${move.turn === "w" ? "" : "..."}${move.moveNumber}: ${
    //     move.commentDiag.emt
    //   }`
    // );
  }
}

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
