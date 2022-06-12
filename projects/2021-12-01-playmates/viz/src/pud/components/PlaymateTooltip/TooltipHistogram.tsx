import React from 'react'
import { bin, extent, scaleLinear, schemeTableau10 } from 'd3'
import { usePlotContext, Svg } from 'vizlib'

import { data, Playmate } from '../../data/data'
import { PLAYMATE_PINK } from '../../util'

const getHistFor = (key: keyof Playmate) => {
  const dats = data.map(d => +d[key])
  const bins = bin().domain(extent(dats) as [number, number])(dats)
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

export function Viz({ pm, hkey }: { pm: Playmate; hkey: keyof typeof hist }) {
  const ctx = usePlotContext()
  const h = hist[hkey]

  const x = scaleLinear()
    .domain([h[0].x0, h[h.length - 1].x1])
    .range([0, ctx.chartWidth])

  const y = scaleLinear()
    .domain(extent(h, d => d.length))
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
            // fill={PLAYMATE_PINK}
            fill="#888"
          />
        ))}
      </g>
      <line
        x1={x(pm[hkey])}
        x2={x(pm[hkey])}
        y1={-3}
        y2={ctx.chartHeight}
        // stroke="var(--cyan)"
        stroke={PLAYMATE_PINK}
        strokeWidth={2}
      />
    </>
  )
}

export default function PlaymateHist({
  pm,
  hkey,
}: {
  pm: Playmate
  hkey: keyof typeof hist
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Svg width={110} height={20} margin={3}>
        <Viz pm={pm} hkey={hkey} />
      </Svg>
    </div>
  )
}
