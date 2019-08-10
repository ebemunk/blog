import React from 'react'

import { scaleBand, scaleLinear } from 'd3-scale'
import { max, mean } from 'd3-array'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis'
import GridLines from '../../vizlib/GridLines'
import ChartTitle from '../../vizlib/ChartTitle'
import { blueRed } from '../../vizlib/colors'

import rawData from '../../data/plane-age.json'
const data = rawData
  .slice(0, 20)
  .map(d => ({ ...d, mean: mean(d.ages) }))
  .sort((a, b) => b.mean - a.mean)

import Violin from './Violin'

const color = blueRed()

const PlaneAge = () => {
  return (
    <>
      <ChartTitle
        title="How long before planes crash?"
        subtitle="Distribution of the years between a plane's first flight and when it crashes, grouped by manufacturer. Red line shows the average."
        style={{
          marginLeft: 30,
        }}
      />
      <FlexPlot
        height={500}
        margin={{ top: 20, left: 30, right: 20, bottom: 20 }}
      >
        {({ chartHeight, chartWidth }) => {
          const x = scaleBand()
            .domain(data.map(d => d.type))
            .range([0, chartWidth])
            .padding(0.2)

          const y = scaleLinear()
            .domain([0, max(data, d => max(d.ages))])
            .range([chartHeight, 0])

          return (
            <>
              <GridLines orientation="horizontal" scale={y} />
              <Axis
                scale={x}
                orientation="bottom"
                transform={`translate(0, ${chartHeight})`}
                tickFormat={d => (d === 'de' ? 'de Havilland' : d)}
              />
              <Axis scale={y} orientation="left" title="Years in service" />
              {data.map(d => (
                <g key={d.type} transform={`translate(${x(d.type)}, 0)`}>
                  <Violin
                    data={d.ages}
                    bandwidth={x.bandwidth()}
                    yDomain={y.domain()}
                  />
                  <line
                    x1={0}
                    y1={y(d.mean)}
                    x2={x.bandwidth()}
                    y2={y(d.mean)}
                    style={{
                      fill: 'none',
                      stroke: color(1),
                      strokeWidth: 3,
                    }}
                  />
                </g>
              ))}
            </>
          )
        }}
      </FlexPlot>
    </>
  )
}

import { hot } from 'react-hot-loader'

export default hot(module)(PlaneAge)
