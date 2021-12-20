// import axios from 'axios'
import cheerio from 'cheerio'
import fs from 'fs/promises'
import { resolve } from 'path'
import bb from 'bluebird'

import getPool, { insertObj } from './db'

async function run() {
  const html = await fs.readFile(
    resolve(__dirname, '../dataRoots/wikipedia-list.html'),
    { encoding: 'utf-8' },
  )
  const $ = cheerio.load(html)

  const years = $('.wikitable tbody tr')
    .filter((i, el) => i > 0)
    .map((i, tr) => {
      const year = +$(tr).find('th').first().text().replace(/\[1\]/, '').trim()

      const months = $(tr)
        .find('td')
        .map((ii, td) => {
          const name = $(td).text().trim()
          const month = ii
          return { name, month }
        })
        .get()

      return { year, months }
    })
    .get() as { year: number; months: { name: string; month: string }[] }[]

  const mates = years
    .filter(d => d.year !== 2021)
    .flatMap(({ year, months }) =>
      months.map(month => ({
        year,
        name: month.name,
        month: month.month,
      })),
    )

  const pool = getPool()

  await bb.map(
    mates,
    mate =>
      pool.query(
        ...insertObj({
          name: mate.name,
          year: mate.year,
          month: mate.month,
        }),
      ),
    { concurrency: Infinity },
  )
}

run()
