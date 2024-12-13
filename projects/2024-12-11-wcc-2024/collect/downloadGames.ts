import { writeFile } from "fs/promises";

const broadcast = await fetch(
  "https://lichess.org/api/broadcast/n3yHJI5Y"
).then((res) => res.json());
// console.log(broadcast);

const roundURLs = broadcast.rounds.map((r) =>
  r.url.replace("/broadcast/", "/api/broadcast/")
);
// console.log(roundURLs);

const rounds = await Promise.all(
  roundURLs.map((r) => fetch(r).then((res) => res.json()))
);
// console.log(rounds);

const studyIDChapter: [string, string] = rounds
  .filter((r) => r.games.length)
  .map((r) => [r.round.id, r.games[0].id]);
// console.log(studyIDChapter);

const pgns = [];
for (const [studyID, chapterID] of studyIDChapter) {
  const resp = await fetch(
    `https://lichess.org/api/study/${studyID}/${chapterID}.pgn?source=true`
  );
  const pgn = await resp.text();
  pgns.push(pgn);
}

await writeFile(import.meta.dirname + "/wcc2024.pgn", pgns.join("\n\n"));

const roundHTMLScripts = [];
let i = 0;
for (const round of broadcast.rounds) {
  const html = await fetch(round.url).then((res) => res.text());
  const pageInitData = JSON.parse(
    html.match(/page-init-data">(.+)<\/script>/)?.[1]
  );
  roundHTMLScripts.push({
    pgn: pgns[i],
    analysis: pageInitData.data.analysis,
    treeParts: pageInitData.data.treeParts,
  });
  i++;
}

await writeFile(
  import.meta.dirname + "/wcc2024.json",
  JSON.stringify(roundHTMLScripts, null, 2)
);
