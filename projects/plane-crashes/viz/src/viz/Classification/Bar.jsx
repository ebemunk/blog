import React from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { extent, max } from 'd3-array'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis'
import Rects from '../../vizlib/Rects'
import { colors8 } from '../../vizlib/colors'

import rawData from '../../data/classifications.csv'
import { nodes, links } from '../../data/classification-links.json'

const Bar = ({ hint }) => (
  <FlexPlot height={400} margin={{ left: 150, top: 30, bottom: 0, right: 20 }}>
    {({ chartHeight, chartWidth }) => {
      const lookup = hint
        ? [
            ...new Set(
              links
                .filter(d => d.source === hint || d.target === hint)
                .reduce((arr, v) => [...arr, v.source, v.target], []),
            ),
          ].reduce((obj, v) => ({ ...obj, [v]: true }), {})
        : {}

      const data = rawData
        .filter(d => (hint ? lookup[d.classification] : true))
        .sort((a, b) => +b.count - +a.count)
        .slice(0, 20)
        .reverse()

      const x = scaleLinear()
        .domain([0, max(data.map(d => +d.count))])
        .range([0, chartWidth])

      console.log(
        'dom',
        data.map(d => d.classification),
        data.map(d => d.classification).fill('', data.length, 20),
      )

      const y = scaleBand()
        .domain(data.map(d => d.classification).fill('', data.length, 20))
        .range([chartHeight, 0])
        .padding(0.2)

      return (
        <React.Fragment>
          <Rects
            data={data.map(d => [+d.count, y(d.classification)])}
            height={y.bandwidth()}
            x={0}
            width={d => x(d[0])}
            style={{
              fill: colors8(0),
            }}
          />
          <Axis orientation="left" scale={y} />
          <Axis orientation="top" scale={x} />
        </React.Fragment>
      )
    }}
  </FlexPlot>
)

import { compose } from 'recompose'

export default compose()(Bar)
