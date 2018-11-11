import React from 'react'
import { format } from 'd3-format'

import data from '../data'
import Histogram from '../components/Histogram'
import { scaleOrdinal } from 'd3-scale'

const seasonColor = scaleOrdinal([
  '#0081bd',
  '#7a7ed3',
  '#ce70c7',
  '#ff669a',
  '#ff7a5b',
  '#ffa600',
])

const GameEndMaterialDiff = ({ abs, setAbs, ply, setPly }) => (
  <div>
    <label>
      <input type="checkbox" onChange={() => setAbs(!abs)} checked={abs} />
      Absolute Diff
    </label>
    <label>
      <input type="checkbox" onChange={() => setPly(!ply)} checked={ply} />
      Only &lt; 200 ply
    </label>
    <Histogram
      data={data.GameEndMaterialDiff.map(d => ({
        x: d.x,
        y: abs ? Math.abs(d.y) : d.y,
      })).slice(0, ply ? 200 : data.GameEndMaterialDiff.length)}
      height={400}
      width={1500}
      xAxis={{
        title: 'Ply (half-move)',
      }}
      yAxis={{
        title: 'Count',
      }}
      crosshairProps={{
        titleFormat: d => ({
          title: 'Ply',
          value: d[0].x,
        }),
        itemsFormat: d => [
          {
            title: 'Count',
            value: format('.3')(d[0].y),
          },
        ],
      }}
    />
  </div>
)

import { compose, pure, withState } from 'recompose'

export default compose(
  pure,
  withState('abs', 'setAbs', true),
  withState('ply', 'setPly', false),
)(GameEndMaterialDiff)
