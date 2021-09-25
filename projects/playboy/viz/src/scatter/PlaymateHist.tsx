import React from 'react'
import { hot } from 'react-hot-loader'
import * as d3 from 'd3'

import { ResponsiveSvg, Svg, usePlotContext } from 'vizlib'

import { data } from '../data'
import { Playmate } from '../types'

const getHistFor = (key: keyof Playmate) => {
  const dats = data.map(d => d[key])

  const bins = d3.bin().domain(d3.extent(dats))(data.map(d => d[key]))
  console.log(key, dats, bins)

  return bins
}

const hist = {
  mateAge: getHistFor('mateAge'),
  heightCM: getHistFor('heightCM'),
  weightKG: getHistFor('weightKG'),
  bustCM: getHistFor('bustCM'),
  waistCM: getHistFor('waistCM'),
  hipsCM: getHistFor('hipsCM'),
}

const Viz = ({ pm, hkey }: { pm: Playmate; hkey: keyof typeof hist }) => {
  const ctx = usePlotContext()
  const h = hist[hkey]

  const x = d3
    .scaleLinear()
    .domain([h[0].x0, h[h.length - 1].x1])
    .range([0, ctx.chartWidth])

  const y = d3
    .scaleLinear()
    .domain(d3.extent(h, d => d.length))
    .range([ctx.chartHeight, 0])

  return (
    <>
      <g>
        {h.map(d => (
          <rect
            key={`${d.x0}-${d.x1}`}
            x={x(d.x0)}
            width={x(d.x1) - x(d.x0)}
            y={y(d.length)}
            height={Math.max(1, ctx.chartHeight - y(d.length))}
            fill={d3.schemeTableau10[0]}
          />
        ))}
      </g>
      <line
        x1={x(pm[hkey])}
        x2={x(pm[hkey])}
        y={0}
        y2={ctx.chartHeight}
        stroke={d3.schemeTableau10[1]}
        strokeWidth={3}
      />
    </>
  )
}

const PlaymateHist = ({
  pm,
  hkey,
}: {
  pm: Playmate
  hkey: keyof typeof hist
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '20px',
      }}
    >
      <ResponsiveSvg margin={3}>
        <Viz pm={pm} hkey={hkey} />
      </ResponsiveSvg>
    </div>
  )
}

export default hot(module)(PlaymateHist)
