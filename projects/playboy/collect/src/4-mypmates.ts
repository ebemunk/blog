import axios from 'axios'
import bb from 'bluebird'
import getPool from './db'
import cheerio from 'cheerio'

export const MONTHS_FULL = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getMate = async ({ name, year, month }) => {
  const url = `https://mypmates.club/${year}/Miss-${
    MONTHS_FULL[month]
  }/${name.replaceAll(' ', '-')}`
  const res = await axios(url)

  const $ = cheerio.load(res.data)
  const img = $('.playmate-img-main').attr('src')
  const bio = $('.playmate-bio')
    .first()
    .text()
    .match(/She was born on ([A-Za-z]+ \d{1,2}, \d{4}) in (.+)\. She wa/s)

  if (!bio) {
    console.log('NO BIO', name, url)
    console.log($('.playmate-bio').first().text())
    console.log('########')
    return
  }

  const [, born, birthplace] = bio

  const info = $('.col-md-4.border-left')
    .text()
    .match(
      /.+Height: \d ft \d+ in \((\d+) cm\).+Weight: \d+ lb \((\d+) kg\).+Bust: \d+ in \((\d+) cm\).+Waist: \d+ in \((\d+) cm\).+Hips: \d+ in \((\d+) cm\).+Zodiac: ([A-Za-z]+)?.+Ethnicity: ([A-Za-z]+).+Hair: ([A-Za-z]+).+/s,
    )

  if (!info) {
    console.log('NO INFO', name, url)
    console.log($('.col-md-4.border-left').text())
    console.log('########')
    return
  }
  if (info.length < 2) {
    console.log('---')
    console.log($('.col-md-4.border-left').text())
    console.log('---')
  }

  const [, height, weight, bust, waist, hips, zodiac, ethnicity, hair] = info

  return {
    url,
    img,
    born,
    birthplace,
    height: +height,
    weight: +weight,
    bust: +bust,
    waist: +waist,
    hips: +hips,
    zodiac,
    ethnicity,
    hair,
  }
}

const run = async () => {
  const pool = getPool()

  const { rows } = await pool.query(
    `select name, year, month from playboy.playmates`,
  )

  await bb.map(
    rows,
    async row => {
      try {
        const playmate = await getMate(row)

        await pool.query(
          'update playboy.playmates set mypmates=$1 where name=$2',
          [playmate, row.name],
        )
        console.log('done', playmate)
        console.log('=========')
      } catch (err) {
        console.log('err', err, row.name)
      }
    },
    { concurrency: 5 },
  )
}

run()
