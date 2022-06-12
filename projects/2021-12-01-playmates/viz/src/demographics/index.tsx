import React from 'react'
import * as d3 from 'd3'

import { ResponsiveSvg, Svg, usePlotContext } from 'vizlib'

// from https://web.archive.org/web/20041019143228/https://www.playboy.com/mediakit/print_demographics.html
const gender = [
  [
    { label: 'Male', value: 0.85 },
    { label: 'Female', value: 0.15 },
  ],
  [
    { label: 'Male', value: 0.86 },
    { label: 'Female', value: 0.14 },
  ],
]

const age = [
  [
    { label: '18-34', value: 0.55 },
    { label: '35+', value: 0.45 },
  ],
  [
    { label: '18-34', value: 0.52 },
    { label: '35+', value: 0.48 },
  ],
]
const medianAge = [33, 33.1]

const householdIncome = [
  [
    { label: '$50,000+', value: 0.53 },
    { label: '$75,000+', value: 0.31 },
    { label: '$100,000+', value: 0.19 },
  ],
  [
    { label: '$50,000+', value: 0.57 },
    { label: '$75,000+', value: 0.35 },
    { label: '$100,000+', value: 0.2 },
  ],
]
const medianHouseholdIncome = [53_070, 57_427]

const education = [
  [
    { label: 'College+', value: 0.17 },
    { label: 'No college', value: 0.83 },
  ],
  [
    { label: 'College+', value: 0.42 },
    { label: 'No college', value: 0.58 },
  ],
]

const marriage = [
  [
    { label: 'Single', value: 0.63 },
    { label: 'Married', value: 0.37 },
  ],
  [
    { label: 'Single', value: 0.51 },
    { label: 'Married', value: 0.49 },
  ],
]

const employment = [
  [
    { label: 'Full Time', value: 0.64 },
    { label: 'Professional/Mgr.', value: 0.13 },
    { label: 'Student', value: 0.13 },
  ],
  [
    { label: 'Full Time', value: 0.68 },
    { label: 'Professional/Mgr.', value: 0.25 },
    { label: 'Student', value: 0.11 },
  ],
]

const color = d3.scaleOrdinal(d3.schemeTableau10).domain(
  [gender, age, education, marriage, employment, householdIncome]
    .map(d => d[0])
    .flat()
    .map(d => d.label),
)

const Pie = ({ data, title, subtitle = '' }) => {
  const ctx = usePlotContext()

  const arcsPrint = d3
    .pie<{ label: string; value: number }>()
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .padAngle(0.005)
    .sort(null)
    .value(d => d.value)(data[0])

  const arcsOnline = d3
    .pie<{ label: string; value: number }>()
    .startAngle(Math.PI / 2)
    .endAngle(-Math.PI / 2)
    .padAngle(0.005)
    .sort(null)
    .value(d => d.value)(data[1])

  const arc = d3
    .arc()
    .innerRadius(ctx.chartWidth / 3)
    .outerRadius(ctx.chartWidth / 2)

  const radiusWidth = ctx.chartWidth / 2 - ctx.chartWidth / 3

  return (
    <>
      <g transform={`translate(${ctx.chartWidth / 2},${ctx.chartHeight / 2})`}>
        {arcsPrint.map(d => (
          <g key={d.data.label}>
            {/*@ts-ignore*/}
            <path d={arc(d)} fill={color(d.data.label)} />
            <text
              //@ts-ignore
              transform={`translate(${arc.centroid(d)})`}
              textAnchor="middle"
              dominantBaseline="hanging"
              fill="white"
              fontSize={13}
            >
              <tspan x={0} fontWeight={700}>
                {d.data.label}
              </tspan>
              <tspan x={0} dy={-20}>
                {d3.format('.2p')(d.data.value)}
              </tspan>
            </text>
          </g>
        ))}
        {arcsOnline.map(d => (
          <g key={d.data.label} transform={`rotate(180) translate(0,-10)`}>
            {/*@ts-ignore*/}
            <path d={arc(d)} fill={color(d.data.label)} />
            <text
              transform={`rotate(180,${arc
                //@ts-ignore
                .centroid(d)
                //@ts-ignore
                .join(',')}) translate(${arc.centroid(d)})`}
              textAnchor="middle"
              dominantBaseline="hanging"
              fill="white"
              fontSize={13}
            >
              <tspan x={0} fontWeight={700}>
                {d.data.label}
              </tspan>
              <tspan x={0} dy={-20}>
                {d3.format('.2p')(d.data.value)}
              </tspan>
            </text>
          </g>
        ))}
        <line
          x1={-ctx.chartWidth}
          x2={ctx.chartWidth}
          y1={5}
          y2={5}
          stroke="white"
          strokeWidth={3}
        />
        <text
          textAnchor="middle"
          alignmentBaseline="middle"
          dy={5}
          fill="white"
          fontSize={18}
          fontWeight={700}
          stroke="#282c34"
          strokeWidth={10}
          paintOrder="stroke"
        >
          {title}
        </text>
        {['Print', 'Online'].map((d, i) => (
          <text
            key={d}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="white"
            fontSize={16}
            fontWeight={600}
            // y={i === 0 ? -20 : 25}
            y={i === 0 ? 5 - ctx.chartHeight / 4 : ctx.chartHeight / 4 + 5}
            // y={
            //   i === 0
            //     ? -(ctx.chartWidth / 2) + radiusWidth + 5 + 20
            //     : ctx.chartWidth / 2 - radiusWidth + 5 - 20
            // }
          >
            {d}
          </text>
        ))}
      </g>
    </>
  )
}

const useStyles = createUseStyles({
  wrap: {
    display: 'flex',
    maxWidth: '960px',
    width: '100vw',
    flexWrap: 'wrap',
    margin: 'auto',
    marginBottom: '1rem',
    justifyContent: 'center',

    '& svg': {
      margin: '0.5rem',
    },
  },
})

const DemographicsPrint = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrap}>
      <Svg width={300} height={320}>
        <Pie data={gender} title="Gender" />
      </Svg>
      <Svg width={300} height={320}>
        <Pie data={age} title="Age" subtitle={`Median Age: ${medianAge[0]}`} />
      </Svg>
      <Svg width={300} height={320}>
        <Pie data={education} title="Education" />
      </Svg>
      <Svg width={300} height={320}>
        <Pie data={marriage} title="Marital Status" />
      </Svg>
      <Svg width={300} height={320}>
        <Pie data={employment} title="Employment Status" />
      </Svg>
      <Svg width={300} height={320}>
        <Pie
          data={householdIncome}
          title="Household Income"
          subtitle={`Median Income: ${d3.format('($,.0f')(
            medianHouseholdIncome[0],
          )}`}
        />
      </Svg>
    </div>
  )
}

import { hot } from 'react-hot-loader'
import { createUseStyles } from 'react-jss'
export default hot(module)(DemographicsPrint)
