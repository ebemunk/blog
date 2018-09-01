import React from 'react'
import * as R from 'ramda'
import classnames from 'classnames'
import * as d3 from 'd3'

import Toggle from 'components/Toggle'

import Season from './Season'

import css from './Flashes.css'

export function Flashes({ data, toggleScale, scale }) {
  const maxEp = R.pipe(
    R.groupBy(d => `${d.season}`),
    R.map(eps => {
      return eps.reduce((sum, ep) => {
        return sum + ep.flashes.reduce((sss, f) => sss + f.chars, 0)
      }, 0)
    }),
    R.values,
    d3.max,
  )(data)

  const seasonScale = d3
    .scaleLinear()
    .domain([0, maxEp])
    .range([0, 900])

  return (
    <div className={css.wrap}>
      <div className={css.legend}>
        <Toggle
          children="Scale Season Lengths"
          onClick={() => toggleScale(!scale)}
          className={css.toggle}
          on={scale}
        />
      </div>
      <div className={css.legend}>
        {['Flashback', 'Flash-forward', 'Flash-sideways'].map(name => (
          <div className={css.key} key={name}>
            <div
              className={classnames(css.box, {
                [css.flashback]: name === 'Flashback',
                [css.flashforward]: name === 'Flash-forward',
                [css.flashsideways]: name === 'Flash-sideways',
              })}
            />
            {name}
          </div>
        ))}
      </div>
      <svg width={900} height={360} className={css.svg}>
        {R.range(1, 7).map(season => (
          <g key={season} transform={`translate(0, ${(season - 1) * 60 + 15})`}>
            <text x={0} y={0} dy={-5} className={css.seasonLabel}>
              Season {season}
            </text>
            <Season
              season={season}
              data={data.filter(ep => ep.season === season)}
              scale={scale ? seasonScale : () => 900}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

import { withState } from 'recompose'

export default withState('scale', 'toggleScale', false)(Flashes)
