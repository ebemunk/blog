import React from 'react'
import { scaleLinear } from 'd3-scale'
import { line, curveBasis } from 'd3-shape'

import { PlotContext } from '../../vizlib/Plot'

import Plane from './Plane'

const PhaseDiagram = ({ xScale, hint, height = 100 }) => (
  <PlotContext.Consumer>
    {({ chartHeight, chartWidth }) => {
      const yScale = scaleLinear()
        .domain([0, 4])
        .range([height, 0])

      const domain = xScale.domain()
      const padding = xScale(domain[0])

      const lineGenerator = line().curve(curveBasis)

      const data = [
        [xScale('Standing (STD)') - padding / 2, yScale(0)],
        [
          xScale('Standing (STD)') + xScale.bandwidth() + padding / 2,
          yScale(0),
        ],
        [xScale('Taxi (TXI)') + xScale.bandwidth() + padding / 2, yScale(0)],
        [xScale('Takeoff (TOF)') + xScale.bandwidth() / 2, yScale(1)],
        [xScale('Initial climb (ICL)') + xScale.bandwidth() / 2, yScale(2)],
        [xScale('En route (ENR)') + xScale.bandwidth() / 2, yScale(3)],
        [xScale('Approach (APR)') + xScale.bandwidth() / 2, yScale(2)],
        [xScale('Landing (LDG)') + xScale.bandwidth() / 2, yScale(1)],
        [xScale('Pushback / towing (PBT)') - padding / 2, yScale(0)],
        [
          xScale('Pushback / towing (PBT)') + xScale.bandwidth() + padding / 2,
          yScale(0),
        ],
      ]

      return (
        <React.Fragment>
          <g transform={`translate(0, ${chartHeight + 5})`}>
            <g>
              <line
                x1={xScale('Standing (STD)') - padding / 2}
                y1={0}
                x2={xScale('Standing (STD)') - padding / 2}
                y2={height}
                style={{ stroke: 'white', strokeWidth: 4 }}
              />
              {domain.map(d => (
                <React.Fragment key={d}>
                  <line
                    x1={xScale(d) - padding / 2}
                    y1={0}
                    x2={xScale(d) - padding / 2}
                    y2={height}
                    style={{ stroke: 'white' }}
                  />
                  <line
                    x1={xScale(d) + xScale.bandwidth() + padding / 2}
                    y1={0}
                    x2={xScale(d) + xScale.bandwidth() + padding / 2}
                    y2={height}
                    style={{ stroke: 'white' }}
                  />
                </React.Fragment>
              ))}
              <line
                x1={xScale('Maneuvering (MNV)') - padding / 2}
                y1={0}
                x2={xScale('Maneuvering (MNV)') - padding / 2}
                y2={height}
                style={{ stroke: 'white', strokeWidth: 4 }}
              />
            </g>

            <path
              d={lineGenerator(data)}
              style={{
                stroke: 'red',
                strokeWidth: 3,
                fill: 'none',
              }}
            />

            <Plane
              xScale={xScale}
              yScale={yScale}
              phase={hint ? hint.data[0] : undefined}
            />
          </g>
        </React.Fragment>
      )
    }}
  </PlotContext.Consumer>
)

export default PhaseDiagram
