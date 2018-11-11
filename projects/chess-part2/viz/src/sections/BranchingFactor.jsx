import React from 'react'
import { LineSeries, MarkSeries } from 'react-vis'
import { format } from 'd3-format'

import data from '../data'
import { colorScale } from '../util'
import Plot from '../components/Plot'

const BranchingFactor = ({ ply, setPly }) => {
  const vdata = data.BranchingFactor.slice(
    0,
    ply ? 150 : data.BranchingFactor.length,
  )

  return (
    <div>
      <label>
        <input type="checkbox" onChange={() => setPly(!ply)} checked={ply} />
        Only &lt; 150 ply
      </label>
      <Plot
        height={400}
        width={1500}
        data={vdata}
        xAxis={{
          title: 'Ply (half-move)',
        }}
        yAxis={{
          title: 'Branching Factor',
        }}
        crosshairProps={{
          titleFormat: d => ({
            title: 'Ply',
            value: d[0].x,
          }),
          itemsFormat: d => [
            {
              title: 'Branching Factor',
              value: format('.3')(d[0].y),
            },
          ],
        }}
      >
        <LineSeries data={vdata} color={colorScale(0)} />
        <MarkSeries
          data={vdata.filter((d, i) => i % 2 === 0)}
          size={2}
          color="white"
        />
        <MarkSeries
          data={vdata.filter((d, i) => i % 2 === 1)}
          size={2}
          color="#777"
        />
      </Plot>
    </div>
  )
}

import { compose, pure, withState } from 'recompose'

export default compose(
  pure,
  withState('ply', 'setPly', true),
)(BranchingFactor)
