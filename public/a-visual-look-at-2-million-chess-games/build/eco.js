const fs = require('fs')
const axios = require('axios')
const d3 = require('d3')
const Chess = require('chess.js').Chess

const fangol = JSON.parse(
  fs.readFileSync(
    '../../content/2016-02-27-visual-look-chess/chess/fangol.json'
  )
).openings

const openingsFromData = d3
  .hierarchy(fangol)
  .sum(d => (!d.children.length ? d.count : 0))
  .sort((a, b) => b.height - a.height || b.value - a.value)

const allOpenings = []

openingsFromData.each(d => {
  const chess = new Chess()
  d.ancestors()
    .reverse()
    .slice(1) // remove 'start' position
    .forEach(n => {
      chess.move(n.data.san)
    })
  const fen = chess.fen().split(' ')[0]
  allOpenings.push(fen)
})

const collectEco = async () => {
  const urls = 'abcde'
    .split('')
    .map(char => `https://github.com/niklasf/eco/raw/master/${char}.tsv`)
  const files = await Promise.all(urls.map(url => axios.get(url)))

  const ecos = files.flatMap(({ data: str }) => {
    return str
      .split('\n')
      .slice(1)
      .filter(Boolean)
      .map(line => {
        const [eco, name, fen, moves] = line.split('\t')
        return { eco, name, fen, moves }
      })
  })

  const neededEcos = allOpenings
    .map(fen => {
      const matchingEco = ecos.find(d => {
        return d.fen.split(' ')[0] === fen
      })
      if (!matchingEco) return null

      return matchingEco
    })
    .filter(Boolean)

  const fileContent = neededEcos.reduce(
    (obj, val) => ({
      ...obj,
      [val.fen.split(' ')[0]]: val.eco + ' - ' + val.name,
    }),
    {}
  )

  // fs.writeFileSync('ecos.json', JSON.stringify(fileContent, null, 2))
  fs.writeFileSync('ecos.json', JSON.stringify(fileContent))
}

collectEco()
