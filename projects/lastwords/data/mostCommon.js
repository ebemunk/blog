const nlp = require('compromise')
nlp.extend(require('compromise-ngrams'))
const d3 = require('d3')
const fs = require('fs/promises')

const lastStatements = require('./lastStatements.json')
const stopwords = require('./stopwords')

async function wordCount() {
  const allwords = lastStatements
    //.map(d => d.toLowerCase().trim())
    .flatMap(d => nlp(d).ngrams({ size: 1 }))
    .filter(d => !stopwords.includes(d.normal) && d.normal.trim().length)

  const wow = d3
    .rollups(
      allwords,
      v => {
        return d3.sum(v, d => d.count)
      },
      d => d.normal
    )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 100)

  await fs.writeFile(
    __dirname + '/mostCommon.json',
    // JSON.stringify(wow, null, 2),
    JSON.stringify(wow),
    'utf-8'
  )
}

wordCount()
