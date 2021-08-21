const nlp = require('compromise')
nlp.extend(require('compromise-ngrams'))
const d3 = require('d3')
const fs = require('fs/promises')

const lastStatements = require('./lastStatements.json')

const capitalizeIs = str => (str.length === 1 ? str.replace('i', 'I') : str)

async function trigrams() {
  const all = lastStatements
    .flatMap(d => nlp(d.statement).ngrams({ size: 3 }))
    .filter(d => d.normal.trim().split(' ').length > 2)

  const grps = d3
    .groups(all, d => d.normal.split(' ')[0])
    .map(([k, v]) => ({
      name: capitalizeIs(k),
      children: d3
        .groups(v, d => d.normal.split(' ')[1])
        .map(([kk, vv]) => ({
          name: capitalizeIs(kk),
          children: d3
            .rollups(
              vv,
              v => d3.sum(v, d => d.count),
              d => d.normal.split(' ')[2]
            )
            .map(([kk, vv]) => ({
              name: capitalizeIs(kk),
              value: vv,
            }))
            .sort((a, b) => b.value - a.value)
            .filter(d => d.value > 10),
        }))
        .filter(d => d.children.length > 1),
    }))
    .filter(d => d.children.length > 0)

  await fs.writeFile(
    __dirname + '/trigrams.json',
    JSON.stringify(
      {
        name: 'root',
        children: grps,
      },
      null,
      2
    ),
    'utf-8'
  )
}

trigrams()
