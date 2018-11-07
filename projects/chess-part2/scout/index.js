const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

const scoutfish = `/Users/ebemunk/proj/scoutfish/src/scoutfish`;
const file = "./test.scout";
const queries = [
  {
    name: "castle w ks",
    arg: {
      "white-move": "O-O"
    }
  },
  {
    name: "castle w qs",
    arg: {
      "white-move": "O-O-O"
    }
  },
  {
    name: "castle b ks",
    arg: {
      "black-move": "O-O"
    }
  },
  {
    name: "castle b qs",
    arg: {
      "black-move": "O-O-O"
    }
  }
  // {
  //   name: "castle w then b",
  //   arg: {
  //     sequence: [
  //       { "white-move": ["O-O", "O-O-O"] },
  //       { "black-move": ["O-O", "O-O-O"] }
  //     ]
  //   }
  // },
  // {
  //   name: "castle b then w",
  //   arg: {
  //     sequence: [
  //       { "black-move": ["O-O", "O-O-O"] },
  //       { "white-move": ["O-O", "O-O-O"] }
  //     ]
  //   }
  // }
];

const makeArg = arg => `'${JSON.stringify(arg)}'`;

async function main() {
  const total = await execAsync(
    `${scoutfish} scout ${file} ${makeArg({ pass: "" })}`
  )
    .then(r => JSON.parse(r.stdout))
    .then(r => r["match count"]);

  const results = await Promise.all(
    queries.map(q =>
      execAsync(`${scoutfish} scout ${file} ${makeArg(q.arg)}`)
        .then(r => JSON.parse(r.stdout))
        .then(r => ({
          name: q.name,
          count: r["match count"],
          total: total,
          pct: +(r["match count"] / total).toFixed(2)
        }))
    )
  );
  results.forEach(r => {
    console.log(r);
  });
}

main();
