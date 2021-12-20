import React from 'react'
import { withKnobs, array, number, select } from '@storybook/addon-knobs'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import { line, curveBasis } from 'd3-shape'

import Plot from './Plot'
import usePlotContext from './usePlotContext'
import Axis from './Axis'
import Path from './Path'
import { sin, cos, tan } from './dataGenerator'

export default {
  title: 'Plot',
  component: Plot,
  decorators: [withKnobs],
}

const Story = ({ data, domain }) => {
  const { chartWidth, chartHeight } = usePlotContext()

  const x = scaleLinear().domain(domain.map(Number)).range([0, chartWidth])
  const y = scaleLinear()
    .domain(extent(data.map(d => d[1])))
    .range([chartHeight, 0])
    .nice()
  const lineG = line()
    .x(d => x(d[0]))
    .y(d => y(d[1]))
    .curve(curveBasis)

  return (
    <>
      <Axis scale={y} orientation="left" showDomain animate />
      <Axis
        scale={x}
        orientation="bottom"
        transform={`translate(0,${y(0)})`}
        showDomain
        animate
      />
      <Path
        generator={lineG}
        data={data}
        style={{ fill: 'none', stroke: 'black' }}
      />
    </>
  )
}

export const example1 = () => {
  const domain = array('domain', ['0', '10'])
  const samples = number('samples', 100, { range: true, min: 1, max: 100 })
  const generator = select('generator', ['sin', 'cos', 'tan'], 'sin')

  const dataFn = { sin, cos, tan }[generator]

  return (
    <>
      <Plot
        margin={{ top: 20, right: 20, bottom: 20, left: 30 }}
        height={400}
        width={600}
      >
        <Story
          data={dataFn({
            from: +domain[0],
            to: +domain[1],
            samples,
          })}
          domain={domain}
        />
      </Plot>
    </>
  )
}
