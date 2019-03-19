import React, { useState } from 'react'

import rawData from '../../data/maker.json'
import rawDataMil from '../../data/maker-mil.json'

import { scalePoint, scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { area as d3Area, curveBasis } from 'd3-shape'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis'
import Path from '../../vizlib/Path'

const Maker = () => {
  const [military, setMilitary] = useState(false)

  return (
    <React.Fragment>
      <div>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            type="checkbox"
            onChange={() => setMilitary(!military)}
            checked={military}
          />
          Include Military Flights
        </label>
      </div>
      <FlexPlot
        height={500}
        margin={{ top: 40, bottom: 20, left: 100, right: 20 }}
      >
        {({ chartHeight, chartWidth }) => {
          const data = [
            'Antonov',
            'Boeing',
            'Lockheed',
            'Curtiss',
            'de',
            'Cessna',
            'Beechcraft',
            'McDonnell',
            'Ilyushin',
            'Fokker',
            'Vickers',
            'Airbus',
            'Douglas',
            'Britten-Norman',
            'Learjet',
            'Tupolev',
            'Convair',
            'Lisunov',
            'Embraer',
            'Swearingen',
          ].map(k => (military ? rawDataMil : rawData).find(d => d.maker === k))

          const overlap = military ? 8 : 4
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
                  <Path
                    generator={line}
                    data={d.years}
                    style={{
                      fill: 'none',
                      stroke: '#ddd',
                    }}
                  />
                </g>
              ))}
              <Axis
                scale={x}
                transform={`translate(0, ${chartHeight})`}
                orientation="bottom"
              />
              <Axis scale={y} orientation="left" />
            </React.Fragment>
          )
        }}
      </FlexPlot>
    </React.Fragment>
  )
}

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  React.memo,
)(Maker)