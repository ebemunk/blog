import { addIndex, map, evolve, mapObjIndexed, pipe, values } from 'ramda'
import { histogram } from 'd3-array'

import data from '/Users/ebemunk/proj/go/src/github.com/ebemunk/pgnstats/data/data.json'

const mapIndexed = addIndex(map)
const mapToXY = mapIndexed((v, k) => ({
  x: k,
  y: v,
}))
const mapObjToXY = pipe(
  mapObjIndexed((y, x) => ({ x: +x, y })),
  values,
)

export default evolve({
  Heatmaps: heatmaps =>
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
    ),

  //other
  BranchingFactor: mapToXY,
  GameLengths: mapToXY,
  MaterialCount: mapToXY,
  MaterialDiff: mapToXY,
  GameEndMaterialCount: mapToXY,
  GameEndMaterialDiff: mapToXY,
  Ratings: ratings => {
    const d = mapObjToXY(ratings)
    const sam = []
    d.forEach(d => {
      for (let i = 0; i < d.y; i++) sam.push(d.x)
    })
    const hist = histogram()
    const bins = hist(sam)
    return bins.map(bin => ({
      x0: bin.x0,
      x: bin.x1,
      y0: 0,
      y: bin.length,
    }))
  },
  Years: mapObjToXY,
})({
  //
  ...data,
})
