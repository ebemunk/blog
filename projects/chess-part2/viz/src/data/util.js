const { histogram } = require('d3-array')
const {
  addIndex,
  map,
  mapObjIndexed,
  pipe,
  values,
  sort,
  take,
  drop,
  filter,
} = require('ramda')

const mapIndexed = addIndex(map)

const mapToXY = mapIndexed((v, k) => ({
  x: k,
  y: v,
}))

const mapObjToXY = pipe(
  mapObjIndexed((y, x) => ({ x: +x, y })),
  values,
)

const transformHeatmap = heatmaps =>
  Object.keys(heatmaps).reduce(
    (obj, hm) => ({
      ...obj,
      [hm]: {
        heatmap: heatmaps[hm],
        byPiece: heatmaps[hm]
          .reduce(
            ([w, b], val) => {
              Object.keys(val).forEach(piece => {
                if (piece === piece.toLowerCase()) {
                  b[piece.toUpperCase()] += val[piece]
                } else {
                  w[piece] += val[piece]
                }
              })
              return [w, b]
            },
            [
              {
                P: 0,
                N: 0,
                B: 0,
                R: 0,
                Q: 0,
                K: 0,
              },
              {
                P: 0,
                N: 0,
                B: 0,
                R: 0,
                Q: 0,
                K: 0,
              },
            ],
          )
          .map(wOb =>
            Object.keys(wOb).map(k => ({
              x: k,
              y: wOb[k],
            })),
          ),
      },
    }),
    {},
  )

const transformHistogram = thresholds => ratings => {
  const d = mapObjToXY(ratings)
  const sam = []
  d.forEach(d => {
    for (let i = 0; i < d.y; i++) sam.push(d.x)
  })
  const hist = histogram()
  if (thresholds) hist.thresholds(thresholds)
  const bins = hist(sam)
  return bins.map(bin => ({
    x0: bin.x0,
    x: bin.x1,
    y0: 0,
    y: bin.length,
  }))
}

const openingsFen = require('./openings/openings_fen')
const openings = require('./openings/openings')

const getOpeningName = fen => {
  const opening = openings[openingsFen[fen]]
  return opening ? `${opening.eco} - ${opening.name}` : fen
}

const transformPositions = pipe(
  mapObjIndexed((y, x) => ({ x, y })),
  values,
  sort((a, b) => b.y - a.y),
  drop(1),
  // filter(d => {
  //   const fok = d.x.match(/.+ \d+ (\d+)/)
  //   if (!fok) console.log('wa', fok, d.x)

  //   return +fok[1] > 5
  // }),
  // take(50),
  map(d => ({
    fullmove: d.x.match(/.+ \d+ (\d+)/)[1],
    fen: d.x,
    x: getOpeningName(d.x),
    y: d.y,
  })),
)

module.exports = {
  mapIndexed,
  mapToXY,
  mapObjToXY,
  transformHeatmap,
  transformHistogram,
  transformPositions,
}
