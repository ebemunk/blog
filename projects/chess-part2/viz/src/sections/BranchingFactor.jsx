import React from 'react'
import { LineSeries, MarkSeries } from 'react-vis'
import { format } from 'd3-format'

import data from '../data'
import { colorScale, whiteblack } from '../util'
import Plot from '../components/Plot'
import Toggle from '../components/Toggle'

import css from './Section.css'

const BranchingFactor = ({ ply, setPly }) => {
  const vdata = data.BranchingFactor.slice(
    0,
    ply ? 150 : data.BranchingFactor.length,
  )

  return (
    <div className={css.viz}>
      <Toggle
        onChange={() => setPly(!ply)}
        checked={ply}
        label="Only < 150 ply"
      />
      <Plot
        height={400}
        data={vdata}
        margin={{ bottom: 25 }}
        xAxis={{
          title: 'Ply (half-move)',
        }}
        yAxis={{
          title: 'Branching Factor',
        }}
        yDomain={[0, 40]}
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
        {/* <LineSeries
          data={vdata.filter((d, i) => i % 2 === 0)}
          color={whiteblack(0)}
          style={{ strokeDasharray: '5 5' }}
        /> */}
        <MarkSeries
          data={vdata.filter((d, i) => i % 2 === 0)}
          size={2}
          color={whiteblack(0)}
        />
        {/* <LineSeries
          data={vdata.filter((d, i) => i % 2 === 1)}
          color={whiteblack(1)}
          style={{ strokeDasharray: '5 5' }}
        /> */}
        <MarkSeries
          data={vdata.filter((d, i) => i % 2 === 1)}
          size={2}
          color={whiteblack(1)}
        />
      </Plot>
    </div>
  )
}

import { compose, pure, withState } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  pure,
  withState('ply', 'setPly', true),
  hot(module),
)(BranchingFactor)
