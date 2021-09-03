import React, { useState } from 'react'
import { scaleLinear, scalePoint, scaleOrdinal } from 'd3-scale'
import { usePlotContext, Svg } from 'vizlib'
import { mean, max } from 'd3-array'
import { line, curveBasis, curveCatmullRom } from 'd3-shape'
import { schemeBlues } from 'd3-scale-chromatic'

import { data } from '../data'

const getData = () => {
  const byDecade = groupBy(
    data,
    d => `${d.date.getFullYear().toString().slice(0, 3)}0s`,
  )

  return Object.keys(byDecade).reduce(
    (acc, key) => ({
      ...acc,
      [key]: [
        mean(byDecade[key], d => d.bustIN),
        mean(byDecade[key], d => d.waistIN),
        mean(byDecade[key], d => d.hipsIN),
      ],
    }),
    {},
  )
}

const Silhouette = ({ data, line, decade, stroke, i }) => {
  return (
    <>
      <path
        style={{
          stroke,
          fill: 'none',
          strokeWidth: 3,
        }}
        d={line(data.left)}
      />
      <path
        style={{
          stroke,
          fill: 'none',
          strokeWidth: 3,
        }}
        d={line(data.right)}
      />
    </>
  )
}

const Viz = ({ decades, chosen }: { decades: any; chosen: string }) => {
  const { chartHeight, chartWidth } = usePlotContext()

  const maxD = max(Object.keys(decades).flatMap(d => [...decades[d]]))

  const sX = scaleLinear()
    .range([0, chartWidth])
    .domain([-maxD / 2, maxD / 2])

  const sY = scaleLinear().domain([0, 89]).range([0, chartHeight])

  const partToSy = {
    top: 0,
    bust: 18,
    waist: 39,
    hips: 74,
    bottom: 89,
  }

  const color = scaleOrdinal()
    .range(schemeBlues[8])
    .domain(Object.keys(decades))

  const lineGenerator = line()
    .x(d => {
      const k = sX(d[1])
      return k
    })
    .y(d => {
      const k = sY(partToSy[d[0].toString()])
      return k
    })
    .curve(curveCatmullRom)

  const multiplier = 1 / 2.3

  return (
    <>
      {Object.keys(decades)
        .filter(k => (chosen ? k === chosen : true))
        .map((key, i) => (
          <Silhouette
            i={i}
            key={key}
            decade={key}
            line={lineGenerator}
            stroke={color(key)}
            data={{
              left: [
                ['top', -((decades[key][0] - 4) * multiplier)],
                ['bust', -(decades[key][0] * multiplier)],
                ['waist', -(decades[key][1] * multiplier)],
                ['hips', -(decades[key][2] * multiplier)],
                ['bottom', -(decades[key][2] * multiplier)],
              ],
              right: [
                ['top', (decades[key][0] - 4) * multiplier],
                ['bust', decades[key][0] * multiplier],
                ['waist', decades[key][1] * multiplier],
                ['hips', decades[key][2] * multiplier],
                ['bottom', decades[key][2] * multiplier],
              ],
            }}
          />
        ))}
      <Silhouette
        i={100}
        decade="ideal"
        line={lineGenerator}
        stroke={'red'}
        data={{
          left: [
            ['top', -(32 * multiplier)],
            ['bust', -(36 * multiplier)],
            ['waist', -(24 * multiplier)],
            ['hips', -(36 * multiplier)],
            ['bottom', -(36 * multiplier)],
          ],
          right: [
            ['top', 32 * multiplier],
            ['bust', 36 * multiplier],
            ['waist', 24 * multiplier],
            ['hips', 36 * multiplier],
            ['bottom', 36 * multiplier],
          ],
        }}
      />
    </>
  )
}

const BWH = () => {
  const decades = getData()
  console.log('decades', decades)

  const color = scaleOrdinal()
    .range(schemeBlues[8])
    .domain(Object.keys(decades))

  const [chosen, setChosen] = useState(null)

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
      }}
    >
      <Svg width={600} height={600} margin={30}>
        <Viz decades={decades} chosen={chosen} />
      </Svg>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      >
        {Object.keys(decades).map(k => (
          <div
            style={{
              display: 'flex',
              marginBottom: '0.25rem',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
            onClick={() => {
              if (k === chosen) {
                setChosen(null)
              } else {
                setChosen(k)
              }
            }}
          >
            <div
              style={{
                height: '1rem',
                width: '1rem',
                background: color(k),
                marginRight: '0.25rem',
              }}
            />{' '}
            {k}
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            marginBottom: '0.25rem',
            fontSize: '0.8rem',
          }}
        >
          <div
            style={{
              height: '1rem',
              width: '1rem',
              background: 'red',
              marginRight: '0.25rem',
            }}
          />{' '}
          "Ideal"
        </div>
      </div>
    </div>
  )
}

import { hot } from 'react-hot-loader'
import { pipe, groupBy, pick } from 'remeda'

export default pipe(BWH, hot(module))
