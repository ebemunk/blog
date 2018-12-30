const { exec } = require("child_process");
const { writeFile } = require("fs");
const { promisify } = require("util");
const Promise = require("bluebird");

const execAsync = promisify(exec);
const writeFileAsync = promisify(writeFile);

const scoutfish = `/Users/ebemunk/proj/scoutfish/src/scoutfish`;
// const file = "./test.scout";
// const file = "./twic1247.scout";
const file = "/Users/ebemunk/Downloads/millionbase-2.22.scout";

const imbalanceResult = imbalance => {
  const reverse = imbalance
    .split("")
    .reverse()
    .join("");

  const gen = (imbalance, result) => {
    return {
      sequence: [
        {
          streak: [
            { imbalance: imbalance },
            { imbalance: imbalance },
            { imbalance: imbalance }
          ]
        },
        { result: result }
      ]
    };
  };

  return {
    name: imbalance,
    white: [
      {
        name: "win",
        arg: gen(imbalance, "1-0")
      },
      {
        name: "lose",
        arg: gen(imbalance, "0-1")
      },
      {
        name: "draw",
        arg: gen(imbalance, "1/2-1/2")
      }
    ],
    black: [
      {
        name: "win",
        arg: gen(reverse, "0-1")
      },
      {
        name: "lose",
        arg: gen(reverse, "1-0")
      },
      {
        name: "draw",
        arg: gen(reverse, "1/2-1/2")
      }
    ]
  };
};

const queries = [
  imbalanceResult("Pv"),
  imbalanceResult("PPv"),
  imbalanceResult("PPPv"),

  imbalanceResult("Nv"),
  imbalanceResult("Bv"),
  imbalanceResult("Rv"),
  imbalanceResult("Qv"),

  imbalanceResult("NvP"),
  imbalanceResult("NvPP"),
  imbalanceResult("NvPPP"),
  imbalanceResult("NvPPPP"),

  imbalanceResult("BvP"),
  imbalanceResult("BvPP"),
  imbalanceResult("BvPPP"),
  imbalanceResult("BvPPPP"),

  imbalanceResult("NvB"),
  imbalanceResult("NvR"),
  imbalanceResult("NvQ"),
  imbalanceResult("BvR"),
  imbalanceResult("BvQ"),

  imbalanceResult("RvN"),
  imbalanceResult("RvB"),
  imbalanceResult("RvPPP"),

  imbalanceResult("NBvR"),
  imbalanceResult("NNvR"),
  imbalanceResult("BBvR"),

  imbalanceResult("QvR"),
  imbalanceResult("QvRR")
];

const makeArg = arg => `'${JSON.stringify(arg)}'`;

const doSearch = query =>
  execAsync(`${scoutfish} scout ${file} ${makeArg(query.arg)}`, {
    maxBuffer: Infinity
  })
    .then(r => JSON.parse(r.stdout))
    .then(r => ({
      x: query.name,
      y: r["match count"]
    }));

const multi = queries => Promise.map(queries, doSearch);

const multiSearch = args =>
  Promise.props({
    name: args.name,
    white: multi(args.white),
    black: multi(args.black)
  });

async function main() {
  // const total = await execAsync(
  //   `${scoutfish} scout ${file} ${makeArg({ pass: "" })}`,
  //   { maxBuffer: Infinity }
  // )
  //   .then(r => JSON.parse(r.stdout))
  //   .then(r => r["match count"]);

  // const results = await Promise.all(
  //   queries.map(multiSearch)
  //   // queries.map(q =>
  //   //   doSearch(q).then(r => ({
  //   //     ...r,
  //   //     total: total,
  //   //     pct: +(r.count / total).toFixed(2)
  //   //   }))
  //   // )
  // );

  const results = await Promise.map(queries, multiSearch, { concurrency: 1 });

  console.log(results);
  await writeFileAsync(
    "../viz/src/keks.json",
    JSON.stringify(results, null, 2)
  );
}

main();
