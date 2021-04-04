const fs = require('fs/promises')
const d3 = require('d3')
const nlp = require('compromise')

const nlps = require('./google-nlp.json')

const sentences = async () => {
  const sentences = nlps
    .flatMap(d => d.data.sentences)
    // .sort((a, b) => Math.abs(b.sentiment.score) - Math.abs(a.sentiment.score))
    .sort(
      (a, b) =>
        Math.abs(b.sentiment.magnitude) - Math.abs(a.sentiment.magnitude)
    )

  const result = sentences

  await fs.writeFile(
    __dirname + '/nlp.json',
    JSON.stringify(result, null, 2),
    'utf-8'
  )
}

const documentSentiment = async () => {
  const sentiments = nlps.flatMap(d => d.data.documentSentiment.score)

  await fs.writeFile(
    __dirname + '/nlp.json',
    JSON.stringify(sentiments, null, 2),
    'utf-8'
  )
}

const mostCommon = require('./mostCommon.json').map(d => d[0])

const wordSentiment = async () => {
  const entities = nlps
    .flatMap(d => d.data.entities)
    .filter(d => mostCommon.includes(d.name))

  const barf = d3.rollups(
    entities,
    v => [
      d3.mean(v, d => d.salience),
      d3.mean(v, d => d.sentiment.score),
      v.length,
    ],
    d => d.name
  )

  console.log(barf.length, mostCommon.length)
  const found = barf.map(d => d[0])
  console.log('diff', d3.difference(mostCommon, found))

  // console.log(barf)
  await fs.writeFile(
    __dirname + '/barf.json',
    JSON.stringify(barf, null, 2),
    'utf-8'
  )
}

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

  await fs.writeFile(
    __dirname + '/nlp.json',
    JSON.stringify(result, null, 2),
    'utf-8'
  )
}

names()
