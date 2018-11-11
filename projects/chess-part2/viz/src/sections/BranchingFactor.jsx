import React from 'react'
import { LineSeries } from 'react-vis'
import { format } from 'd3-format'

import Plot from '../components/Plot'

import data from '../data'

const BranchingFactor = ({ ply, setPly }) => {
  const vdata = data.BranchingFactor.slice(
    0,
    ply ? 200 : data.BranchingFactor.length,
  )

  return (
    <div>
      <label>
        <input type="checkbox" onChange={() => setPly(!ply)} checked={ply} />
        Only &lt; 200 ply
      </label>
      <Plot
        height={400}
        width={1500}
        data={vdata}
        crosshairProps={{
          titleFormat: d => ({
            title: 'Ply',
            value: d[0].x,
          }),
          itemsFormat: d => [
            {
              title: 'Average # Legal Moves',
              value: format('.3')(d[0].y),
            },
          ],
        }}
      >
        <LineSeries
          data={vdata.filter((d, i) => i % 2 === 0)}
          color="white"
          style={{ strokeDasharray: '5 5' }}
        />
        <LineSeries
          data={vdata.filter((d, i) => i % 2 === 1)}
          color="black"
          style={{ strokeDasharray: '5 5' }}
        />
        <LineSeries data={vdata} />
      </Plot>
    </div>
  )
}

import { compose, pure, withState } from 'recompose'

export default compose(
  pure,
  withState('ply', 'setPly', true),
)(BranchingFactor)
