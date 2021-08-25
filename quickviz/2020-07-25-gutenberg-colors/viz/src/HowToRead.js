import React from 'react'

import { usePlotContext, Plot } from 'vizlib'
import { scaleLinear } from 'd3-scale'
import { arc as d3arc, pie as d3pie, line as d3line } from 'd3-shape'

import { Viz1 } from './Viz'

import data from './data.json'

const LText = ({ children, ...rest }) => (
  <text
    style={{
      fill: 'white',
      fontSize: '12px',
    }}
    {...rest}
  >
    {children}
  </text>
)

const Custom = ({ book }) => {
  const { chartHeight, chartWidth } = usePlotContext()
  const arc = d3arc()
    .innerRadius(chartHeight / 4)
    .outerRadius(chartHeight / 2)

  const pieArc = d3arc()
    .innerRadius(chartHeight / 8 - 10)
    .outerRadius(chartHeight / 4 - 10)
    .cornerRadius(10)
    .padAngle(0.03)

  const data = Object.keys(book.colormap)
    .filter(key => book.colormap[key].length > 0)
    .map(key => ({
      color: key.replace(/\s/gi, ''),
      count: book.colormap[key].length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)

  const pie = d3pie().value(d => d.count)(data)

  let [goldX, goldY] = pieArc.centroid(pie[1])
  goldX += chartWidth / 2
  goldY += chartHeight / 2

  return (
    <g>
      <line
        x1={chartWidth / 2}
        y1={-20}
        x2={chartWidth / 2}
        y2={chartHeight / 4}
        style={{ stroke: 'white', strokeWidth: 2 }}
      />
      <LText dx={5} dy={-10}>
        <textPath alignmentBaseline="baseline" xlinkHref="#curve">
          Book reads clockwise →
        </textPath>
      </LText>

      <path
        d={arc({
          startAngle: 0,
          endAngle: Math.PI * 2,
        })}
        style={{
          fill: 'transparent',
        }}
        id="curve"
        transform={`translate(${chartWidth / 2}, ${chartHeight / 2})`}
      />

      <line
        x1={chartWidth / 2 + 120}
        y1={chartHeight / 2 - 26}
        x2={chartWidth / 2 + 160}
        y2={chartHeight / 2 - 26}
        style={{ stroke: 'white' }}
        markerEnd="url(#end)"
      />
      <LText
        x={chartWidth / 2 + 160}
        y={chartHeight / 2 - 26}
        dx={8}
        alignmentBaseline="central"
      >
        Color mentions
      </LText>

      <line
        x1={goldX}
        y1={goldY}
        x2={chartWidth / 2 + 160}
        y2={goldY + 35}
        style={{ stroke: 'white' }}
        markerEnd="url(#end)"
      />
      <LText
        x={chartWidth / 2 + 160}
        y={goldY + 35}
        dx={8}
        alignmentBaseline="central"
      >
        Ratio of top 5 colors
      </LText>
    </g>
  )
}

export default function HowToRead() {
  return (
    <div
      style={{
        width: '550px',
        marginBottom: '60px',
        // marginLeft: '30px',
      }}
    >
      <div
        style={{
          textAlign: 'left',
          color: 'white',
          fontSize: '16px',
          fontFamily: '"Roboto Condensed"',
          fontWeight: 600,
        }}
      >
        How to read:
      </div>
      <Plot
        margin={{ top: 20, bottom: 10, left: 10, right: 250 }}
        style={{
          shapeRendering: 'geometricPrecision',
        }}
        height={310}
        width={550}
      >
        <defs>
          <filter id="grayscale">
            <feColorMatrix
              type="matrix"
              values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
            />
          </filter>

          <marker
            id="end"
            viewBox="0 -5 10 10"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M0,-5L10,0L0,5"
              style={{
                fill: 'white',
              }}
            />
          </marker>
        </defs>
        <Viz1
          book={data[8]}
          filter="url(#grayscale)"
          style={{ opacity: 0.6 }}
        />
        <Custom book={data[8]} />
      </Plot>
    </div>
  )
}
