import React from 'react'

import Facet from './Facet'

import style from './Dimension.css'

export default function Dimension(props) {
  const {
    barWidth,
    barHeight,
    dimension,
    x,
  } = props

  return dimension.children.map((d, i) => (
    <g
      key={d.trait_id}
      transform={`translate(0, ${i * barHeight})`}
    >
      <Facet
        trait_id={d.trait_id}
        height={barHeight}
        width={barWidth}
      />
      {[x(d.percentile)].map(p => (
        <circle
          r={5}
          cx={p}
          cy={barHeight / 2}
          className={style.circle}
        />
      ))}
    </g>
  ))
}
