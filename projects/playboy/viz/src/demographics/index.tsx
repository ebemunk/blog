import React from 'react'
import * as d3 from 'd3'

import { ResponsiveSvg, Svg, usePlotContext } from 'vizlib'

// from https://web.archive.org/web/20041019143228/https://www.playboy.com/mediakit/print_demographics.html
const gender = [
  { label: 'Male', value: 0.85 },
  { label: 'Female', value: 0.15 },
]

const age = [
  { label: '18-34', value: 0.55 },
  { label: '35+', value: 0.45 },
]
const medianAge = 33

const householdIncome = [
  { label: '$50,000+', value: 0.53 },
  { label: '$75,000+', value: 0.31 },
  { label: '$100,000+', value: 0.19 },
]
const medianHouseholdIncome = 53_070

const education = [
  { label: 'College+', value: 0.17 },
  { label: 'No college', value: 0.83 },
]

const marriage = [
  { label: 'Single', value: 0.63 },
  { label: 'Married', value: 0.37 },
]

const employment = [
  { label: 'Full Time', value: 0.64 },
  { label: 'Professional/Mgr.', value: 0.13 },
  { label: 'Student', value: 0.13 },
]

const color = d3
  .scaleOrdinal(d3.schemeTableau10)
  .domain(
    [gender, age, education, marriage, employment, householdIncome]
      .flat()
      .map(d => d.label),
  )

const Pie = ({ data, title, subtitle = '' }) => {
  const ctx = usePlotContext()

  const arcs = d3
    .pie<{ label: string; value: number }>()
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .padAngle(0.005)
    .sort(null)
    .value(d => d.value)(data)

  const arc = d3
    .arc()
    .innerRadius(ctx.chartWidth / 3)
    .outerRadius(ctx.chartWidth / 2)

  return (
    <>
      <g transform={`translate(${ctx.chartWidth / 2},${ctx.chartWidth / 2})`}>
        {arcs.map(d => (
          <g key={d.data.label}>
            <path d={arc(d)} fill={color(d.data.label)} />
            <text
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
        <text
          textAnchor="middle"
          dy={-ctx.chartWidth / 8}
          fill="white"
          fontSize={18}
          fontWeight={700}
        >
          {title}
        </text>
        <text
          textAnchor="middle"
          dy={-ctx.chartWidth / 8 + 20}
          fill="white"
          fontSize={14}
        >
          {subtitle}
        </text>
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
      <Svg width={300} height={150}>
        <Pie data={gender} title="Gender" />
      </Svg>
      <Svg width={300} height={150}>
        <Pie data={age} title="Age" subtitle={`Median Age: ${medianAge}`} />
      </Svg>
      <Svg width={300} height={150}>
        <Pie data={education} title="Education" />
      </Svg>
      <Svg width={300} height={150}>
        <Pie data={marriage} title="Marital Status" />
      </Svg>
      <Svg width={300} height={150}>
        <Pie data={employment} title="Employment Status" />
      </Svg>
      <Svg width={300} height={150}>
        <Pie
          data={householdIncome}
          title="Household Income"
          subtitle={`Median Income: ${d3.format('($,.0f')(
            medianHouseholdIncome,
          )}`}
        />
      </Svg>
    </div>
  )
}

import { hot } from 'react-hot-loader'
import { createUseStyles } from 'react-jss'
export default hot(module)(DemographicsPrint)
