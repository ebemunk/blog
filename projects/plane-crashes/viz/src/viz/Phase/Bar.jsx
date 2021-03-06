import React from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import { extent } from 'd3-array'
import { line } from 'd3-shape'

import FlexPlot from '../../vizlib/FlexPlot'
import Rects from '../../vizlib/Rects'
import Axis from '../../vizlib/Axis'
import Path from '../../vizlib/Path'
import Legend from '../../vizlib/Legend'
import { colors8 } from '../../vizlib/colors'

import Interaction from './Interaction'

import rawData from '../../data/phase.csv'

const data = [
  'Standing (STD)',
  'Taxi (TXI)',
  'Takeoff (TOF)',
  'Initial climb (ICL)',
  'En route (ENR)',
  'Approach (APR)',
  'Landing (LDG)',
  'Pushback / towing (PBT)',
  'Maneuvering (MNV)',
  'Unknown (UNK)',
].map(phase => {
  const d = rawData.find(dd => dd.phase === phase)
  return [d.phase, +d.count, +d.avg]
})

const isHighlighted = (stage, d) => {
  switch (stage) {
    case 0:
      return true
    case 1:
      return ['En route (ENR)', 'Approach (APR)', 'Landing (LDG)'].includes(
        d[2],
      )
    case 2:
      return [
        'Standing (STD)',
        'Taxi (TXI)',
        'Pushback / towing (PBT)',
      ].includes(d[2])
    case 3:
      return ['En route (ENR)', 'Approach (APR)'].includes(d[2])
    case 4:
      return ['Landing (LDG)'].includes(d[2])
    case 5:
      return ['Maneuvering (MNV)'].includes(d[2])
  }
}

const Bar = ({ stage }) => (
  <div style={{ position: 'relative' }}>
    <Legend
      style={{
        position: 'absolute',
        left: '2.5rem',
        top: '1.5rem',
      }}
      data={[
        { color: colors8(0), title: 'Crashes' },
        { color: colors8(5), title: 'Avg. Fatalities' },
      ]}
    />
    <FlexPlot
      height={400}
      margin={{
        top: 10,
        left: 35,
        right: 35,
        bottom: 125,
      }}
    >
      {({ chartHeight, chartWidth }) => {
        const xScale = scaleBand()
          .domain([...new Set(data.map(d => d[0]))])
          .range([0, chartWidth])
          .padding(0.2)

        const yScale = scaleLinear()
          .domain(extent(data.map(d => d[1])))
          .range([chartHeight, 0])
          .nice()

        const y2Scale = scaleLinear()
          .domain(extent(data.map(d => d[2])))
          .range([chartHeight, 0])
          .nice()

        return (
          <>
            <Rects
              data={data.map(d => [xScale(d[0]), yScale(d[1]), d[0]])}
              width={xScale.bandwidth()}
              height={d => chartHeight - d[1]}
              keys={d => d[2]}
              style={d => ({
                fill: colors8(0),
                opacity: isHighlighted(stage, d) ? 1 : 0.3,
                transition: 'opacity 300ms',
              })}
            />

            <Path
              generator={line()}
              data={data.map(d => [
                xScale(d[0]) + xScale.bandwidth() / 2,
                y2Scale(d[2]),
              ])}
              style={{
                stroke: colors8(5),
                strokeWidth: 1,
                fill: 'none',
              }}
            />

            {data.map(d => (
              <circle
                key={d}
                r={3}
                cx={xScale(d[0]) + xScale.bandwidth() / 2}
                cy={y2Scale(d[2])}
                style={{
                  fill: colors8(5),
                }}
              />
            ))}

            <Axis
              orientation="left"
              scale={yScale}
              title="Crashes"
              tickArguments={[5]}
            />
            <Axis
              orientation="right"
              scale={y2Scale}
              transform={`translate(${chartWidth}, 0)`}
              title="Avg. Fatalities"
              tickArguments={[8]}
            />
            <Axis
              orientation="bottom"
              scale={xScale}
              transform={`translate(0, ${chartHeight})`}
              tickFormat={d => d.match(/\(([A-Z]+)\)/)[1]}
              title="Phase"
            />

            <Interaction xScale={xScale} data={data} />
          </>
        )
      }}
    </FlexPlot>
  </div>
)

export default React.memo(Bar)
