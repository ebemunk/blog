const cheerio = require('cheerio')
const fs = require('fs/promises')
const { map } = require('bluebird')
const axios = require('axios')

const root = 'https://www.tdcj.texas.gov/death_row/'

async function download() {
  const file = await fs.readFile(
    __dirname + '/dr_executed_offenders.html',
    'utf-8'
  )
  const $ = cheerio.load(file)

  const links = $('a[title^="Last Statement"]')
    .map((i, el) => $(el).attr('href'))
    .get()

  const pages = await map(
    links,
    async link => {
      try {
        await fs.access(__dirname + '/lastStatements/' + link.split('/')[1])
        console.log('skipping', link)
        return
      } catch (err) {}
      try {
        const { data } = await axios(root + link)
        await fs.writeFile(
          __dirname + '/lastStatements/' + link.split('/')[1],
          data,
          'utf-8'
        )
      } catch (err) {
        console.log('failed', link, err.response?.status, err.response?.data)
      }
    },
    { concurrency: 5 }
  )
}

async function extract() {
  const files = await fs.readdir(__dirname + '/lastStatements')
  const statements = await map(
    files,
    async path => {
      const file = await fs.readFile(
        __dirname + '/lastStatements/' + path,
        'utf-8'
      )
      const $ = cheerio.load(file)
      const statement = $('#content_right')
        .children('p')
        .filter((i, el) => $(el).text().includes('Last Statement:'))
        .nextAll()
        .map((i, el) => $(el).text().trim())
        .get()
        .filter(d => d.trim())
        .join('\n')
        .replaceAll('  ', ' ')

      const name = $('#content_right')
        .children('p')
        .filter((i, el) => $(el).text().includes('Inmate:'))
        .next()
        .map((i, el) => $(el).text().trim())
        .get()
        .filter(d => d.trim())
        .join('')
        .split('#')[0]
        .trim()

      return { statement, name }
    },
    { concurrency: 10 }
  )

  await fs.writeFile(
    __dirname + '/lastStatements.json',
    JSON.stringify(
      statements
        .filter(d => d.statement.length)
        .filter(
          d =>
            ![
              'No',
              'None',
              'None.',
              'No last statement.',
              'No statement given.',
              'This inmate declined to make a last statement.',
            ].includes(d.statement)
        )
        .sort((a, b) => a.statement.length - b.statement.length),
      null,
      2
    )
  )
}

extract()
