const fs = require('fs/promises')
const d3 = require('d3')
const nlp = require('compromise')

const lastStatements = require('./lastStatements.json').map(d => d.statement)

const names = async () => {
  const firstnames = lastStatements
    .flatMap(d =>
      nlp(d)
        .nouns()
        .json()
        .flatMap(dd =>
          dd.terms.map(ddd =>
            ddd.tags.includes('FirstName') ? ddd.text : null
          )
        )
    )
    .filter(d => d)

  const result = d3
    .rollups(
      firstnames,
      v => v.length,
      d => d
    )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  await fs.writeFile(
    __dirname + '/firstNames.json',
    JSON.stringify(result, null, 2),
    'utf-8'
  )
}

names()
