import React from 'react'
import { format } from 'd3-format'
import { VerticalBarSeries } from 'react-vis'

import data from '../data'
import { colorScale } from '../util'
import Plot from '../components/Plot'
import Toggle from '../components/Toggle'

import css from './Section.css'

const GameEndMaterialDiff = ({ abs, setAbs, ply, setPly }) => {
  const vdata = data.GameEndMaterialDiff.map(d => ({
    x: d.x,
    y: abs ? Math.abs(d.y) : d.y,
  })).slice(0, ply ? 150 : data.GameEndMaterialDiff.length)

  return (
    <div className={css.viz}>
      <div>
        <Toggle
          onChange={() => setAbs(!abs)}
          checked={abs}
          label="Absolute Diff"
        />
        <Toggle
          onChange={() => setPly(!ply)}
          checked={ply}
          label="Only < 150 ply"
          style={{ marginLeft: '1rem' }}
        />
      </div>
      <Plot
        data={vdata}
        height={400}
        xAxis={{
          title: 'Ply (half-move)',
        }}
        yAxis={{
          title: 'Average Material Difference (pawns)',
        }}
        margin={{ bottom: 25 }}
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
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  pure,
  withState('abs', 'setAbs', true),
  withState('ply', 'setPly', true),
)(GameEndMaterialDiff)
