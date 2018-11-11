import React from 'react'
import { format } from 'd3-format'
import { VerticalBarSeries } from 'react-vis'
import { scaleOrdinal } from 'd3-scale'

import data from '../data'
import Plot from '../components/Plot'

const seasonColor = scaleOrdinal([
  '#0081bd',
  '#7a7ed3',
  '#ce70c7',
  '#ff669a',
  '#ff7a5b',
  '#ffa600',
])

const GameEndMaterialCount = ({ abs, setAbs, ply, setPly }) => {
  const vdata = data.GameEndMaterialCount.map(d => ({
    x: d.x,
    y: abs ? Math.abs(d.y) : d.y,
  })).slice(0, ply ? 200 : data.GameEndMaterialCount.length)

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
        width={1500}
        xAxis={{
          title: 'Ply (half-move)',
        }}
        yAxis={{
          title: 'Average Material Count (pawns)',
        }}
        crosshairProps={{
          titleFormat: d => ({
            title: 'Ply',
            value: d[0].x,
          }),
          itemsFormat: d => [
            {
              title: 'Avg. Count.',
              value: format('.3')(d[0].y),
            },
          ],
        }}
      >
        <VerticalBarSeries
          data={vdata}
          color={seasonColor(0)}
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
)(GameEndMaterialCount)
