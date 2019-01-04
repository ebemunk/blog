import * as R from 'ramda'
import Promise from 'bluebird'
import cheerio from 'cheerio'
import axios from 'axios'

import { writeFile, readDir, logger, readFile } from '../util'

const log = logger('scrapeRecords')

export default async function scrapeRecords(opts) {
  const downloaded = await readDir('data/html/records')

  await Promise.map(
    readDir('data/html/pages'),
    async file => {
      const content = await readFile(`data/html/pages/${file}`)
      const $ = cheerio.load(content)
      const records = $('.list a:not(.headerlink)')
        .map((i, el) => $(el).attr('href'))
        .get()

      // log(`reading ${file}`)

      await Promise.map(
        records,
        async record => {
          const [, id] = /id=(.+)/.exec(record)

          // log(`  record ${id}`)

          if (downloaded.includes(`${id}.html`)) {
            // log('    already downloaded')
            return
          }

          try {
            const { data } = await axios.get(
              `https://aviation-safety.net/${record}`,
            )
            await writeFile(`data/html/records/${id}.html`, data)
          } catch (err) {
            log('    errored', id, err.response.status)
          }
        },
        { concurrency: 10 },
      )

      // log(`  saved`)
    },
    { concurrency: 1 },
  )
}
