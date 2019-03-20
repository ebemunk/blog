import React from 'react'
import { histogram, extent, max } from 'd3-array'
import { scaleLinear, scalePow } from 'd3-scale'

import { colors8 } from '../../vizlib/colors'

import FlexPlot from '../../vizlib/FlexPlot'
import GridLines from '../../vizlib/GridLines'
import Axis from '../../vizlib/Axis'
import Rects from '../../vizlib/Rects'
import ChartTitle from '../../vizlib/ChartTitle'

import PointOut from '../Years/PointOut'
import Interaction from './Interaction'
import Survival from './Survival'

import data from '../../data/fatality-histogram.csv'

const hist = histogram().thresholds(26)
const bins = hist(data.map(d => +d.passenger_fat + +d.crew_fat))

const FatalityHist = () => (
  <div>
    <ChartTitle
      title="Histogram of Fatalities"
      subtitle="Number of fatalities binned in ranges of 20. Mouseover for details. Notice the power scale on the y axis."
      style={{
        marginLeft: '0.5rem',
      }}
    />
    <FlexPlot
      height={300}
      margin={{ bottom: 20, left: 50, top: 15, right: 20 }}
    >
      {({ chartHeight, chartWidth }) => {
        const xScale = scaleLinear()
          .domain(extent(data.map(d => +d.passenger_fat + +d.crew_fat)))
          .range([0, chartWidth])

        const yScale = scalePow()
          .exponent(0.3)
          .domain([0, max(bins, d => d.length)])
          .range([chartHeight, 0])

        return (
          <React.Fragment>
            <GridLines
              scale={xScale}
              orientation="vertical"
              style={{ stroke: 'rgba(255,255,255,0.3)' }}
              ticks={20}
            />
            <GridLines
              scale={yScale}
              orientation="horizontal"
              style={{ stroke: 'rgba(255,255,255,0.3)' }}
              ticks={5}
            />
            <Rects
              data={bins}
              x={d => xScale(d.x0)}
              y={d => yScale(d.length)}
              width={d => xScale(d.x1) - xScale(d.x0)}
              height={d => chartHeight - yScale(d.length)}
              style={{
                fill: colors8(0),
              }}
            />

            <Interaction bins={bins} xScale={xScale} />

            <Axis
              orientation="left"
              scale={yScale}
              tickArguments={[5]}
              title="Frequency"
            />
            <Axis
              orientation="bottom"
              scale={xScale}
              transform={`translate(0, ${chartHeight})`}
              tickArguments={[20]}
              title="Fatalities"
            />

            <PointOut
              x={xScale(510)}
              y={yScale(1)}
              dx={-90}
              dy={-32}
              color={colors8(0)}
              title="Worst crash in history"
              show
              style={{ opacity: 0 }}
            />
          </React.Fragment>
        )
      }}
    </FlexPlot>

    <Survival />
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(
  hot(module),
  React.memo,
)(FatalityHist)
