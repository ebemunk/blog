import { addIndex, map, evolve, mapObjIndexed, pipe, values } from 'ramda'

import data from '/Users/ebemunk/proj/go/src/github.com/ebemunk/pgnstats/data/mb.json'

const mapIndexed = addIndex(map)
const mapToXY = mapIndexed((v, k) => ({
  x: k,
  y: v,
}))
const mapObjToXY = pipe(
  mapObjIndexed((y, x) => ({ x, y })),
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
  Ratings: mapObjToXY,
  Years: mapObjToXY,
})({
  //
  ...data,
})
