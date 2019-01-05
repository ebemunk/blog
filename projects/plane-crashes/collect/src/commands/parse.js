import Promise from 'bluebird'
import cheerio from 'cheerio'
import * as R from 'ramda'

import { writeFile, readDir, logger, readFile, prettyJson } from '../util'

const log = logger('parse')

// export async function parse(opts) {
export default async function parse(opts) {
  const parsed = await Promise.map(readDir('data/html/records'), async file => {
    try {
      const html = await readFile(`data/html/records/${file}`)
      const [, record] = /<!-- startrecord -->([\s\S]+)<!-- endrecord -->/.exec(
        html,
      )
      const $ = cheerio.load(record)
      const data = parsePage($)
      return {
        id: file.replace('.html', ''),
        ...data,
      }
    } catch (err) {
      log('errored out', file, err)
      console.log()
    }
  })

  await writeFile('data/json/data.json', prettyJson(parsed))
}

export function parsePage($) {
  const rez = parseTable($)
  const rr = parseAdditional($)
  const data = { ...rez, ...rr }
  return data
}

export function parseTable($) {
  return R.pipe(
    R.splitEvery(2),
    R.map(([key, val]) => [key.replace(':', ''), val.trim()]),
    R.fromPairs,
  )(
    $('table')
      .first()
      .find('tr')
      .map((i, el) => {
        return $(el)
          .find('td')
          .map((ii, td) => $(td).text())
          .get()
      })
      .get(),
  )
}

export function parseAdditional($) {
  return {
    Narrative: $('span.caption')
      .nextUntil('span[lang="en-US"]')
      .next()
      .text(),
    Classification: $('div.captionhr')
      .filter((i, el) => $(el).text() === 'Classification:')
      .first()
      .nextUntil('p')
      .map((i, el) => $(el).text())
      .get()
      .filter(d => !!d),
    ProbableCause: $('div.captionhr')
      .filter((i, el) => $(el).text() == 'Probable Cause:')
      .nextUntil('span[lang="en-US"]')
      .next()
      .text(),
  }
}

// export default async function lol() {
//   const file = await readFile('data/html/records/19750105-0.html')
//   const lol = parsePage(cheerio.load(file))
//   console.log('lol', lol)
// }
