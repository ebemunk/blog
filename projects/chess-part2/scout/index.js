const { exec } = require("child_process");
const { writeFile } = require("fs");
const { promisify } = require("util");
const Promise = require("bluebird");

const execAsync = promisify(exec);
const writeFileAsync = promisify(writeFile);

const scoutfish = `/Users/ebemunk/proj/scoutfish/src/scoutfish`;
// const file = "./test.scout";
const file = "./twic1247.scout";

const imbalanceResult = imbalance => {
  const reverse = imbalance
    .split("")
    .reverse()
    .join("");

  return {
    name: imbalance,
    white: [
      {
        name: "win",
        arg: {
          imbalance: imbalance,
          result: "1-0"
        }
      },
      {
        name: "lose",
        arg: {
          imbalance: imbalance,
          result: "0-1"
        }
      },
      {
        name: "draw",
        arg: {
          imbalance: imbalance,
          result: "1/2-1/2"
        }
      }
    ],
    black: [
      {
        name: "win",
        arg: {
          imbalance: reverse,
          result: "0-1"
        }
      },
      {
        name: "lose",
        arg: {
          imbalance: reverse,
          result: "1-0"
        }
      },
      {
        name: "draw",
        arg: {
          imbalance: reverse,
          result: "1/2-1/2"
        }
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
  imbalanceResult("Qv")
];

const makeArg = arg => `'${JSON.stringify(arg)}'`;

const doSearch = query =>
  execAsync(`${scoutfish} scout ${file} ${makeArg(query.arg)}`)
    .then(r => JSON.parse(r.stdout))
    .then(r => ({
      x: query.name,
      y: r["match count"]
    }));

const multi = queries => Promise.all(queries.map(doSearch));

const multiSearch = args =>
  Promise.props({
    name: args.name,
    white: multi(args.white),
    black: multi(args.black)
  });

async function main() {
  const total = await execAsync(
    `${scoutfish} scout ${file} ${makeArg({ pass: "" })}`
  )
    .then(r => JSON.parse(r.stdout))
    .then(r => r["match count"]);

  const results = await Promise.all(
    queries.map(multiSearch)
    // queries.map(q =>
    //   doSearch(q).then(r => ({
    //     ...r,
    //     total: total,
    //     pct: +(r.count / total).toFixed(2)
    //   }))
    // )
  );
  // results.forEach(r => {
  //   console.log(r);
  // });
  console.log(results);
  await writeFileAsync(
    "../viz/src/keks.json",
    JSON.stringify(results, null, 2)
  );
}

main();
