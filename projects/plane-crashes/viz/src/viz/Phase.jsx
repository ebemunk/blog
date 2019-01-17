import React from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

import { colors8 } from '../colors'

import FlexPlot from '../vizlib/FlexPlot'
import Axis from '../vizlib/Axis'
import GridLines from '../vizlib/GridLines'
import Rects from '../vizlib/Rects'
import Voronoi from '../vizlib/Voronoi'
import Hint from '../vizlib/Hint'

import data from '../data/phase.csv'

const scaleBandInvert = scale => {
  const domain = scale.domain()
  const paddingOuter = scale(domain[0])
  const eachBand = scale.step()
  return value => {
    const index = Math.floor((value - paddingOuter) / eachBand)
    return domain[Math.max(0, Math.min(index, domain.length - 1))]
  }
}

const Phase = ({ hint, setHint }) => (
  <div>
    <FlexPlot
      height={400}
      margin={{ left: 40, right: 15, top: 30, bottom: 30 }}
    >
      {({ chartHeight, chartWidth }) => {
        const xScale = scaleBand()
          .domain([...new Set(data.map(d => d.phase))])
          .range([0, chartWidth])
          .padding(0.2)

        const invertXScale = scaleBandInvert(xScale)

        const yScale = scaleLinear()
          .domain(extent(data.map(d => +d.count)))
          .range([chartHeight, 0])

        return (
          <React.Fragment>
            <Axis orientation="left" scale={yScale} />
            <Axis
              orientation="bottom"
              scale={xScale}
              transform={`translate(0, ${chartHeight})`}
            />
            <GridLines scale={yScale} orientation="horizontal" />
            <Rects
              data={data.map(d => [xScale(d.phase), yScale(+d.count)])}
              width={xScale.bandwidth()}
              height={d => chartHeight - d[1]}
              style={{
                fill: colors8(0),
              }}
            />
            <Voronoi
              points={data.map(d => {
                return [xScale(d.phase) + xScale.bandwidth() / 2, 0]
              })}
              onMouseMove={(e, point) => {
                const x = invertXScale(point.x)
                const d = data.find(datum => datum.phase === x)
                setHint({
                  x: xScale(x) + xScale.bandwidth() / 2,
                  data: +d.count,
                })
              }}
              onMouseLeave={() => {
                setHint(null)
              }}
            />
            {hint && (
              <Hint x1={hint.x} y1={0} x2={hint.x} y2={chartHeight}>
                <div
                  style={{
                    padding: '0.5rem',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '0.5rem',
                  }}
                >
                  Derp {hint.data}
                </div>
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
)(Phase)
