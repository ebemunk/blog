import axios from 'axios'
import bb from 'bluebird'
import getPool from './db'
import cheerio from 'cheerio'

const getBabe = async (name: string) => {
  const slug = nameCorrection?.[name] ?? encodeURI(name.replace(' ', '_'))
  const res = await axios(`https://www.babepedia.com/babe/${slug}`)

  const $ = cheerio.load(res.data)
  const bio = $('#bioarea ul li')
    .map((i, el) => {
      const label = $(el).find('.label').text()
      const val = $(el).text().replace(label, '')

      return {
        key: label.replace(':', '').trim(),
        val: val.replace(':', '').trim(),
      }
    })
    .get()

  return bio
    .filter(d => d.key !== 'Achievements')
    .reduce(
      (acc, cur) => ({
        ...acc,
        [cur.key]: cur.val,
      }),
      {},
    )
}

const nameCorrection: { [key: string]: string } = {
  'Alicia Olivas': 'Alicia_Loraina_Olivas',
  'Daphnée Lynn Duplaix': 'Daphnee_Lynn_Duplaix',
  'Enikő Mihalik': 'Eniko_Mihalik',
  'Ola Ray': 'Ola_Ray_(Playmate)',
  'Jessa Lynn Hinton': 'Jessa_Hinton',
  'Chastity Samone': 'Chasity_Samone',
  'P. J. Lansing': 'P.J._Lansing',
  'Victoria Valentino': 'Victoria_Valentino_%282%29',
  // skip Ines Rau
}

const run = async () => {
  const pool = getPool()

  const { rows } = await pool.query(`select name from playboy.playmates`)
  const names = rows.map(r => r.name)

  await bb.map(
    names,
    async name => {
      try {
        const babe = await getBabe(name)

        if (Object.keys(babe).length < 2) {
          console.log('=====')
          console.log(name)
          console.log(babe)
          console.log('=====')
        }

        await pool.query(
          'update playboy.playmates set babepedia=$1 where name=$2',
          [babe, name],
        )
      } catch (err) {
        console.log('err', err.code, name)
      }
    },
    { concurrency: 5 },
  )
}

run()
