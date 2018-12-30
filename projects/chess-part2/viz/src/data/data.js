const { evolve } = require('ramda')

const {
  transformHeatmap,
  transformHistogram,
  mapToXY,
  transformPositions,
} = require('./util')

const data = require('/Users/ebemunk/proj/go/src/github.com/ebemunk/pgnstats/data/mb.json')

module.exports = evolve({
  Heatmaps: transformHeatmap,
  BranchingFactor: mapToXY,
  GameLengths: mapToXY,
  MaterialCount: mapToXY,
  MaterialDiff: mapToXY,
  GameEndMaterialCount: mapToXY,
  MaterialCount: mapToXY,
  GameEndMaterialDiff: mapToXY,
  Ratings: transformHistogram(),
  Years: transformHistogram(100),
  Positions: pos => [
    transformPositions(0)(pos),
    transformPositions(5)(pos),
    transformPositions(11)(pos),
  ],
})(data)
