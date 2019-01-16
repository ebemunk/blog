import React from 'react'
import ReactDOM from 'react-dom'
import { histogram, extent, max } from 'd3-array'
import { scaleLinear, scalePow } from 'd3-scale'

import { colors8 } from '../colors'

import FlexPlot from '../vizlib/FlexPlot'
import GridLines from '../vizlib/GridLines'
import Axis from '../vizlib/Axis'
import Voronoi from '../vizlib/Voronoi'
import Rects from '../vizlib/Rects'
import Hint from '../vizlib/Hint'

import data from '../data/fatality-histogram.csv'

const hist = histogram()
const bins = hist(data.map(d => +d.passenger_fat + d.crew_fat))

const FatalityHist = ({ hint, setHint }) => (
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
            <Voronoi
              points={bins.map(bin => {
                return [(xScale(bin.x0) + xScale(bin.x1)) / 2, 0]
              })}
              onMouseEnter={(e, point) => {
                const x = xScale.invert(point.x)
                const d = bins.find(bin => x >= bin.x0 && x < bin.x1)
                setHint({
                  x: (xScale(d.x0) + xScale(d.x1)) / 2,
                  data: d.length,
                })
              }}
              onMouseLeave={() => {
                setHint(null)
              }}
            />
            {hint && (
              <Hint x1={hint.x} y1={0} x2={hint.x} y2={chartHeight}>
                Derp {hint.data}
              </Hint>
            )}
          </React.Fragment>
        )
      }}
    </FlexPlot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose, withState } from 'recompose'

export default compose(
  hot(module),
  withState('hint', 'setHint'),
)(FatalityHist)
