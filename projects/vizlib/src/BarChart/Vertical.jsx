import React from 'react'
import { NodeGroup } from 'react-move'

const VerticalBars = ({ data, height, linearScale, bandScale, barStyle }) => (
  <NodeGroup
    data={data}
    keyAccessor={d => d.key}
    start={() => ({
      y: height - padding.top - padding.bottom,
      height: 0,
    })}
    enter={d => ({
      y: [linearScale(d.value)],
      height: [height - padding.top - padding.bottom - linearScale(d.value)],
    })}
    update={d => ({
      y: [linearScale(d.value)],
      height: [height - padding.top - padding.bottom - linearScale(d.value)],
    })}
    leave={d => ({
      y: [height - padding.top - padding.bottom],
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
            } = node
            const { y, height } = node.state
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

export default VerticalBars
