import wtf from 'wtf_wikipedia'
import * as R from 'remeda'
import bb from 'bluebird'
import getPool from './db'
import { flatten } from 'remeda'

const years = R.range(1954, 2020).map(
  // const years = R.range(1964, 1965).map(
  year => `List of Playboy Playmates of ${year}`,
)

const doYear = async (year: string) => {
  const doc = await wtf.fetch(year)
  const infoboxes = doc?.infoboxes()

  if (!infoboxes) {
    throw new Error('infoboxes empty')
  }

  return infoboxes.map(box => {
    const json = box.json() as {
      name: { text: string }
      [key: string]: { text: string }
    }

    return Object.keys(json).reduce(
      (obj, key) => ({
        ...obj,
        [key]: json[key].text,
        year,
      }),
      {},
    )
  })
}

const run = async () => {
  const infos = await bb.map(years, doYear)

  const pool = getPool()

  console.log('got infos')

  await bb.map(flatten(infos), async info => {
    // @ts-ignore
    let name: string = info.name
    let nameArr: string[] = [name]

    if (names[name]) nameArr = [names[name]]
    else if (multiples[name]) nameArr = multiples[name]

    if (!name) {
      // @ts-ignore
      console.log('!name', name, info.year)
    }

    for (let n of nameArr) {
      const res = await pool.query(
        `select * from playboy.playmates where name='${n}'`,
      )

      if (res.rowCount < 1) {
        console.log('no rows')
      }

      await pool.query('update playboy.playmates set wiki=$1 where name=$2', [
        info,
        n,
      ])
    }
  })
}

const names: { [key: string]: string } = {
  'Marilyn Walts (aka Margaret Scott)': 'Marilyn Walts',
  'Marilyn Walts\n( Margaret Scott)': 'Marilyn Walts',
  'Jean Moorhead': 'Jean Moorehead',
  'Elsa Sorensen': 'Elsa Sorensen',
  'Pamela Gordon': 'Pamela Anne Gordon',
  'Kelli Burke': 'Kelly Burke',
  'P.J. Lansing': 'P. J. Lansing',
  'Lena Forsén': 'Lenna Sjooblom',
  'Cynthia Wood': 'Cyndi Wood',
  'Jeane (Jean) Manson': 'Jean Manson',
  'Ingeborg Sørensen': 'Ingeborg Sorensen',
  'Patricia McClain': 'Patricia Margot McClain',
  'Pamela Bryant': 'Pamela Jean Bryant',
  'Susan Kiger': 'Susan Lynn Kiger',
  'Vicky McCarty': 'Vicki McCarty',
  'Vicki Lasseter': 'Vicki Lynn Lasseter',
  'Debi Nicolle Johnson': 'Debi Johnson',
  'Julie Michelle McCullough': 'Julie McCullough',
  'Laurie Ann Carr': 'Laurie Carr',
  'Pam Stein': 'Pamela Stein',
  'Katariina Souri': 'Kata Kärkkäinen',
  'Laurie Jo Wood': 'Laurie Wood',
  'Stacy Arthur': 'Stacy Leigh Arthur',
  'Carrie Yazel': 'Carrie Jean Yazel',
  'cady cantrell': 'Cady Cantrell',
  'Jennifer Leroy': 'Jennifer LeRoy',
  'Stacy Elizabeth Sanches': 'Stacy Sanches',
  'Kelly Gallagher\n(now known as Kelly Wearstler)': 'Kelly Gallagher',
  'Cynthia Gwyn Brown': 'Cynthia Brown',
  'Rachel Jéan Marteen': 'Rachel Jean Marteen',
  'Karin Katherine Taylor': 'Karin Taylor',
  'Nikki Ziering': 'Nikki Schieler',
  'Linn Thomas': 'Lynn Thomas',
  'Nicole, Erica and Jaclyn Dahm': 'Dahm triplets',
  'Melissa Deanne Holliday': 'Melissa Holliday',
  'Lexie Karlsen': 'Alexandria Karlsen',
  'Stacy Fuson': 'Stacy Marie Fuson',
  'Teri Marie Harrison': 'Teri Harrison',
  'Tina Marie Jordan': 'Tina Jordan',
  'Markéta Jánská': 'Marketa Janska',
  'Pennelope M. Jimenez': 'Pennelope Jimenez',
  'Pilar M. Lastra': 'Pilar Lastra',
  'Rebecca Anne Ramos': 'Rebecca Ramos',
  'Lindsey Gayle Evans': 'Lindsey Evans',
  'Shanna Marie McLaughlin': 'Shanna McLaughlin',
  'Jessa Hinton': 'Jessa Lynn Hinton',
  'Olga De Mar': 'Olga de Mar',
}

const multiples: { [key: string]: string[] } = {
  'Deisy and Sarah Teles': ['Deisy Teles', 'Sarah Teles'],
  'Karen and Mirjam van Breeschooten': [
    'Karin van Breeschooten',
    'Mirjam van Breeschooten',
  ],
  'Jennifer and Natalie Jo Campbell': ['Jennifer Campbell', 'Natalie Campbell'],
  'Kristina and Karissa Shannon': ['Kristina Shannon', 'Karissa Shannon'],
  'Carol and Darlene Bernaola': ['Carol Bernaola', 'Darlene Bernaola'],
}

run()
