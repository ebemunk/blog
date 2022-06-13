import {
  area as d3area,
  extent,
  format,
  group,
  interpolateMagma,
  line as d3line,
  max,
  mean,
  range,
  scaleLinear,
  scaleOrdinal,
  scaleSequential,
  schemeReds,
} from 'd3'
import { hexbin } from 'd3-hexbin'
import intersect from 'path-intersection'
import React from 'react'
import { hot } from 'react-hot-loader'
import { uniqBy } from 'remeda'
import { Axis, ResponsiveSvg, usePlotContext } from 'vizlib'
import { data } from '../pud/data/data'
import { cm2in, formatFeetIn, kg2lb, PLAYMATE_PINK } from '../pud/util'
import { Store } from '../store'

// https://www.cdc.gov/obesity/adult/defining.html
const bmiz = group(
  uniqBy(data, d => d.name),
  d => {
    const bmi = (d.weightKG / d.heightCM / d.heightCM) * 10000

    if (bmi < 18.5) return 'Underweight'
    if (bmi < 25) return 'Healthy'
    if (bmi < 30) return 'Overweight'
    if (bmi < 35) return 'Obese (Class 1)'
    if (bmi < 40) return 'Obese (Class 2)'
    return 'Obese (Class 3 - Severe)'
  },
)

const bmi = (weight, height) => (weight / height / height) * 10000 // [weight (kg) / height (cm) / height (cm)] x 10,000
const invertBmiY = (units, weight, bmi) =>
  units === 'metric'
    ? Math.sqrt((10000 * weight) / bmi)
    : Math.sqrt((703 * weight) / bmi)

const invertBmiX = (height, bmi) => (bmi * height * height) / 10000

const BMITick = ({
  bmi,
  xScale,
  yScale,
  stroke = 'gray',
  strokeWidth = 1,
  children = null,
}) => {
  const ctx = usePlotContext()
  const units = Store.useState(s => s.units)

  const line = d3line()

  const wtf = xScale
    .ticks(800)
    .map(d => [
      xScale(d),
      Math.min(ctx.chartHeight, yScale(invertBmiY(units, d, bmi))),
    ])
    .filter(d => d[1] > 0 && d[1] < ctx.chartHeight)

  const intx = intersect(
    d3line()([
      [0, 0],
      [ctx.chartWidth, ctx.chartHeight],
    ]),
    line(wtf),
  )

  return (
    <g key={bmi}>
      <path
        d={line(wtf)}
        key={bmi}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
        id={`bmi-${bmi}`}
      />
      {bmi % 5 === 0 && intx.length && (
        <text
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={12}
          x={intx[0].x}
          y={intx[0].y}
          style={{ stroke: 'white', strokeWidth: 3, paintOrder: 'stroke' }}
        >
          {bmi}
        </text>
      )}
      {children}
    </g>
  )
}

const bmiRanges = [
  {
    min: 0.1,
    max: 18.499,
    label: 'Underweight',
  },
  {
    min: 18.5,
    max: 24.999,
    label: 'Healthy',
  },
  {
    min: 25,
    max: 29.999,
    label: 'Overweight',
  },
  {
    min: 30,
    max: 34.999,
    label: 'Obese (Class 1)',
  },
  {
    min: 35,
    max: 39.999,
    label: 'Obese (Class 2)',
  },
  {
    min: 40,
    max: 100,
    label: 'Obese (Class 3 - Severe)',
  },
] as const

const bmiColors = scaleOrdinal(schemeReds[6]).domain([
  'Underweight',
  'Healthy',
  'Overweight',
  'Obese (Class 1)',
  'Obese (Class 2)',
  'Obese (Class 3 - Severe)',
])

