import React from 'react'
import * as R from 'ramda'
import * as d3 from 'd3'

import { groupColor } from '../../util'
import Facet from './Facet'

import style from './Dimension.css'

export default function Dimension(props) {
  const {
    barWidth,
    barHeight,
    dimension,
    x,
    data,
  } = props

  const points = R.pick(dimension.facets)(data)

  const line = d3.line()
    .x(d => x(d))
    .y((d, i) => i * barHeight + (barHeight / 2))

  const linePoints = R.transpose(dimension.facets.map(f => points[f] || []))

  return (
    <React.Fragment>
    {
      dimension.facets.map((facet, i) => (
        <g
          key={facet}
          transform={`translate(0, ${i * barHeight})`}
        >
          <Facet
            trait_id={facet}
            height={barHeight}
            width={barWidth}
          />
          {/* {points[facet].map((p, i) =>
            <circle
              key={p}
              r={5}
              cx={x(p)}
              cy={barHeight / 2}
              className={style.circle}
              fill={groupColor(i)}
            />
          )} */}
        </g>
      ))
    }
    {
      linePoints.map((pts, i) => (
        <React.Fragment key={pts.join()}>
          <path
            d={line(pts)}
            stroke={groupColor(i)}
            strokeWidth={5}
            opacity={0.8}
            fill="none"
          />
          {
            pts.map((p, ii) =>
              <circle
                key={p}
                r={5}
                cx={x(p)}
                cy={barHeight / 2}
                className={style.circle}
                fill={groupColor(i)}
                transform={`translate(0, ${ii * barHeight})`}
              />
            )
          }
        </React.Fragment>
      ))
    }
    </React.Fragment>
  )
}
