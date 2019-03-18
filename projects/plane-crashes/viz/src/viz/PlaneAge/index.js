import React from 'react'

import { scaleBand, scaleLinear } from 'd3-scale'
import { randomUniform } from 'd3-random'
import { max } from 'd3-array'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis'
import GridLines from '../../vizlib/GridLines'

import dataz from '../../data/plane-age.json'
const data = dataz
  .slice(0, 20)
  .map(d => ({ ...d, mean: mean(d.ages) }))
  .sort((a, b) => b.mean - a.mean)

import { extent, mean } from 'd3-array'
import { area as d3Area, curveBasis } from 'd3-shape'

function kernelDensityEstimator(kernel, X) {
  return function(V) {
    return X.map(function(x) {
      return [
        x,
        mean(V, function(v) {
          return kernel(x - v)
        }),
      ]
    })
  }
}

function kernelEpanechnikov(k) {
  return function(v) {
    return Math.abs((v /= k)) <= 1 ? (0.75 * (1 - v * v)) / k : 0
  }
}

const Violin = ({ data, bandwidth, chartHeight, yDomain }) => {
  const x = scaleLinear()
    .domain(yDomain)
    .range([chartHeight, 0])
  const kde = kernelDensityEstimator(kernelEpanechnikov(1), x.ticks(100))(data)
  const y = scaleLinear()
    .domain(extent(kde, d => d[1]))
    .range([bandwidth / 2, 0])
  const area = d3Area()
    .x0(d => y(d[1]))
    .x1(d => bandwidth - y(d[1]))
    .y(d => x(d[0]))
    .curve(curveBasis)

  return (
    <g>
      <path
        d={area(kde)}
        style={{ fill: 'rgba(128,128,128,0.5)', stroke: 'none' }}
      />
      <path d={area.lineX0()(kde)} style={{ fill: 'none', stroke: 'white' }} />
      <path d={area.lineX1()(kde)} style={{ fill: 'none', stroke: 'white' }} />
    </g>
  )
}

const PlaneAge = ({}) => {
  return (
    <React.Fragment>
      <FlexPlot
        height={500}
        margin={{ top: 20, left: 20, right: 20, bottom: 20 }}
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
            <React.Fragment>
              <GridLines orientation="horizontal" scale={y} />
              <Axis
                scale={x}
                orientation="bottom"
                transform={`translate(0, ${chartHeight})`}
              />
              <Axis scale={y} orientation="left" title="Years in service" />
              {data.map(d => (
                <g key={d.type} transform={`translate(${x(d.type)}, 0)`}>
                  <Violin
                    data={d.ages}
                    bandwidth={x.bandwidth()}
                    chartHeight={chartHeight}
                    yDomain={y.domain()}
                  />
                  <line
                    x1={0}
                    y1={y(d.mean)}
                    x2={x.bandwidth()}
                    y2={y(d.mean)}
                    style={{
                      fill: 'none',
                      stroke: 'yellow',
                      strokeWidth: 3,
                    }}
                  />
                </g>
              ))}
            </React.Fragment>
          )
        }}
      </FlexPlot>
    </React.Fragment>
  )
}

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  React.memo,
)(PlaneAge)
