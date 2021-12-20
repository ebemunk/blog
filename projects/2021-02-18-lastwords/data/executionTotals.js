const fs = require('fs/promises')
const d3 = require('d3')
const cheerio = require('cheerio')

const cols = [
  'state',
  'total',
  ...d3
    .range(1976, 2022, 1)
    .filter(d => ![1980, 1978].includes(d))
    .reverse()
    .map(String),
]

console.log(cols)

const names = async () => {
  const file = await fs.readFile(__dirname + '/executionTotals.html', 'utf-8')
  const $ = cheerio.load(file)

  const data = $('tbody tr')
    .slice(1)
    .map((i, el) => {
      const vals = $(el)
        // const [state, total, ...data] = $(el)
        .find('td')
        .map((i, el) => $(el).text().trim())
        .get()
      return vals.reduce(
        (obj, v, j) => ({
          ...obj,
          [cols[j]]: v,
        }),
        {}
      )
    })
    .get()

  // const result = d3
  //   .rollups(
  //     firstnames,
  //     v => v.length,
  //     d => d
  //   )
  //   .sort((a, b) => b[1] - a[1])
  //   .slice(0, 5)

  await fs.writeFile(
    __dirname + '/executionTotals.json',
    JSON.stringify(data, null, 2),
    'utf-8'
  )
}

names()
