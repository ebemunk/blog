import React, { useContext } from 'react'

import { extent, mean } from 'd3-array'
import { area as d3Area, curveBasis } from 'd3-shape'
import { scaleLinear } from 'd3-scale'

import { PlotContext } from '../../vizlib/Plot'

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

const Violin = ({ data, bandwidth, yDomain }) => {
  const { chartHeight } = useContext(PlotContext)

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

export default React.memo(Violin)
