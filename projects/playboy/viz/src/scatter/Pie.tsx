import * as React from 'react'
import { pie, arc } from 'd3-shape'
import { scaleOrdinal } from 'd3-scale'
import { clone, toPairs, groupBy } from 'remeda'

import { usePlotContext } from '@xmatters/vizlib'

import { data } from '../data'

const Pie = () => {
  const { chartWidth, chartHeight } = usePlotContext()

  const nodes: any[] = clone(data)
  const count = groupBy(nodes, d => d.hair)
  //@ts-ignore
  const pieLayout = pie().value(([k, arr]) => arr.length)(toPairs(count))

  const arcG = arc()
    .innerRadius(50)
    .outerRadius(Math.min(chartHeight, chartWidth) / 2)
  const colorScale = scaleOrdinal()
    .domain(['Blonde', 'Brunette', 'Black', 'Red', 'Auburn', 'Hazel'])
    .range(['yellow', 'brown', 'black', 'red', 'orange', 'olivedrab'])

  return (
    <g transform={`translate(${chartWidth / 2},${chartHeight / 2})`}>
      {pieLayout.map((d, i) => (
        <path
          key={d.data[0]}
          //@ts-ignore
          d={arcG(d)}
          //@ts-ignore
          style={{ fill: colorScale(d.data[0]), opacity: 0.4 }}
        />
      ))}
    </g>
  )
}

export default Pie
