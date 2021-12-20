import React from 'react'
import * as R from 'ramda'
import * as d3 from 'd3'

import Season from './Season'
import Legend from './Legend'

import css from './SceneTone.css'

export function SceneTone({ data, scale, toggleScale }) {
  const maxEp = R.pipe(
    R.groupBy(d => `${d.season}`),
    R.map(eps => {
      return eps.reduce((sum, ep) => {
        const lastScene = R.last(ep.scenes)
        return sum + lastScene.start + lastScene.length
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
    <React.Fragment>
      <Legend toggleScale={toggleScale} scale={scale} />
      <div className={css.wrap}>
        <svg width={900} height={360} className={css.svg}>
          {R.range(1, 7).map(season => (
            <g
              key={season}
              transform={`translate(0, ${(season - 1) * 60 + 15})`}
            >
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
    </React.Fragment>
  )
}

import { withState } from 'recompose'

export default withState('scale', 'toggleScale', false)(SceneTone)
