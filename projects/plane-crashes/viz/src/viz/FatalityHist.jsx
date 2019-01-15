import React from 'react'
import { histogram, extent, max } from 'd3-array'
import { scaleLinear, scalePow } from 'd3-scale'

import { colors8 } from '../colors'

import FlexPlot from '../vizlib/FlexPlot'
import GridLines from '../vizlib/GridLines'
import Axis from '../vizlib/Axis'
import Voronoi from '../vizlib/Voronoi'

import data from '../data/fatality-histogram.csv'

const hist = histogram()
const bins = hist(data.map(d => +d.passenger_fat + d.crew_fat))

const FatalityHist = () => (
  <div>
    <FlexPlot height={300} margin={{ bottom: 20, left: 50, top: 0, right: 20 }}>
      {({ chartHeight, chartWidth }) => {
        const xScale = scaleLinear()
          .domain(extent(data.map(d => +d.passenger_fat + d.crew_fat)))
          .range([0, chartWidth])

        const yScale = scalePow()
          .exponent(0.5)
          .domain([0, max(bins, d => d.length)])
          .range([chartHeight, 0])

        const binMids = bins.map(bin => {
          return [(xScale(bin.x0) + xScale(bin.x1)) / 2, 0]
        })

        return (
          <React.Fragment>
            <Axis
              scale={xScale}
              orientation="bottom"
              transform={`translate(0, ${chartHeight})`}
              ticks={20}
            />
            <Axis scale={yScale} orientation="left" ticks={5} />
            <GridLines
              scale={xScale}
              orientation="vertical"
              style={{ stroke: 'rgba(255,255,255,0.3)' }}
            />
            <GridLines
              scale={yScale}
              orientation="horizontal"
              style={{ stroke: 'rgba(255,255,255,0.3)' }}
              ticks={5}
            />
            {bins.map(bin => (
              <rect
                key={bin}
                x={xScale(bin.x0)}
                y={yScale(bin.length)}
                width={xScale(bin.x1) - xScale(bin.x0)}
                height={chartHeight - yScale(bin.length)}
                style={{
                  fill: colors8(0),
                }}
              />
            ))}
            <Voronoi
              points={binMids}
              onMouseEnter={(e, point) => {
                console.log('enter', e, point)
              }}
            />
          </React.Fragment>
        )
      }}
    </FlexPlot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(FatalityHist)
