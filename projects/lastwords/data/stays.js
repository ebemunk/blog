const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs/promises')
const { map } = require('bluebird')
const d3 = require('d3')

const download = async () => {
  const pages = [
    'https://deathpenaltyinfo.org/executions/upcoming-executions#stays2021',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-in-2020',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-in-2019',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-in-2018',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-in-2017',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-in-2016',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-in-2015',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-in-2014',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-in-2013',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-in-2012',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-in-2011',
    'https://deathpenaltyinfo.org/stories/stays-of-execution-2010',
  ]

  await map(pages, async url => {
    const { data } = await axios.get(url)

    await fs.writeFile(
      __dirname + '/stays/' + url.slice(url.lastIndexOf('-') + 1) + '.html',
      data,
      'utf-8'
    )
  })
}

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
    .sort((a, b) => b[1].length - a[1].length)
    .filter(d => d[1].length > 2)
    .map(d => ({
      name: d[0],
      stays: d[1],
    }))

  console.log('groups', data.length)

  await fs.writeFile(__dirname + '/stays.json', JSON.stringify(data, null, 2))
}

extract()
