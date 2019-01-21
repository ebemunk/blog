import React from 'react'
import PropTypes from 'prop-types'
import { voronoi } from 'd3-voronoi'
import debounce from 'lodash/debounce'

import { PlotContext } from './Plot'

const Voronoi = ({
  points,
  style = {},
  showPolygons = false,
  onMouseEnter = () => {},
  onMouseMove = () => {},
  ...rest
}) => {
  return (
    <PlotContext.Consumer>
      {({ chartWidth, chartHeight, margin, getBoundingClientRect }) => {
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
                  // const bbox = { left: 765, top: 36.84375 }
                  onMouseEnter(e, {
                    x: e.clientX - bbox.left - margin.left,
                    y: e.clientY - bbox.top - margin.top,
                  })
                }}
                onMouseMove={e => {
                  const bbox = getBoundingClientRect()
                  // const bbox = { left: 765, top: 36.84375 }
                  onMouseMove(e, {
                    x: e.clientX - bbox.left - margin.left,
                    y: e.clientY - bbox.top - margin.top,
                  })
                }}
                {...rest}
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
