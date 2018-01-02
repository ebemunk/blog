import React from 'react'
import * as R from 'ramda'
import * as d3 from 'd3'
import { NodeGroup } from 'react-move'

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
          </g>
        ))
      }
      {
        linePoints.map((pts, i) => (
          <React.Fragment key={i}>
            <path
              d={line(pts)}
              stroke={groupColor(i)}
              className={style.line}
            />
            <NodeGroup
              data={pts}
              keyAccessor={d => d}
              start={(d) => ({
                cx: x(0.5),
                cy: barHeight / 2,
                r: 5
              })}
              enter={d => ({
                cx: [x(d)],
                timing: { duration: 250 }
              })}
              update={d => ({
                cx: [x(d)],
                timing: { duration: 250 }
              })}
            >
              {
                nodes =>
                <React.Fragment>
                  {
                    nodes.map((node, ii) =>
                      <circle
                        key={ii}
                        {...node.state}
                        className={style.circle}
                        fill={groupColor(i)}
                        transform={`translate(0, ${ii * barHeight})`}
                      />
                    )
                  }
                </React.Fragment>
              }
            </NodeGroup>
          </React.Fragment>
        ))
      }
    </React.Fragment>
  )
}
