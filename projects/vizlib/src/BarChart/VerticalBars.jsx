import React from 'react'
import { NodeGroup } from 'react-move'

import style from './BarChart.css'

export default class VerticalBars extends React.PureComponent {
  render() {
    const { data, linearScale, bandScale, barStyle } = this.props

    const origin = linearScale(0)

    const transition = d => ({
      y: [linearScale(Math.max(0, d.value))],
      height: [Math.abs(linearScale(d.value) - origin)],
    })

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
