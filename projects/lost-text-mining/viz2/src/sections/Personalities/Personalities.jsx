import React from 'react'
import * as d3 from 'd3'
import classnames from 'classnames'
import { lift } from 'ramda'
import ReactTooltip from 'react-tooltip'

import dimensions from './dimensions'
import labels from './labels'
import Dimension from './Dimension'
// import Tooltip from './Tooltip'

import style from './Personalities.css'

export default function Personalities(props) {
  const { width, padding, data } = props

  const x = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, width - padding.left - padding.right])

  return (
    <div className={style.dimensions} id="dimensions-viz">
      <ReactTooltip id="tt" />
      {dimensions
        .map(dim => ({
          ...dim,
          isNeeds: dim.key === 'needs',
          width: ['needs', 'values', 'big5'].includes(dim.key)
            ? width - 250
            : width,
          padding: ['needs', 'values', 'big5'].includes(dim.key)
            ? { top: 0, left: 0, right: 0, bottom: 0 }
            : padding,
        }))
        .map(dimension => (
          <div
            key={dimension.key}
            className={style.dimension}
            style={{ width: dimension.isNeeds ? width * 2 : width }}
          >
            <div className={style.label}>{labels[dimension.key].label}</div>
            <div className={style.dims}>
              <Dimension
                x={x}
                dimension={{
                  ...dimension,
                  facets: dimension.isNeeds
                    ? dimension.facets.slice(0, 6)
                    : dimension.facets,
                }}
                data={data}
                width={dimension.width}
                padding={dimension.padding}
              />
              {dimension.isNeeds && (
                <Dimension
                  x={x}
                  dimension={{
                    ...dimension,
                    facets: dimension.facets.slice(6),
                  }}
                  data={data}
                  width={dimension.width}
                  padding={dimension.padding}
                />
              )}
            </div>
          </div>
        ))}
    </div>
  )
}

Personalities.defaultProps = {
  width: 400,
  padding: {
    top: 0,
    left: 125,
    right: 125,
    bottom: 0,
  },
}
