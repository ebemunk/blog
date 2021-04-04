const axios = require('axios')
const fs = require('fs/promises')
const map = require('bluebird').map

const apikey = require('./apikey.json')
const lastStatements = require('./lastStatements.json').map(d => d.statement)

const run = async () => {
  let result = []

  await map(
    lastStatements,
    async (statement, i, tot) => {
      try {
        const { data } = await axios({
          method: 'post',
          url: `https://language.googleapis.com/v1beta2/documents:annotateText?key=${apikey}`,
          data: {
            document: {
              type: 'PLAIN_TEXT',
              language: 'en',
              content: statement,
            },
            features: {
              extractDocumentSentiment: true,
              extractEntitySentiment: true,
            },
            encodingType: 'UTF8',
          },
        })

        result.push({ statement, data })
        console.log('done', (result.length / lastStatements.length) * 100)
      } catch (err) {
        console.log('------')
        console.log('ERROR')
        console.log(statement)
        console.log(err?.response ?? err)
        console.log('------')
      }
    },
    { concurrency: 5 }
  )

  await fs.writeFile(
    __dirname + '/google-nlp.json',
    JSON.stringify(result, null, 2),
    'utf-8'
  )
}

run()
