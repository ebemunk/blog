import React from 'react'
import * as R from 'ramda'

import Season from './Season'

import css from './Flashes.css'

export default function Flashes({ data }) {
  return (
    <div className={css.wrap}>
      <svg width={900} height={360} className={css.svg}>
        {R.range(1, 7).map(season => (
          <g key={season} transform={`translate(0, ${(season - 1) * 60 + 15})`}>
            <text x={0} y={0} dy={-5} className={css.seasonLabel}>
              Season {season}
            </text>
            <Season
              season={season}
              data={data.filter(ep => ep.season === season)}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
