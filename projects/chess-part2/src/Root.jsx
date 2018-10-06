import React from 'react'

import * as R from 'ramda'

import datar from '/Users/ebemunk/proj/go/src/github.com/ebemunk/pgnstats/data/data.json'
const data = datar.BranchingFactor.map((v, k) => ({
  x: k,
  y: v,
}))

const gl = datar.GameLengths.map((v, k) => ({
  x: k,
  y: v,
}))

const mc = datar.MaterialCount.map((v, k) => ({
  x: k,
  y: v,
}))

const md = datar.MaterialDiff.map((v, k) => ({
  x: k,
  y: v,
}))

import Bar from './components/Bar'
import ChessBoard from './components/ChessBoard'

const Report = ({}) => (
  <div>
    <div>
      <h4>BranchingFactor</h4>
      <Bar height={400} width={1500} data={data} />
    </div>
    <div>
      <h4>GameLengths</h4>
      <Bar height={400} width={1500} data={gl} />
    </div>
    <div>
      <h4>MaterialCount</h4>
      <Bar height={400} width={1500} data={mc} />
    </div>
    <div>
      <h4>MaterialDiff</h4>
      <Bar height={400} width={1500} data={md} />
    </div>
    <div>
      <h4>Heatmap</h4>
      <ChessBoard
        width={496}
        data={datar.Heatmaps.CaptureSquares.map(d => d.All.W + d.All.B)}
      />
    </div>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose, pure } from 'recompose'

export default compose(
  hot(module),
  pure,
)(Report)
