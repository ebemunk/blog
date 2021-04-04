const cheerio = require('cheerio')
const fs = require('fs/promises')
const { map } = require('bluebird')
const d3 = require('d3')

const extract = async () => {
  const files = await fs.readdir(__dirname + '/stays')

  const stays = []

  await map(files, async path => {
    if (path.includes('2021')) return

    const file = await fs.readFile(__dirname + '/stays/' + path, 'utf-8')
    const $ = cheerio.load(file)

    const year = path.split('.')[0]
    let month = null

    for (let tr of $('table tbody').children('tr').get()) {
      tr = $(tr)
      if (tr.children().length === 1) {
        month = tr.text().trim()
        continue
      }
      const [day, state, inmate, reason] = tr
        .children()
        .map((i, d) => $(d).text().trim())

      if (state != 'TX') continue

      stays.push({
        year,
        month,
        day,
        state,
        inmate,
        reason,
        date: Date.parse(`${year} ${month} ${day}`),
      })
    }
  })

  const data = d3
    .rollups(
      stays,
      v => v.map(d => ({ date: d.date, reason: d.reason })),
      d => d.inmate
    )
    .map(d => d[1].length)
    .sort((a, b) => b - a)

  await fs.writeFile(
    __dirname + '/numStays.json',
    JSON.stringify(data, null, 2)
  )
}

extract()
