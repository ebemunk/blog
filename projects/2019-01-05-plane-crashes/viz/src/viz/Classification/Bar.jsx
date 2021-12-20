import React from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { range, max } from 'd3-array'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis'
import Rects from '../../vizlib/Rects'

import rawData from '../../data/classifications.csv'
import { links } from '../../data/classification-links.json'

const Bar = ({ hint, height, color }) => (
  <FlexPlot
    height={height}
    margin={{ left: 225, top: 30, bottom: 0, right: 20 }}
  >
    {({ chartHeight, chartWidth }) => {
      const lookup = hint
        ? [
            ...new Set(
              links
                .filter(d => d.source === hint || d.target === hint)
                .reduce((arr, v) => [...arr, v.source, v.target], []),
            ),
          ].reduce((obj, v) => (v === hint ? obj : { ...obj, [v]: true }), {})
        : {}

      const filtered = rawData
        .filter(d => (hint ? lookup[d.classification] : true))
        .sort((a, b) => +b.count - +a.count)

      const data = range(20).map(i =>
        i < filtered.length
          ? filtered[i]
          : {
              classification: `x-${i}`,
              count: 0,
            },
      )

      const x = scaleLinear()
        .domain([0, max(data.map(d => +d.count))])
        .range([0, chartWidth])

      const y = scaleBand()
        .domain(data.map(d => d.classification))
        .range([0, chartHeight])
        .padding(0.2)

      return (
        <>
          <Rects
            data={data.map(d => [+d.count, d.classification])}
            height={y.bandwidth()}
            x={0}
            y={d => y(d[1])}
            width={d => x(d[0])}
            style={d => ({
              fill: color(d[1]),
            })}
          />
          <Axis
            orientation="left"
            scale={y}
            tickFormat={d => (d.match(/x\-/) ? '' : d)}
          />
          <Axis orientation="top" scale={x} />
        </>
      )
    }}
  </FlexPlot>
)

import { compose } from 'recompose'

export default compose()(Bar)
