import { writeFile, readFile } from 'fs/promises'
import { resolve } from 'path'

import loess from 'loess'

// import data from '../../viz/data.json'

const slices = {
  mateAge: d => d.mateAge,
  height: d => d.height,
  weight: d => d.weight,
  bust: d => d?.measurements?.bust,
  waist: d => d?.measurements?.waist,
  hips: d => d?.measurements?.hips,
}

const run = async () => {
  const file = await readFile(
    resolve(__dirname, '../../viz/data.json'),
    'utf-8',
  )
  const raw = JSON.parse(file)

  const data = raw
    .map(d => ({
      ...d,
      date: new Date(d.year, d.month, 1),
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  const loessArr = Object.keys(slices).map(key => {
    const dd = data
      .filter(d => !!slices[key](d))
      .map(d => [new Date(d.year, d.month, 1).getTime(), slices[key](d)])

    const model = new loess(
      {
        x: dd.map(d => d[0]),
        y: dd.map(d => d[1]),
      },
      { band: 0.2 },
    )
    const smooth = model.predict()
    return {
      key,
      loess: { fitted: smooth.fitted, halfwidth: smooth.halfwidth },
    }
  })

  await writeFile(
    resolve(__dirname, '../../viz/loess.json'),
    JSON.stringify(loessArr, null, 2),
  )
}

run()
