import React from 'react'

import rawData from '../../data/maker.json'
import rawDataMil from '../../data/maker-mil.json'

import { scalePoint, scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { area as d3Area, curveBasis } from 'd3-shape'
import { axisBottom, axisLeft } from 'd3-axis'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis2'
import Path from '../../vizlib/Path'

const Maker = ({ military, setMilitary }) => (
  <React.Fragment>
    <div>
      <label>
        <input
          type="checkbox"
          onChange={() => setMilitary(!military)}
          checked={military}
        />
        Include Military Flights
      </label>
    </div>
    <FlexPlot
      height={600}
      margin={{ top: 100, bottom: 20, left: 100, right: 20 }}
    >
      {({ chartHeight, chartWidth }) => {
        const data = (military ? rawDataMil : rawData).filter(
          d => d.total > 150,
        )
        const overlap = military ? 8 : 2
        const x = scaleLinear()
          .domain([1919, 2019])
          .range([0, chartWidth])
        const y = scalePoint()
          .domain(data.map(d => d.maker))
          .range([0, chartHeight])
        const z = scaleLinear()
          .domain([0, max(data, d => max(d.years))])
          .range([0, -overlap * y.step()])
          .nice()

        const area = d3Area()
          .x((d, i) => x(i + 1919))
          .y0(0)
          .y1(d => z(d))
          .curve(curveBasis)

        const line = area.lineY1()

        return (
          <React.Fragment>
            {data.map(d => (
              <g key={d.maker} transform={`translate(0, ${y(d.maker)})`}>
                <Path
                  generator={area}
                  data={d.years}
                  style={{
                    fill: '#555',
                  }}
                />
                {/* <Path
                  generator={line}
                  data={d.years}
                  style={{
                    fill: 'none',
                    stroke: '#ddd',
                  }}
                /> */}
              </g>
            ))}
            <Axis
              axis={axisBottom(x).tickFormat(d => d)}
              transform={`translate(0, ${chartHeight})`}
            />
            <Axis axis={axisLeft(y)} />
          </React.Fragment>
        )
      }}
    </FlexPlot>
  </React.Fragment>
)

import { compose, withState } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  withState('military', 'setMilitary', false),
)(Maker)
