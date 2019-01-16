import React from 'react'
import PropTypes from 'prop-types'
import { voronoi } from 'd3-voronoi'

import { PlotContext } from './Plot'

const Voronoi = ({
  points,
  style = {},
  showPolygons = false,
  onMouseEnter = () => {},
  onMouseMove = () => {},
  ...props
}) => {
  return (
    <PlotContext.Consumer>
      {({ chartWidth, chartHeight, margin }) => {
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
                onMouseEnter={e =>
                  onMouseEnter(e, {
                    x: e.clientX - margin.left,
                    y: e.clientY - margin.top,
                  })
                }
                onMouseMove={e =>
                  onMouseMove(e, {
                    x: e.clientX - margin.left,
                    y: e.clientY - margin.top,
                  })
                }
                {...props}
              />
            ))}
          </g>
        )
      }}
    </PlotContext.Consumer>
  )
}

Voronoi.propTypes = {
  points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  style: PropTypes.object,
  showPolygons: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseMove: PropTypes.func,
}

export default Voronoi