const Viz = ({}) => {
  const ctx = usePlotContext()

  const units = Store.useState(s => s.units)
  const Aweight = d => (units === 'metric' ? d.weightKG : kg2lb(d.weightKG))
  const Aheight = d => (units === 'metric' ? d.heightCM : cm2in(d.heightCM))

  const xScale = scaleLinear()
    .domain(extent(data, Aweight))
    .range([0, ctx.chartWidth])
    .nice()

  const yScale = scaleLinear()
    .domain(extent(data, Aheight))
    .range([ctx.chartHeight, 0])
    .nice()

  const hex = hexbin()
    .x(d => d.cx)
    .y(d => d.cy)
    .radius(7)
    .extent([
      [0, 0],
      [ctx.chartWidth, ctx.chartHeight],
    ])

  const bins = hex(
    data.map(d => ({
      cx: xScale(Aweight(d)),
      cy: yScale(Aheight(d)),
      datum: d,
      fill: 'black',
    })),
  )

  const colors = scaleSequential(interpolateMagma).domain([
    0,
    max(bins, d => d.length) / 2,
  ])

  return (
    <>
      <g className="bmiRanges">
        {bmiRanges.map(bmiRange => {
          const area = d3area<number[]>()
            .x(d => d[0])
            .y0(d => d[1])
            .y1(d => d[2])

          const d = area(
            range(xScale.domain()[0], xScale.domain()[1] + 1, 0.5).map(d => [
              Math.min(ctx.chartWidth, xScale(d)),
              Math.max(
                0,
                Math.min(
                  ctx.chartHeight,
                  yScale(invertBmiY(units, d, bmiRange.min)),
                ),
              ),
              Math.max(
                0,
                Math.min(
                  ctx.chartHeight,
                  yScale(invertBmiY(units, d, bmiRange.max)),
                ),
              ),
            ]),
          )

          return (
            <g key={bmiRange.label}>
              <path
                d={d}
                fill={bmiColors(bmiRange.label)}
                stroke={bmiColors(bmiRange.label)}
              />
            </g>
          )
        })}
      </g>

      <g className="bmiTicks">
        {range(10, units !== 'metric' ? 50 : 47, 1).map(bmi => (
          <BMITick bmi={bmi} xScale={xScale} yScale={yScale} key={bmi} />
        ))}
      </g>

      <BMITick
        bmi={28.3}
        xScale={xScale}
        yScale={yScale}
        stroke="yellow"
        strokeWidth={3}
      >
        <text
          dy={-4}
          fontSize={12}
          fill="yellow"
          x={ctx.chartHeight + 60}
          textAnchor="end"
          stroke={bmiColors('Overweight')}
          strokeWidth={3}
          paintOrder="stroke"
        >
          <textPath xlinkHref="#bmi-28.3">
            Average for US Women 2015-2018
          </textPath>
        </text>
      </BMITick>
      <BMITick
        bmi={mean(data, d => bmi(d.weightKG, d.heightCM))}
        xScale={xScale}
        yScale={yScale}
        stroke={PLAYMATE_PINK}
        strokeWidth={3}
      >
        <text
          dy={-4}
          fontSize={12}
          fill={PLAYMATE_PINK}
          x={ctx.chartHeight + 60}
          textAnchor="end"
          stroke={bmiColors('Underweight')}
          strokeWidth={3}
          paintOrder="stroke"
        >
          <textPath
            xlinkHref={`#bmi-${mean(data, d => bmi(d.weightKG, d.heightCM))}`}
          >
            Average for Playmates
          </textPath>
        </text>
      </BMITick>

      {bins.map((bin, i) => (
        <path
          key={i}
          d={hex.hexagon()}
          transform={`translate(${bin.x},${bin.y})`}
          fill={colors(bin.length)}
          stroke="black"
          strokeWidth={0.2}
        />
      ))}

      <Axis
        scale={xScale}
        orientation="bottom"
        transform={`translate(0,${ctx.chartHeight})`}
      >
        <text
          x={xScale((xScale.domain()[1] + xScale.domain()[0]) / 2)}
          fill="white"
          dy={30}
          textAnchor="middle"
          fontSize={12}
        >
          Weight {units === 'metric' ? '(kg)' : '(lbs)'}
        </text>
      </Axis>
      <Axis
        scale={yScale}
        orientation="left"
        {...(units !== 'metric'
          ? {
              tickFormat: formatFeetIn,
            }
          : {})}
      >
        <text
          fill="white"
          transform={`translate(-33,${yScale(
            (yScale.domain()[1] + yScale.domain()[0]) / 2,
          )}) rotate(-90)`}
          textAnchor="middle"
          fontSize={12}
        >
          Height {units === 'metric' ? '(cm)' : '(ft.in.)'}
        </text>
      </Axis>
    </>
  )
}

const BMI = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center',
        width: '100vw',
        maxWidth: '960px',
        margin: 'auto',
        marginBottom: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {bmiRanges.map(d => (
          <div
            key={d.label}
            style={{
              display: 'flex',
              marginRight: '0.75rem',
              fontSize: 12,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                height: '1rem',
                width: '1rem',
                marginRight: '0.25rem',
                background: bmiColors(d.label),
              }}
            />
            <div>{d.label}</div>
          </div>
        ))}
      </div>
      <ResponsiveSvg
        margin={{ top: 10, left: 45, bottom: 40, right: 10 }}
        aspectRatio={1.68}
      >
        <Viz />
      </ResponsiveSvg>

      <div
        style={{
          display: 'flex',
          width: '100vw',
          maxWidth: 'calc(960px - 45px - 10px)',
          marginLeft: '45px',
        }}
      >
        {bmiRanges.map(k => (
          <div
            key={k.label}
            data-key={k.label}
            style={{
              background: bmiColors(k.label),
              width: `${((bmiz.get(k.label)?.length ?? 0) / 806) * 100}%`,
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {bmiz.get(k.label)?.length > 1 && (
              <span
                style={{
                  color: 'black',
                  fontSize: '0.8rem',
                }}
              >
                {format('.2p')((bmiz.get(k.label)?.length ?? 0) / 806)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default hot(module)(BMI)
