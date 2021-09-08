import React from 'react'
import { hot } from 'react-hot-loader'
import { KMeans } from 'ml'
import * as d3 from 'd3'

import { data } from '../data'
import { Axis, ResponsiveSvg, usePlotContext } from 'vizlib'

const NUM_CLUSTERS = 4

const normalizer = accessor =>
  d3
    .scaleLinear()
    .domain(d3.extent(data, accessor) as [number, number])
    .range([0, 1])

// const normalizer = accessor => {
//   const mean = d3.mean(data, accessor)
//   const std = Math.sqrt(d3.variance(data, accessor))
//   return d => (d - mean) / std
// }

const normalizedData = data.map(d => [
  normalizer(d => d.bustCM)(d.bustCM),
  normalizer(d => d.waistCM)(d.waistCM),
  normalizer(d => d.hipsCM)(d.hipsCM),
  normalizer(d => d.heightCM)(d.heightCM),
  // normalizer(d => d.weightKG)(d.weightKG),
  normalizer(d => d.mateAge)(d.mateAge),
])

const clusters = KMeans(normalizedData, NUM_CLUSTERS, {
  seed: 6,
  tolerance: 1e-10,
})

const dadz = data.map((d, i) => ({
  ...d,
  cluster: clusters.clusters[i],
}))

const colors = d3.scaleOrdinal(d3.schemeTableau10)

const Viz = () => {
  const ctx = usePlotContext()
  const yScale = d3.scaleLinear().domain([0, 1]).range([ctx.chartHeight, 0])

  const getYScale = accessor =>
    d3
      .scaleLinear()
      .domain(d3.extent(data, accessor))
      .range([ctx.chartHeight, 0])

  const clusterBand = d3
    .scaleBand()
    .domain(d3.range(NUM_CLUSTERS).map(String))
    .range([0, ctx.chartWidth])
    .padding(0.2)
  const featureBand = d3
    .scaleBand()
    .domain(d3.range(normalizedData[0].length).map(String))
    .range([0, clusterBand.bandwidth()])

  return (
    <>
      <Axis
        scale={clusterBand}
        orientation="top"
        transform="translate(0,-10)"
        tickFormat={d => `Cluster ${+d + 1}`}
      />
      <Axis
        scale={yScale}
        orientation="left"
        tickFormat={d => d3.format('.0p')(d)}
      >
        <text
          y={ctx.chartHeight + 12}
          x={10}
          dominantBaseline="hanging"
          fill="white"
        >
          Percentile
        </text>
      </Axis>
      <g>
        {dadz.map(d => (
          <React.Fragment key={`${d.name}-${d.month}-${d.year}`}>
            {[
              d => d.bustCM,
              d => d.waistCM,
              d => d.hipsCM,
              d => d.heightCM,
              // d => d.weightKG,
              d => d.mateAge,
            ].map((accessor, i) => (
              <rect
                key={i}
                x={
                  clusterBand(d.cluster.toString()) + featureBand(i.toString())
                }
                y={getYScale(accessor)(accessor(d)) - 1}
                height={2}
                width={featureBand.bandwidth()}
                fill={colors(i)}
                opacity={0.05}
              />
            ))}
          </React.Fragment>
        ))}
      </g>
    </>
  )
}

const Clusters = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'center',
          maxWidth: '900px',
          margin: 'auto',
          flexDirection: 'column',
          marginBottom: '1rem',
        }}
      >
        <ResponsiveSvg
          maxWidth={900}
          margin={{ top: 40, left: 40, bottom: 5 }}
          aspectRatio={4.5}
        >
          <Viz />
        </ResponsiveSvg>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {[
            'Bust',
            'Waist',
            'Hips',
            'Height',
            // 'Weight',
            'Age',
          ].map((d, i) => (
            <div
              key={d}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '0.5rem',
                fontSize: 12,
              }}
            >
              <div
                style={{
                  height: '1rem',
                  width: '1rem',
                  background: colors(i),
                  marginRight: '0.25rem',
                }}
              />
              {d}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default hot(module)(Clusters)
