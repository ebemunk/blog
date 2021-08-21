const fs = require('fs/promises')
const d3 = require('d3')
const cheerio = require('cheerio')

const names = async () => {
  const file = await fs.readFile(__dirname + '/exonerations.html', 'utf-8')
  const $ = cheerio.load(file)

  const data = $('tbody td:nth-child(9)')
    .map((i, el) => {
      const text = $(el).text()
      return text.split('\n')
    })
    .get()
    .map(d => d.trim())
    .filter(Boolean)

  const result = d3
    .rollups(
      data,
      v => v.length,
      d => d
    )
    .sort((a, b) => b[1] - a[1])

  await fs.writeFile(
    __dirname + '/exonerations.json',
    JSON.stringify(result, null, 2),
    'utf-8'
  )
}

names()
