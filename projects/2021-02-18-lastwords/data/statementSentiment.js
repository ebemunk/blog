const fs = require('fs/promises')

const nlp = require('./google-nlp.json')

async function run() {
  const sentiments = nlp
    .map(d => [
      d.data.documentSentiment.score,
      d.data.documentSentiment.magnitude,
    ])
    .sort((a, b) => a - b)

  await fs.writeFile(
    __dirname + '/statementSentiment.json',
    JSON.stringify(sentiments, null, 2)
  )
}

run()
