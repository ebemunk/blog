import React from 'react'
import * as d3 from 'd3'

import style from './Interaction.css'

export default class Interaction extends React.Component {
  state = {
    visible: false,
    range: {
      x: null,
      y: null,
    },
    data: {
      x: null,
      y: null,
    },
  }

  render() {
    const {
      polygons,
      scales,
      width,
      height,
      xTickFormat,
      yTickFormat,
      bandwidth,
    } = this.props
    const { visible, range, data } = this.state

    return (
      <g onMouseLeave={() => this.setState({ visible: false })}>
        <g className={style.polygons}>
          {polygons.map((p, i) => (
            <path
              key={p}
              d={`M${p.join('L')}Z`}
              fill="transparent"
              onMouseEnter={() =>
                this.setState({
                  range: {
                    x: scales.x(p.data.key) + bandwidth / 2,
                    y: scales.y(p.data.value),
                  },
                  data: {
                    x: xTickFormat(p.data.key),
                    y: yTickFormat(p.data.value),
                  },
                  visible: true,
                })
              }
            />
          ))}
        </g>
        {visible && (
          <g>
            <line
              x1={range.x}
              y1={height}
              x2={range.x}
              y2={range.y}
              className={style.xLine}
            />
            <text
              children={data.x}
              className={style.xVal}
              x={range.x}
              y={height + 6}
              dy={8}
            />

            <line
              x1={-6}
              y1={range.y}
              x2={range.x}
              y2={range.y}
              className={style.yLine}
            />
            <text children={data.y} className={style.yVal} x={-5} y={range.y} />
          </g>
        )}
      </g>
    )
  }
}
