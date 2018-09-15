import React from 'react'
import { NodeGroup } from 'react-move'

import style from './BarChart.css'

export default class VerticalBars extends React.PureComponent {
  render() {
    const { data, linearScale, bandScale, barStyle } = this.props

    const origin = linearScale(0)

    const transition = d => {
      const val = linearScale(d.value)
      if (d.value < 0) {
        return {
          y: [origin],
          height: [val - origin],
        }
      } else {
        return {
          y: [val],
          height: [origin - val],
        }
      }
    }

    return (
      <NodeGroup
        data={data}
        keyAccessor={d => d.key}
        start={() => ({
          y: origin,
          height: 0,
        })}
        enter={transition}
        update={transition}
        leave={() => ({
          y: [origin],
          height: [0],
        })}
      >
        {nodeData => {
          return (
            <g>
              {nodeData.map(node => {
                const {
                  key,
                  data: { value },
                  state: { y, height },
                } = node
                return (
                  <rect
                    x={bandScale(key)}
                    y={y}
                    width={bandScale.bandwidth()}
                    height={height}
                    className={style.bar}
                    key={key}
                    style={barStyle({ key, value })}
                  />
                )
              })}
            </g>
          )
        }}
      </NodeGroup>
    )
  }
}
