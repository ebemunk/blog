import React from 'react'
import {
  scaleLinear,
  scalePow,
  scaleLog,
  scaleIdentity,
  scaleTime,
  // @ts-ignore wrong defintions on @types/d3-scale
  scaleRadial,
  scaleBand,
  scalePoint,
  scaleSequential,
} from 'd3-scale'
import { interpolateRainbow } from 'd3-scale-chromatic'

import { withKnobs, select, boolean, number } from '@storybook/addon-knobs'

import { Axis } from './Axis'
import Plot from './Plot'
import usePlotContext from './usePlotContext'

export default {
  title: 'Axis',
  component: Axis,
  decorators: [withKnobs],
}

export const linear = () => {
  const orientation = select(
    'orientation',
    ['top', 'right', 'bottom', 'left'],
    'bottom',
  )
  const horizontal = ['top', 'bottom'].includes(orientation)
  const showDomain = boolean('showDomain', true)
  const markLength = number('markLength', 3)
  const tickFontSize = number('tickFontSize', 12)

  const Story = () => {
    const context = usePlotContext()

    const scale = scaleLinear().domain([0, 10])
    // .range(horizontal ? [0, context.chartWidth] : [context.chartHeight, 0])
    // .range([context.chartHeight, 0])
    // .range([0, context.chartHeight])
    // .range([0, context.chartWidth])
    // .range([context.chartWidth, 0])

    return (
      <>
        <Axis
          scale={scale
            .copy()
            .range(
              horizontal ? [context.chartWidth, 0] : [context.chartHeight, 0],
            )}
          orientation={orientation}
          showDomain={showDomain}
          markLength={markLength}
          tickFontSize={tickFontSize}
          animate
        />
        <Axis
          scale={scale
            .copy()
            .range(
              horizontal ? [0, context.chartWidth] : [0, context.chartHeight],
            )}
          orientation={orientation}
          showDomain={showDomain}
          markLength={markLength}
          tickFontSize={tickFontSize}
          animate
          transform={horizontal ? 'translate(0,70)' : 'translate(70,0)'}
        />
      </>
    )
  }

  return (
    <>
      <Plot
        height={horizontal ? 120 : 600}
        width={horizontal ? 600 : 120}
        margin={{ right: 20, left: 20, top: 20, bottom: 20 }}
      >
        <Story />
      </Plot>
    </>
  )
}

export const allOrientations = () => {
  const showDomain = boolean('showDomain', true)
  const markLength = number('markLength', 3)
  const tickFontSize = number('tickFontSize', 12)

  const Story = () => {
    const context = usePlotContext()

    const scaleX = scaleLinear().domain([0, 10]).range([0, context.chartWidth])
    const scaleY = scaleLinear().domain([0, 10]).range([context.chartHeight, 0])

    return (
      <>
        <Axis
          scale={scaleX}
          orientation="top"
          showDomain={showDomain}
          markLength={markLength}
          tickFontSize={tickFontSize}
        />
        <Axis
          scale={scaleY}
          orientation="right"
          showDomain={showDomain}
          markLength={markLength}
          tickFontSize={tickFontSize}
          transform={`translate(${context.chartWidth},0)`}
        />
        <Axis
          scale={scaleX}
          orientation="bottom"
          showDomain={showDomain}
          markLength={markLength}
          tickFontSize={tickFontSize}
          transform={`translate(0,${context.chartHeight})`}
        />
        <Axis
          scale={scaleY}
          orientation="left"
          showDomain={showDomain}
          markLength={markLength}
          tickFontSize={tickFontSize}
        />
      </>
    )
  }

  return (
    <>
      <Plot
        height={600}
        width={600}
        margin={{ right: 20, left: 20, top: 20, bottom: 20 }}
      >
        <Story />
      </Plot>
    </>
  )
}

export const customizations = () => {
  const Story = () => {
    const context = usePlotContext()

    const scale = scaleLinear().domain([0, 10]).range([0, context.chartWidth])
    const color = scaleSequential(interpolateRainbow).domain([0, 10])

    return (
      <Axis
        scale={scale}
        orientation="bottom"
        showDomain
        domainProps={{
          style: {
            stroke: 'red',
            strokeWidth: 3,
            strokeDasharray: '5 5',
          },
        }}
        tickFontSize={20}
        tickFormat={(tick: number) => `it's ${tick}`}
        tickProps={(tick: number) => ({
          style: {
            stroke: color(tick),
          },
          dy: 20,
        })}
        markLength={20}
        markProps={(tick: number) => ({
          style: {
            stroke: color(10 - tick),
            strokeWidth: 7,
          },
        })}
      />
    )
  }

  return (
    <>
      <Plot
        height={60}
        width={600}
        margin={{ right: 30, left: 30, top: 20, bottom: 20 }}
      >
        <Story />
      </Plot>
    </>
  )
}

export const allScales = () => {
  const orientation = select(
    'orientation',
    ['top', 'right', 'bottom', 'left'],
    'bottom',
  )
  const showDomain = boolean('showDomain', true)
  const markLength = number('markLength', 3)
  const tickFontSize = number('tickFontSize', 12)

  const horizontal = ['top', 'bottom'].includes(orientation)

  const chartHeight = horizontal ? 60 : 600
  const chartWidth = horizontal ? 600 : 60

  const range: [number, number] = horizontal
    ? [0, chartWidth - 30]
    : [chartHeight - 30, 0]

  const linear = scaleLinear().domain([0, 100]).range(range)
  const power = scalePow().exponent(2).domain([0, 100]).range(range)
  const log = scaleLog().base(10).domain([1, 1000]).range(range)
  const identity = scaleIdentity().range(range)
  const time = scaleTime()
    .domain([new Date(0), new Date()])
    .range(range)
  const radial = scaleRadial(
    [0, 1],
    horizontal ? [0, chartWidth - 30] : [chartHeight - 30, 0],
  )

  const band = scaleBand()
    .domain(['apple', 'banana', 'kiwi', 'pear', 'melon'])
    .rangeRound(range)
  const point = scalePoint()
    .domain(['x1', 'y1', 'z1', 'x2', 'y2', 'z3'])
    .rangeRound(range)

  const scales = [
    {
      name: 'Continuous Scales',
      scales: [
        { name: 'Linear', scale: linear },
        { name: 'Power', scale: power },
        { name: 'Log', scale: log },
        { name: 'Identity', scale: identity },
        { name: 'Time', scale: time },
        { name: 'Radial', scale: radial },
      ],
    },
    {
      name: 'Ordinal Scales',
      scales: [
        { name: 'Band', scale: band },
        { name: 'Point', scale: point },
      ],
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: horizontal ? 'column' : 'row',
      }}
    >
      {scales.map((group, i) => (
        <div
          key={i}
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: horizontal ? 'column' : 'row',
          }}
        >
          <div style={{ fontWeight: 'bold' }}>{group.name}</div>
          {group.scales.map((type, ii) => (
            <div style={{ margin: '0.5rem' }}>
              <div>{type.name}</div>
              <Plot
                key={ii}
                width={chartWidth}
                height={chartHeight}
                margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
              >
                <Axis
                  scale={type.scale}
                  orientation={orientation}
                  showDomain={showDomain}
                  markLength={markLength}
                  tickFontSize={tickFontSize}
                  transform={horizontal ? `translate(0,10)` : `translate(10,0)`}
                />
              </Plot>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
