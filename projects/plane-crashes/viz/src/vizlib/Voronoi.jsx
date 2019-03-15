import React, { useContext } from 'react'
import { voronoi } from 'd3-voronoi'

import { PlotContext } from './Plot'

const Voronoi = ({
  points,
  style = {},
  showPolygons = false,
  showPoints = false,
  onMouseEnter = () => {},
  onMouseMove = () => {},
  ...rest
}) => {
  const {
    //
    chartWidth,
    chartHeight,
    margin,
    getBoundingClientRect,
  } = useContext(PlotContext)

  const polygons = voronoi()
    .extent([[0, 0], [chartWidth, chartHeight]])(points)
    .polygons()

  return (
    <g>
      {polygons.map(polygon => (
        <path
          key={polygon}
          d={`M${polygon.join('L')}Z`}
          style={{
            fill: 'transparent',
            stroke: showPolygons ? 'black' : 'none',
            ...style,
          }}
          onMouseEnter={e => {
            const bbox = getBoundingClientRect()
            onMouseEnter(
              e,
              {
                x: e.clientX - bbox.left - margin.left,
                y: e.clientY - bbox.top - margin.top,
              },
              polygon,
            )
          }}
          onMouseMove={e => {
            const bbox = getBoundingClientRect()
            onMouseMove(
              e,
              {
                x: e.clientX - bbox.left - margin.left,
                y: e.clientY - bbox.top - margin.top,
              },
              polygon,
            )
          }}
          {...rest}
        />
      ))}
      {showPoints &&
        points.map(p => (
          <circle key={p} cx={p[0]} cy={p[1]} r={3} style={{ fill: 'red' }} />
        ))}
    </g>
  )
}

import PropTypes from 'prop-types'

Voronoi.propTypes = {
  points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  style: PropTypes.object,
  showPolygons: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseMove: PropTypes.func,
}

export default React.memo(Voronoi)
