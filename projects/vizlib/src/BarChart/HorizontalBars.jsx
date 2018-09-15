import React from 'react'
import { NodeGroup } from 'react-move'

import style from './BarChart.css'

export default class HorizontalBars extends React.PureComponent {
  render() {
    const { data, linearScale, bandScale, barStyle } = this.props

    const origin = linearScale(0)

    const transition = d => {
      const val = linearScale(d.value)
      if (d.value < 0) {
        return {
          x: [val],
          width: [origin - val],
        }
      } else {
        return {
          x: [origin],
          width: [val - origin],
        }
      }
    }

    return (
      <NodeGroup
        data={data}
        keyAccessor={d => d.key}
        start={() => ({
          x: origin,
          width: 0,
        })}
        enter={transition}
        update={transition}
        leave={() => ({
          x: [origin],
          width: [0],
        })}
      >
        {nodeData => {
          return (
            <g>
              {nodeData.map(node => {
                const {
                  key,
                  data: { value },
                  state: { x, width },
                } = node
                return (
                  <rect
                    x={x}
                    y={bandScale(key)}
                    width={width}
                    height={bandScale.bandwidth()}
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
