const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

const scoutfish = `/Users/ebemunk/proj/scoutfish/src/scoutfish`;
// const file = "./test.scout";
const file = "./twic1247.scout";
const queries = [
  // {
  //   name: "castle w ks",
  //   arg: {
  //     "white-move": "O-O"
  //   }
  // },
  // {
  //   name: "castle w qs",
  //   arg: {
  //     "white-move": "O-O-O"
  //   }
  // },
  // {
  //   name: "castle b ks",
  //   arg: {
  //     "black-move": "O-O"
  //   }
  // },
  // {
  //   name: "castle b qs",
  //   arg: {
  //     "black-move": "O-O-O"
  //   }
  // }
  {
    name: "white wins P up",
    arg: {
      imbalance: "Pv",
      result: "1-0"
    }
  },
  {
    name: "white loses P up",
    arg: {
      imbalance: "Pv",
      result: "0-1"
    }
  },
  {
    name: "white draws P up",
    arg: {
      imbalance: "Pv",
      result: "1/2-1/2"
    }
  },
  {
    name: "black wins P up",
    arg: {
      imbalance: "vP",
      result: "0-1"
    }
  },
  {
    name: "black loses P up",
    arg: {
      imbalance: "vP",
      result: "1-0"
    }
  },
  {
    name: "black draws P up",
    arg: {
      imbalance: "vP",
      result: "1/2-1/2"
    }
  }
];

const makeArg = arg => `'${JSON.stringify(arg)}'`;

const doSearch = query =>
  execAsync(`${scoutfish} scout ${file} ${makeArg(query.arg)}`)
    .then(r => JSON.parse(r.stdout))
    .then(r => ({
      name: query.name,
      count: r["match count"]
    }));

// const multiSearch = args =>
//   Promise.all(args.map(doSearch)).then(results =>
//     results.reduce((acc, r) => ({
//       name: acc.name += ` ${r.name}`,
//       count: acc.count += r.count,
//       total:
//     }), {
//       name: "",
//       count: 0,
//       total: 0
//     })
//   );

async function main() {
  const total = await execAsync(
    `${scoutfish} scout ${file} ${makeArg({ pass: "" })}`
  )
    .then(r => JSON.parse(r.stdout))
    .then(r => r["match count"]);

  const results = await Promise.all(
    queries.map(q =>
      doSearch(q).then(r => ({
        ...r,
        total: total,
        pct: +(r.count / total).toFixed(2)
      }))
    )
  );
  results.forEach(r => {
    console.log(r);
  });
}

main();
