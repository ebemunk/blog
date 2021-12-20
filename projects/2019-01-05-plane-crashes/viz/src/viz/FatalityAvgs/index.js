import React from 'react'
import { scaleLinear } from 'd3-scale'
import { extent, max } from 'd3-array'
import { line as d3Line } from 'd3-shape'
import { format } from 'd3-format'

import data from '../../data/fatality-averages.csv'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis'
import GridLines from '../../vizlib/GridLines'
import Legend from '../../vizlib/Legend'
import ChartTitle from '../../vizlib/ChartTitle'
import { blueRed, get8 } from '../../vizlib/colors'

import Interaction from './Interaction'

const fmtDec = d => (!(d % 1) ? format(',')(d) : format('.2f')(d))

const OccFat = ({}) => {
  const color = blueRed()

  return (
    <div style={{ position: 'relative' }}>
      <Legend
        data={[
          { title: 'Avg. Occupants', color: color(0) },
          { title: 'Avg. Fatalities', color: color(1) },
        ]}
        style={{ position: 'absolute', left: 36, pointerEvents: 'none' }}
      />
      <FlexPlot
        height={350}
        margin={{ top: 10, left: 35, bottom: 30, right: 10 }}
      >
        {({ chartHeight, chartWidth }) => {
          const x = scaleLinear()
            .domain(extent(data, d => +d.year))
            .range([0, chartWidth])
          const y = scaleLinear()
            .domain([0, max(data, d => +d.occupants)])
            .range([chartHeight, 0])
          const line = d3Line().x(d => x(+d.year))

          return (
            <>
              <GridLines scale={y} orientation="horizontal" />
              <path
                d={line.y(d => y(+d.occupants))(data)}
                style={{ stroke: color(0), strokeWidth: 3, fill: 'none' }}
              />
              <path
                d={line.y(d => y(+d.fatalities))(data)}
                style={{ stroke: color(1), strokeWidth: 3, fill: 'none' }}
              />
              <Axis
                scale={x}
                orientation="bottom"
                title="Year"
                transform={`translate(0, ${chartHeight})`}
                tickFormat={d => d}
              />
              <Axis scale={y} orientation="left" />
              <Interaction
                xScale={x}
                data={data}
                tooltip={d => (
                  <>
                    Year: <strong>{d.year}</strong>
                    <br />
                    Avg. Occupants: <strong>{fmtDec(d.occupants)}</strong>
                    <br />
                    Avg. Fatalities: <strong>{fmtDec(d.fatalities)}</strong>
                  </>
                )}
              />
            </>
          )
        }}
      </FlexPlot>
    </div>
  )
}

const Chance = ({}) => {
  const color = get8()

  return (
    <FlexPlot
      height={350}
      margin={{ top: 10, left: 35, bottom: 30, right: 10 }}
    >
      {({ chartHeight, chartWidth }) => {
        const x = scaleLinear()
          .domain(extent(data, d => +d.year))
          .range([0, chartWidth])
        const y = scaleLinear()
          .domain([0, max(data, d => +d.chance)])
          .range([chartHeight, 0])
        const line = d3Line()
          .x(d => x(+d.year))
          .y(d => y(+d.chance))
        const fmtPct = format('.2p')

        return (
          <>
            <GridLines scale={y} orientation="horizontal" />
            <path
              d={line(data)}
              style={{ stroke: color(6), strokeWidth: 3, fill: 'none' }}
            />
            <Axis
              scale={x}
              orientation="bottom"
              title="Year"
              transform={`translate(0, ${chartHeight})`}
              tickFormat={d => d}
            />
            <Axis
              scale={y}
              orientation="left"
              title="Chance"
              tickFormat={fmtPct}
            />
            <Interaction
              xScale={x}
              data={data}
              tooltip={d => (
                <>
                  Year: <strong>{d.year}</strong>
                  <br />
                  Fatalities per occupant: <strong>{fmtPct(d.chance)}</strong>
                </>
              )}
            />
          </>
        )
      }}
    </FlexPlot>
  )
}

const FatalityAvgs = () => {
  return (
    <div style={{ display: 'flex', minWidth: 750 }}>
      <div style={{ flexBasis: '50%' }}>
        <ChartTitle
          title="Average occupants and fatalities"
          subtitle="While average occupants steadily increase, average fatalities steadily decrease throughout the years, especially after 1974."
          style={{
            marginLeft: '0.5rem',
            marginBottom: '0.5rem',
          }}
        />
        <OccFat />
      </div>
      <div style={{ flexBasis: '50%' }}>
        <ChartTitle
          title="What's the fatalities per occupant?"
          subtitle={
            <>
              Fatalities per occupants expressed as a percentage. Chance
              declines over the years, with sharp decreases after 1945 and 1966.
            </>
          }
          style={{
            marginLeft: '0.5rem',
            marginBottom: '0.5rem',
          }}
        />
        <Chance />
      </div>
    </div>
  )
}

import { hot } from 'react-hot-loader'

export default hot(module)(FatalityAvgs)
