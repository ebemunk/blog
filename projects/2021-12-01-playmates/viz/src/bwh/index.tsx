import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { usePlotContext, Svg, ResponsiveSvg } from 'vizlib'
import { schemeGreens } from 'd3-scale-chromatic'

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
        d3.mean(byDecade[key], d => d.bustIN),
        d3.mean(byDecade[key], d => d.waistIN),
        d3.mean(byDecade[key], d => d.hipsIN),
      ],
    }),
    {},
  )
}

const Silhouette = ({ data, line, stroke, opacity = 1 }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    d3.select(ref.current)
      //
      .transition()
      .duration(750)
      .attr('opacity', opacity)
  }, [opacity])

  return (
    <g ref={ref}>
      <path
        style={{
          stroke,
          fill: 'none',
          strokeWidth: 3,
          opacity: 0.7,
        }}
        d={line(data.left)}
      />
      <path
        style={{
          stroke,
          fill: 'none',
          strokeWidth: 3,
          opacity: 0.7,
        }}
        d={line(data.right)}
      />
    </g>
  )
}

const Viz = ({ decades, chosen }: { decades: any; chosen: string }) => {
  const { chartHeight, chartWidth } = usePlotContext()

  const maxD = d3.max(Object.keys(decades).flatMap(d => [...decades[d]]))

  const sX = d3
    .scaleLinear()
    .range([0, chartWidth])
    .domain([-maxD / 2, maxD / 2])

  const sY = d3.scaleLinear().domain([0, 89]).range([0, chartHeight])

  const partToSy = {
    top: 0,
    bust: 18,
    waist: 39,
    hips: 74,
    bottom: 89,
  }

  const color = d3
    .scaleOrdinal()
    .range(schemeGreens[9])
    .domain(Object.keys(decades).concat(''))

  const lineGenerator = d3
    .line()
    .x(d => {
      const k = sX(d[1])
      return k
    })
    .y(d => {
      const k = sY(partToSy[d[0].toString()])
      return k
    })
    .curve(d3.curveCatmullRom)

  const multiplier = 1 / 2.3

  return (
    <>
      <Silhouette
        line={lineGenerator}
        stroke={'yellow'}
        data={{
          left: [
            ['top', -(35 * multiplier)],
            ['bust', -(39 * multiplier)],
            ['waist', -(18 * multiplier)],
            ['hips', -(33 * multiplier)],
            ['bottom', -(33 * multiplier)],
          ],
          right: [
            ['top', 35 * multiplier],
            ['bust', 39 * multiplier],
            ['waist', 18 * multiplier],
            ['hips', 33 * multiplier],
            ['bottom', 33 * multiplier],
          ],
        }}
      />
      {Object.keys(decades).map((key, i) => (
        <Silhouette
          opacity={
            chosen && key === chosen ? 1 : chosen && key !== chosen ? 0 : 1
          }
          key={key}
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

  const color = d3
    .scaleOrdinal()
    .range(schemeGreens[8])
    .domain(Object.keys(decades))

  const [chosen, setChosen] = useState(null)

  const legendRef = useRef(null)

  useEffect(() => {
    if (!legendRef.current) return

    d3.select(legendRef.current)
      .selectAll('div[data-key]')
      .transition()
      .duration(750)
      .style('background', function () {
        const key = this.attributes['data-key'].value
        if (!chosen) return color(key)
        return chosen === key ? color(key) : 'transparent'
      })
  }, [chosen])

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <ResponsiveSvg aspectRatio={1} margin={30}>
        <Viz decades={decades} chosen={chosen} />
      </ResponsiveSvg>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
        ref={legendRef}
      >
        {Object.keys(decades).map(k => (
          <div
            key={k}
            style={{
              display: 'flex',
              marginBottom: '0.25rem',
              fontSize: '0.8rem',
              cursor: 'pointer',
              alignItems: 'center',
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
              data-key={k}
              style={{
                height: '1rem',
                width: '1rem',
                // background:
                // chosen && chosen !== k ? 'transparent' : (color(k) as string),
                border: `2px solid ${color(k)}`,
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
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height: '1rem',
              width: '1rem',
              background: 'red',
              border: '2px solid red',
              marginRight: '0.25rem',
            }}
          />{' '}
          "Ideal"
        </div>
        <div
          style={{
            display: 'flex',
            marginBottom: '0.25rem',
            fontSize: '0.8rem',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height: '1rem',
              width: '1rem',
              background: 'yellow',
              border: '2px solid yellow',
              marginRight: '0.25rem',
            }}
          />{' '}
          Barbie doll
        </div>
      </div>
    </div>
  )
}

import { hot } from 'react-hot-loader'
import { pipe, groupBy } from 'remeda'

export default pipe(BWH, hot(module))
