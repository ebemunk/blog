import React from 'react'
import { format } from 'd3-format'
import { VerticalBarSeries, LineSeries } from 'react-vis'

import data from '../data'
import { colorScale } from '../util'
import Plot from '../components/Plot'
import Toggle from '../components/Toggle'

import css from './Section.css'

const GameEndMaterialCount = ({ ply, setPly }) => {
  const vdata = data.GameEndMaterialCount.slice(
    0,
    ply ? 150 : data.GameEndMaterialCount.length,
  )

  return (
    <div className={css.viz}>
      <Toggle
        onChange={() => setPly(!ply)}
        checked={ply}
        label="Only < 150 ply"
      />
      <Plot
        data={vdata}
        height={400}
        margin={{ bottom: 25 }}
        xAxis={{
          title: 'Ply (half-move)',
        }}
        yAxis={{
          title: 'Average Material Count (pawns)',
        }}
        yDomain={[0, 80]}
        crosshairProps={{
          titleFormat: d => ({
            title: 'Ply',
            value: d[0].x,
          }),
          itemsFormat: d => [
            {
              title: 'Avg. Count',
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
  withState('ply', 'setPly', true),
)(GameEndMaterialCount)
