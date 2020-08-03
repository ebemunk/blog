import * as React from 'react'
import { scaleTime, scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import { line, area } from 'd3-shape'

import { usePlotContext, FlexPlot, Path } from '@xmatters/vizlib'

import loess from 'loess'

import { get } from '../data'
import { WAxis } from '../themed'

const Chart = ({ data, loess }) => {
  const { chartHeight, chartWidth } = usePlotContext()

  if (data.length < 0) return null

  const sX = scaleTime()
    // @ts-ignore
    .domain(extent(data, d => d[0]))
    .range([0, chartWidth])

  const sY = scaleLinear()
    .domain(
      //@ts-ignore
      extent(
        data.flatMap((d, i) => [
          loess.fitted[i] - loess.halfwidth[i],
          loess.fitted[i] + loess.halfwidth[i],
          d[1],
        ]),
      ),
    )
    .range([chartHeight, 0])
    .nice()

  console.log('hi')

  return (
    <>
      <WAxis
        scale={sX}
        orientation="bottom"
        transform={`translate(0,${chartHeight})`}
        showDomain
      />
      <WAxis scale={sY} orientation="left" showDomain />
      {data.map((d, i) => (
        <circle
          key={i}
          cx={sX(d[0])}
          cy={sY(d[1])}
          r={2}
          style={{
            fill: 'pink',
            opacity: 0.3,
          }}
        />
      ))}
      <Path
        data={data.map((d, i) => [
          sX(d[0]),
          sY(loess.fitted[i] - loess.halfwidth[i]),
          sY(loess.fitted[i] + loess.halfwidth[i]),
        ])}
        // @ts-ignore
        generator={area()
          .x(d => d[0])
          .y0(d => d[1])
          // @ts-ignore
          .y1(d => d[2])}
        style={{
          opacity: 0.3,
          fill: 'gray',
        }}
      />
      <Path
        data={data.map((d, i) => [sX(d[0]), sY(loess.fitted[i])])}
        // @ts-ignore
        generator={line()}
        style={{
          stroke: 'red',
          fill: 'none',
        }}
      />
    </>
  )
}

const Trends = ({}) => {
  const focuses = {
    height: d => d.height,
    weight: d => d.weight,
    bust: d => d.measurements?.bust,
    waist: d => d.measurements?.waist,
    hips: d => d.measurements?.hips,
    age: d => d.mateAge,
  }
  const [focus, setFocus] = React.useState('height')
  const [dd, setDD] = React.useState({
    data: [],
    loess: [],
  } as { data: any[]; loess: any[] })
  React.useEffect(() => {
    const fDat = get(focuses[focus])
    const model = new loess(
      {
        x: fDat.map((d: any) => d[0].getTime()),
        y: fDat.map((d: any) => d[1]),
      },
      { band: 0.2 },
    )
    const smooth = model.predict()
    setDD({
      data: fDat,
      loess: smooth,
    })
  }, [focus])

  // console.log('fonk', dd)

  return (
    <>
      <select
        onChange={e => {
          setFocus(e.target.value)
        }}
      >
        {Object.keys(focuses).map(opt => (
          <option key={opt} value={opt} label={opt} />
        ))}
      </select>
      <div
        style={{
          height: '400px',
          width: '70%',
        }}
      >
        <FlexPlot margin={30}>
          <Chart data={dd.data} loess={dd.loess} />
        </FlexPlot>
      </div>
    </>
  )
}

import { hot } from 'react-hot-loader'

export default hot(module)(Trends)
