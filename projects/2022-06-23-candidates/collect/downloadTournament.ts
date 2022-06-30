#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write

const TOURNAMENT_ID = "kAvAGI7N";
const broadcast = await fetch(
  `https://lichess.org/broadcast/-/${TOURNAMENT_ID}`
).then((resp) => resp.json());

const rounds = await Promise.all(
  broadcast.rounds
    .map((round: any) => round.id)
    .map((id: string) =>
      fetch(`https://lichess.org/api/broadcast/round/${id}.pgn`).then((resp) =>
        resp.text()
      )
    )
);

await Deno.writeTextFile("./tourney.pgn", rounds.join("\n"));
