import * as React from 'react'
import { scaleLinear, scalePoint, scaleOrdinal } from 'd3-scale'
import { FlexPlot, usePlotContext, Path, Plot } from '@xmatters/vizlib'
import { extent, mean, max } from 'd3-array'
import {
  line,
  curveBasis,
  curveBundle,
  curveCardinal,
  curveCatmullRom,
  curveNatural,
} from 'd3-shape'
import { schemeBlues, schemeCategory10 } from 'd3-scale-chromatic'

import { get, data } from '../data'
import { WAxis } from '../themed'

const getData = () => {
  const byDecade = groupBy(
    data,
    d => `${d.date.getFullYear().toString().slice(0, 3)}0s`,
  )

  return Object.keys(byDecade).reduce(
    (acc, key) => ({
      ...acc,
      // @ts-ignore
      [key]: [
        mean(byDecade[key], d => d.measurements?.bust),
        mean(byDecade[key], d => d.measurements?.waist),
        mean(byDecade[key], d => d.measurements?.hips),
      ],
    }),
    {},
  )
}

const Silhouette = ({ data, line, decade, stroke }) => {
  return (
    <>
      <Path
        //@ts-ignore
        generator={line}
        data={data.left}
        style={{
          // @ts-ignore
          stroke,
          fill: 'none',
          strokeWidth: 3,
          isolation: 'isolate',
        }}
        className="silpath"
      >
        <title>{decade}</title>
      </Path>
      <Path
        //@ts-ignore
        generator={line}
        data={data.right}
        style={{
          // @ts-ignore
          stroke,
          fill: 'none',
          strokeWidth: 3,
          isolation: 'isolate',
        }}
        className="silpath"
      >
        <title>{decade}</title>
      </Path>
    </>
  )
}

const curves = {
  basis: curveBasis,
  natural: curveNatural,
  cardinal: curveCardinal,
  catmullrom: curveCatmullRom,
  bundle: curveBundle,
}

const Viz = ({ decades, curve }) => {
  const { chartHeight, chartWidth } = usePlotContext()

  const maxD = max(Object.keys(decades).flatMap(d => [...decades[d]]))

  const sX = scaleLinear()
    .range([0, chartWidth])
    // @ts-ignore
    .domain([-maxD / 2, maxD / 2])

  const sY = scalePoint()
    .range([0, chartHeight])
    .domain(['top', 'bust', 'waist', 'hips', 'bottom'])

  const color = scaleOrdinal()
    // .range(schemeCategory10)
    .range(schemeBlues[8])
    .domain(Object.keys(decades))

  const lineGenerator = line()
    .x(d => {
      const k = sX(d[1])
      return k
    })
    // @ts-ignore
    .y(d => {
      // @ts-ignore
      const k = sY(d[0])
      return k
    })
    .curve(curves[curve])

  return (
    <>
      {Object.keys(decades).map(key => (
        <Silhouette
          key={key}
          decade={key}
          line={lineGenerator}
          stroke={color(key)}
          data={{
            left: [
              ['top', -(decades[key][0] / 2)],
              ['bust', -(decades[key][0] / 2)],
              ['waist', -(decades[key][1] / 2)],
              ['hips', -(decades[key][2] / 2)],
              ['bottom', -(decades[key][2] / 2)],
            ],
            right: [
              ['top', decades[key][0] / 2],
              ['bust', decades[key][0] / 2],
              ['waist', decades[key][1] / 2],
              ['hips', decades[key][2] / 2],
              ['bottom', decades[key][2] / 2],
            ],
          }}
        />
      ))}
      {/* <Silhouette
        decade="ideal"
        line={lineGenerator}
        stroke={'red'}
        data={{
          left: [
            ['top', -(36 / 2)],
            ['bust', -(36 / 2)],
            ['waist', -(24 / 2)],
            ['hips', -(36 / 2)],
            ['bottom', -(36 / 2)],
          ],
          right: [
            ['top', 36 / 2],
            ['bust', 36 / 2],
            ['waist', 24 / 2],
            ['hips', 36 / 2],
            ['bottom', 36 / 2],
          ],
        }}
      /> */}
    </>
  )
}

const BWH = () => {
  const decades = getData()
  console.log('decades', decades)

  const select = React.useRef(null!)
  const [filters, setFilters] = React.useState(Object.keys(decades))
  // @ts-ignore
  const [curve, setCurve] = React.useState('basis')

  console.log('aaa', curve)

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <select
        ref={select}
        onChange={e => {
          setFilters([e.target.value])
        }}
      >
        {Object.keys(decades).map(key => (
          <option key={key} value={key} label={key} />
        ))}
      </select>
      <select
        onChange={e => {
          setCurve(e.target.value)
        }}
      >
        {Object.keys(curves).map(key => (
          <option key={key} value={key} label={key} />
        ))}
      </select>
      <Plot width={900} height={900} margin={30}>
        {/* @ts-ignore */}
        <Viz decades={pick(decades, filters)} curve={curve} />
      </Plot>
    </div>
  )
}

import { hot } from 'react-hot-loader'
import { pipe, groupBy, pick } from 'remeda'

export default pipe(BWH, hot(module))
