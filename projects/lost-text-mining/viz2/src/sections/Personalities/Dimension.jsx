import React from 'react'
import * as R from 'ramda'
import * as d3 from 'd3'
import { NodeGroup } from 'react-move'

import { groupColor } from 'utils'
import { colors } from './dimensions'
import Facet from './Facet'

import style from './Dimension.css'

export default function Dimension(props) {
  const { dimension, x, data, width, padding, tooltips } = props

  const barWidth = width - padding.left - padding.right
  const barHeight = 30

  const line = d3
    .line()
    .x(d => x(d))
    .y((d, i) => i * barHeight + barHeight / 2)

  const points = R.pick(dimension.facets)(data)
  const linePoints = R.transpose(dimension.facets.map(f => points[f] || []))

  return (
    <svg
      width={width}
      height={
        dimension.facets.length * barHeight + padding.top + padding.bottom
      }
    >
      <g transform={`translate(${padding.left}, ${padding.top})`}>
        {dimension.facets.map((facet, i) => (
          <g key={facet} transform={`translate(0, ${i * barHeight})`}>
            <Facet
              trait_id={facet}
              height={barHeight}
              width={barWidth}
              fullWidth={width}
              paddingLeft={padding.left}
              color={
                dimension.key === 'big5' ? colors[facet] : colors[dimension.key]
              }
              points={linePoints.map((pts, ii) => ({
                value: pts[i],
                color: groupColor(ii),
              }))}
              tooltips={tooltips}
            />
          </g>
        ))}
        {linePoints.map((pts, i) => (
          <React.Fragment key={i}>
            <path d={line(pts)} stroke={groupColor(i)} className={style.line} />
            <NodeGroup
              data={pts}
              keyAccessor={(d, i) => i}
              start={d => ({
                cx: [x(0.5)],
                cy: barHeight / 2,
                r: 5,
              })}
              enter={d => ({
                cx: [x(d)],
                timing: { duration: 250 },
              })}
              update={d => ({
                cx: [x(d)],
                timing: { duration: 250 },
              })}
            >
              {nodes => (
                <React.Fragment>
                  {nodes.map((node, ii) => (
                    <circle
                      key={ii}
                      {...node.state}
                      className={style.circle}
                      fill={groupColor(i)}
                      transform={`translate(0, ${ii * barHeight})`}
                    />
                  ))}
                </React.Fragment>
              )}
            </NodeGroup>
          </React.Fragment>
        ))}
      </g>
    </svg>
  )
}
