import React from 'react'
import { histogram } from 'd3-array'
import { VerticalRectSeries } from 'react-vis'

import { colors8 } from '../colors'
import Plot from '../components/Plot'

import data from '../data/fatality-histogram.csv'

const hist = histogram()
// .thresholds(thresholds)
const bins = hist(data.map(d => +d.passenger_fat + d.crew_fat))
const datz = bins.map(bin => ({
  x0: bin.x0,
  x: bin.x1,
  y0: 0,
  y: bin.length,
}))

console.log('fafa', datz)

const FatalityHist = () => (
  <div>
    <Plot
      data={datz.map(d => ({
        ...d,
        x: d.x - (d.x - d.x0) / 2,
        x1: d.x,
      }))}
      height={400}
    >
      <VerticalRectSeries data={datz} stroke="#282c34" color={colors8(0)} />
    </Plot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(FatalityHist)
