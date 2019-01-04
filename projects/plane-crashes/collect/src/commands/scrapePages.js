import * as R from 'ramda'
import Promise from 'bluebird'
import cheerio from 'cheerio'
import axios from 'axios'

import { writeFile, logger } from '../util'

const log = logger('scrapePages')

export default async function scrapePages(opts) {
  const years = R.range(1919, 2019)
  // const years = [1946]
  // const years = [1936]
  // const years = [2018]

  await Promise.map(
    years,
    async year => {
      log(`getting ${year}`)

      try {
        const { data } = await axios.get(
          `https://aviation-safety.net/database/dblist.php?Year=${year}`,
        )

        await writeFile(`data/html/pages/${year}-1.html`, data)

        const $ = cheerio.load(data)
        const numPages = $('.pagenumbers')
          .first()
          .find('a').length

        if (numPages < 1) {
          log('  no additional pages')
          return
        }

        log(`  found ${numPages} pages`)

        const pages = R.range(2, numPages + 2)

        await Promise.map(pages, async page => {
          try {
            const { data } = await axios.get(
              `https://aviation-safety.net/database/dblist.php?Year=${year}&page=${page}`,
            )
            await writeFile(`data/html/pages/${year}-${page}.html`, data)
          } catch (err) {
            log(`  failed ${page}`)
            log('    ', err.response)
          }
        })

        log('  saved all')
      } catch (err) {
        log(`failed ${year}`)
        log('  ', err.response)
      }
    },
    { concurrency: 10 },
  )
}
