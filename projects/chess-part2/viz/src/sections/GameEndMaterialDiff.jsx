import React from 'react'
import { format } from 'd3-format'
import { VerticalBarSeries } from 'react-vis'

import data from '../data'
import { colorScale } from '../util'
import Plot from '../components/Plot'

const GameEndMaterialDiff = ({ abs, setAbs, ply, setPly }) => {
  const vdata = data.GameEndMaterialDiff.map(d => ({
    x: d.x,
    y: abs ? Math.abs(d.y) : d.y,
  })).slice(0, ply ? 200 : data.GameEndMaterialDiff.length)

  return (
    <div>
      <label>
        <input type="checkbox" onChange={() => setAbs(!abs)} checked={abs} />
        Absolute Diff
      </label>
      <label>
        <input type="checkbox" onChange={() => setPly(!ply)} checked={ply} />
        Only &lt; 200 ply
      </label>
      <Plot
        data={vdata}
        height={400}
        xAxis={{
          title: 'Ply (half-move)',
        }}
        yAxis={{
          title: 'Average Material Difference (pawns)',
        }}
        crosshairProps={{
          titleFormat: d => ({
            title: 'Ply',
            value: d[0].x,
          }),
          itemsFormat: d => [
            {
              title: 'Avg. Diff.',
              value: format('.3')(d[0].y),
            },
          ],
        }}
      >
        <VerticalBarSeries
          data={vdata}
          color={colorScale(0)}
          stroke="#282c34"
        />
      </Plot>
    </div>
  )
}

import { compose, pure, withState } from 'recompose'

export default compose(
  pure,
  withState('abs', 'setAbs', true),
  withState('ply', 'setPly', true),
)(GameEndMaterialDiff)
