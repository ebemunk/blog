#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write

const urls = "abcde"
  .split("")
  .map((char) => `https://github.com/niklasf/eco/raw/master/${char}.tsv`);
const files = await Promise.all(
  urls.map((url) => fetch(url).then((res) => res.text()))
);

const eco = files.flatMap((str) => {
  return str
    .split("\n")
    .slice(1)
    .filter(Boolean)
    .map((line) => {
      const [eco, name, moves] = line.split("\t");
      return { eco, name, moves };
    });
});

Deno.writeTextFile("eco.json", JSON.stringify(eco, null, 2));
