import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import { scalePoint, scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { area as d3Area, curveMonotoneX } from 'd3-shape'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis'
import Path from '../../vizlib/Path'
import ChartTitle from '../../vizlib/ChartTitle'

import rawData from '../../data/maker.json'
import rawDataMil from '../../data/maker-mil.json'

const Max = ({ x, y, maxD }) => {
  const props = useSpring({
    transform: `translate(${x}, ${y})`,
  })
  return (
    <animated.g transform={props.transform}>
      <animated.circle r={3} style={{ fill: 'white' }} />
      <animated.text
        style={{ fill: 'white', fontSize: '0.75rem' }}
        dx={5}
        dy={3}
      >
        {maxD.value}
      </animated.text>
    </animated.g>
  )
}

const Maker = () => {
  const [military, setMilitary] = useState(false)

  return (
    <>
      <ChartTitle
        title="Crashes by manufacturer"
        subtitle="Showing top 20 manufacturers with highest number of crashes (not ordered). Douglas and Curtiss were big WW2 wartime manufacturers."
        style={{ marginLeft: 30 }}
      />
      <div>
        <label
          style={{
            cursor: 'pointer',
            marginLeft: 30,
            fontSize: '0.8rem',
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
        margin={{ top: 40, bottom: 20, left: 100, right: 100 }}
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

          const overlap = military ? 4 : 4
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
            .curve(curveMonotoneX)

          const line = area.lineY1()

          const maxD = data
            .map(d =>
              d.years.map((dd, i) => ({
                year: i + 1919,
                value: dd,
                maker: d.maker,
              })),
            )
            .reduce((acc, v) => acc.concat(v), [])
            .sort((a, b) => b.value - a.value)[0]

          return (
            <>
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
              <Max
                x={x(maxD.year)}
                y={y(maxD.maker) + z(maxD.value)}
                maxD={maxD}
              />
              <Axis
                scale={x}
                transform={`translate(0, ${chartHeight})`}
                orientation="bottom"
                tickFormat={d => d}
              />
              <Axis
                scale={y}
                orientation="left"
                tickFormat={d => (d === 'de' ? 'de Havilland' : d)}
              />
              <Axis
                scale={y}
                orientation="right"
                transform={`translate(${chartWidth}, 0)`}
                tickFormat={d => (d === 'de' ? 'de Havilland' : d)}
              />
            </>
          )
        }}
      </FlexPlot>
    </>
  )
}

import { hot } from 'react-hot-loader'

export default hot(module)(Maker)
