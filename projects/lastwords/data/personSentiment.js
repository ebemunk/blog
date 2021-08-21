const fs = require('fs/promises')
const d3 = require('d3')

const nlps = require('./google-nlp.json')

const run = async () => {
  const personEntities = nlps
    .flatMap(d => d.data.entities)
    .filter(d => d.type === 'PERSON')
    .map(d => ({
      salience: d.salience,
      name: d.name,
      type: d.type,
      score: d.sentiment.score,
    }))

  const result = d3
    .rollups(
      personEntities,
      v =>
        // occurs at least twice
        v.length < 2
          ? null
          : {
              salience: d3.mean(v, d => d.salience),
              score: d3.mean(v, d => d.score),
              type: v[0].type,
              freq: v.length,
            },
      d =>
        d.name
          .replace('Jesus Christ', 'jesus')
          .replace('christ', 'jesus')

          .replace('mother', 'mom')
          .replace('momma', 'mom')
          .replace('mama', 'mom')
          .replace('mother', 'mom')

          .replace('everybody', 'everyone')
          .replace('anybody', 'anyone')
          .replace('somebody', 'someone')

          .replace('lord', 'god')
          .replace('heavenly father', 'god')
          .replace('almighty god', 'god')

          .replace('dad', 'father')
          .replace('daddy', 'father')

          .replace('kids', 'children')
          .replace('child', 'children')

          .replace('victims', 'victim')

          .replace('loved ones', 'loved one')

          .replace('friends', 'friend')

          .replace('witnesses', 'witness')

          .replace('lawyer', 'lawyers')
          .replace('attorney', 'lawyers')
          .replace('attorneys', 'lawyers')

          .replace('grandmom', 'grandma')
          .replace('grandbabies', 'grandchildren')

          .replace('sinners', 'sinner')

          .replace('nieces', 'niece')
          .replace('nephews', 'nephew')
          .replace('cousins', 'cousin')

          .replace('policeman', 'police')
          .replace('police officer', 'police')

          .replace('inmates', 'inmate')

          .toLowerCase()
    )
    .filter(d => d[1])
    .map(d => ({
      name: d[0],
      ...d[1],
    }))
    .sort((a, b) => b.freq - a.freq)
    .filter(d => people.includes(d.name))

  await fs.writeFile(
    __dirname + '/personSentiment.json',
    JSON.stringify(result, null, 2),
    'utf-8'
  )
}

const people = [
  'family',
  'god',
  'mom',
  'jesus',
  'friends',
  'warden',
  'father',
  'sister',
  'victim',
  'son',
  'daughter',
  'brother',
  'baby',
  'loved ones',
  'children',
  'wife',
  'witness',
  'child',
  'parents',
  'lawyers',
  'officers',
  'niece',
  'police',
  'grandma',
  'prosecutor',
  'judge',
  'nephew',
  'husband',
  'sinner',
  'inmates',
  'jury',
  'satan',
  'district attorney',
  'grandchildren',
  'cousin',
  'investigators',
  'irene',
]

run()
