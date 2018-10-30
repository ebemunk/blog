import React from 'react'

import { LineSeries, VerticalBarSeries, Sunburst } from 'react-vis'

import Plot from './components/Bar'
import ChessBoard from './components/ChessBoard'
import BoardViz from './components/BoardViz'

import data from './data'

console.log('data', data)

const Report = ({}) => (
  <div>
    <div>
      <h4>BranchingFactor</h4>
      <Plot height={400} width={1500} data={data.BranchingFactor}>
        <LineSeries
          data={data.BranchingFactor.filter((d, i) => i % 2 === 0)}
          color="lightslategray"
          style={{ strokeDasharray: '5 5' }}
        />
        <LineSeries
          data={data.BranchingFactor.filter((d, i) => i % 2 === 1)}
          color="black"
          style={{ strokeDasharray: '5 5' }}
        />
        <LineSeries data={data.BranchingFactor} />
      </Plot>
    </div>
    <div>
      <h4>GameLengths</h4>
      <Plot height={400} width={1500} data={data.GameLengths} xType="ordinal">
        <VerticalBarSeries data={data.GameLengths} stroke="white" />
      </Plot>
    </div>
    <div>
      <h4>MaterialCount</h4>
      <Plot height={400} width={1500} data={data.MaterialCount}>
        <LineSeries data={data.MaterialCount} />
      </Plot>
    </div>
    <div>
      <h4>MaterialDiff</h4>
      <Plot height={400} width={1500} data={data.MaterialDiff}>
        <LineSeries data={data.MaterialDiff} />
      </Plot>
    </div>
    <div>
      <h4>GameEndMaterialCount</h4>
      <Plot height={400} width={1500} data={data.GameEndMaterialCount}>
        <VerticalBarSeries stroke="white" data={data.GameEndMaterialCount} />
      </Plot>
    </div>
    <div>
      <h4>GameEndMaterialDiff</h4>
      <Plot height={400} width={1500} data={data.GameEndMaterialDiff}>
        <VerticalBarSeries stroke="white" data={data.GameEndMaterialDiff} />
      </Plot>
    </div>
    {Object.keys(data.Heatmaps).map(key => (
      <div key={key}>
        <h4>{key}</h4>
        <BoardViz data={data.Heatmaps[key]} />
      </div>
    ))}
    <div>
      <h4>Openings</h4>
      <Sunburst
        hideRootNode
        // colorType="literal"
        data={data.Openings}
        height={500}
        width={500}
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
