const fs = require('fs/promises')

const lastStatements = require('./lastStatements.json')

async function run() {
  const counts = lastStatements
    .map(d => d.split(' ').length)
    .sort((a, b) => a - b)

  await fs.writeFile(
    __dirname + '/statementLengths.json',
    JSON.stringify(counts, null, 2)
  )
}

run()
