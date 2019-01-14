import React from 'react'
import { Spring, animated } from 'react-spring'

import { PlotContext } from './Plot'

export default class Bars extends React.Component {
  render() {
    const { data, style, bandwidth, ...props } = this.props

    return (
      <PlotContext.Consumer>
        {({ chartHeight, chartWidth }) => (
          <g>
            {data.map((d, i) => (
              <Spring
                key={i}
                native
                to={{
                  x: d[0],
                  width: bandwidth,
                  y: d[1],
                  height: chartHeight - d[1],
                }}
              >
                {spring => (
                  <animated.rect
                    x={spring.x}
                    width={spring.width}
                    y={spring.y}
                    height={spring.height}
                    {...props}
                    style={{
                      ...style,
                    }}
                  />
                )}
              </Spring>
            ))}
          </g>
        )}
      </PlotContext.Consumer>
    )
  }
}
