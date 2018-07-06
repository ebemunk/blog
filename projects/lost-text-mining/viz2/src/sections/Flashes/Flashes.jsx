import React from 'react'
import * as R from 'ramda'

import Season from './Season'

import css from './Flashes.css'

export default function Flashes({ data }) {
  return (
    <svg width={700} height={1000} className={css.svg}>
      {R.range(1, 7).map(season => (
        <g key={season} transform={`translate(0, ${season * 30})`}>
          <Season
            season={season}
            data={data.filter(ep => ep.season === season)}
          />
        </g>
      ))}
    </svg>
  )
}
