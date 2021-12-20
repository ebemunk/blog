import * as R from 'ramda'
import Promise from 'bluebird'
import cheerio from 'cheerio'
import axios from 'axios'
import iconv from 'iconv-lite'

import { writeFile, readDir, logger, readFile } from '../util'

const log = logger('scrapeRecords')

axios.interceptors.response.use(response => {
  let ctype = response.headers['content-type']
  if (ctype.includes('charset=iso-8859-1')) {
    response.data = iconv.decode(response.data, 'ISO-8859-1')
  }
  return response
})

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
        // ['database/record.php?id=19331116-0'],
        async record => {
          let [, id] = /id=(.+)/.exec(record)

          // log(`  record ${id}`)

          const idcheck = id.split('-')
          if (idcheck.length < 2) {
            log(`   got ${id} changed to ${id}-0`)
            id = `${id}-0`
          }

          if (downloaded.includes(`${id}.html`)) {
            // log('    already downloaded')
            return
          }

          try {
            const { data } = await axios.get(
              `https://aviation-safety.net/${record}`,
              { responseType: 'arraybuffer' },
            )
            await writeFile(`data/html/records/${id}.html`, data)
          } catch (err) {
            if (!err.response) {
              log('    errored', id, err)
            } else {
              log('    errored', id, err.response.status)
            }
          }
        },
        { concurrency: 10 },
      )

      // log(`  saved`)
    },
    { concurrency: 1 },
  )
}
