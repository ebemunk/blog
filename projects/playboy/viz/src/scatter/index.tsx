import * as React from 'react'
import { hot } from 'react-hot-loader'

import { FlexPlot, usePlotContext } from '@xmatters/vizlib'
import { scalePoint, scaleTime, scaleLinear } from 'd3-scale'
import { extent, range } from 'd3-array'
import { useTransition, animated } from 'react-spring'

import { get, data } from '../data'
import { WAxis } from '../themed'
import { MONTHS } from '../util'
import { identity } from 'remeda'

const XAxis = ({ stage, scale }) => {
  switch (stage) {
    case 'start':
      return (
        <WAxis
          scale={scale}
          orientation="top"
          // @ts-ignore
          ticks={[
            // @ts-ignore
            '1953',
            // @ts-ignore
            '1960',
            // @ts-ignore
            '1970',
            // @ts-ignore
            '1980',
            // @ts-ignore
            '1990',
            // @ts-ignore
            '2000',
            // @ts-ignore
            '2010',
            // @ts-ignore
            '2020',
          ]}
        />
      )

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips':
      return <WAxis scale={scale} orientation="top" showDomain />

    default:
      return null
  }
}

const YAxis = ({ stage, scale }) => {
  switch (stage) {
    case 'start':
      return (
        <WAxis scale={scale} orientation="left" tickFormat={d => MONTHS[d]} />
      )

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips':
      return <WAxis scale={scale} orientation="left" showDomain />

    default:
      return null
  }
}

const Circle = ({ datum, cx, cy, r, style }) => {
  return (
    <animated.circle
      cx={cx}
      cy={cy}
      r={r}
      style={{
        fill: 'red',
        ...style,
      }}
    />
  )
}

const scales = ({ stage, chartHeight, chartWidth, xA, yA }) => {
  switch (stage) {
    case 'start':
      return [
        scalePoint()
          .range([0, chartWidth])
          .domain(data.map(d => d.year + ''))
          .padding(0.5),

        scalePoint()
          .range([0, chartHeight])
          .domain(range(12).map(d => `${d}`))
          .padding(0.5),
      ]

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips':
      return [
        scaleTime()
          // @ts-ignore
          .domain(extent(data, xA))
          .range([0, chartWidth]),

        scaleLinear()
          .domain(
            //@ts-ignore
            extent(data, yA),
          )
          .range([chartHeight, 0])
          .nice(),
      ]
    default:
      return [identity, identity]
  }
}

const accessors = stage => {
  switch (stage) {
    case 'start':
      return [d => d.year.toString(), d => d.month.toString()]

    case 'mateAge':
      return [d => d.date, d => d.mateAge]
    case 'height':
      return [d => d.date, d => d.height]
    case 'weight':
      return [d => d.date, d => d.weight]
    case 'bust':
      return [d => d.date, d => d.measurements?.bust]
    case 'waist':
      return [d => d.date, d => d.measurements?.waist]
    case 'hips':
      return [d => d.date, d => d.measurements?.hips]
    default:
      return [identity, identity]
  }
}

const Viz = ({ stage }) => {
  const { chartHeight, chartWidth } = usePlotContext()

  const [xA, yA] = accessors(stage)
  const [sX, sY] = scales({
    stage,
    chartHeight,
    chartWidth,
    xA,
    yA,
  })

  // @ts-ignore
  const transition = useTransition(
    data.filter(d => !!yA(d)),
    d => `${d.name}-${d.year}-${d.month}`,
    {
      from: {
        opacity: 0,
        r: 0,
        // @ts-ignore
        cx: 0,
        cy: 0,
      },
      enter: d => ({
        opacity: 1,
        r: 4,
        cx: sX(xA(d)),
        cy: sY(yA(d)),
      }),
      update: d => ({
        cx: sX(xA(d)),
        cy: sY(yA(d)),
        r: 2,
      }),
      leave: d => ({
        r: 0,
        opacity: 0,
      }),
      // config: {
      //   duration: 3000,
      // },
      unique: true,
      trail: 1,
    },
  )

  return (
    <>
      <XAxis scale={sX} stage={stage} />
      <YAxis scale={sY} stage={stage} />
      {transition.map(({ item, key, state, props }) => {
        return (
          <Circle
            key={key}
            // @ts-ignore
            cx={props.cx}
            // @ts-ignore
            cy={props.cy}
            // @ts-ignore
            r={props.r}
            style={{
              fill: 'red',
              opacity: props.opacity,
            }}
            datum={item}
          />
        )
      })}
    </>
  )
}

const STAGES = ['start', 'mateAge', 'height', 'weight', 'bust', 'waist', 'hips']

const Scatter = () => {
  const [stage, setStage] = React.useState('start')

  return (
    <div
      style={{
        background: 'red',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '10vh',
          background: 'blue',
          height: '80vh',
          width: '70vw',
        }}
      >
        <FlexPlot margin={100}>
          <Viz stage={stage} />
        </FlexPlot>
      </div>
      <div
        style={{
          height: '100vh',
          marginLeft: '70vw',
        }}
      >
        <button
          onClick={() =>
            setStage(
              STAGES[(STAGES.findIndex(s => s === stage) + 1) % STAGES.length],
            )
          }
        >
          {stage}
        </button>
      </div>
      <div
        style={{
          height: '100vh',
          marginLeft: '70vw',
        }}
      >
        goodbye
      </div>
    </div>
  )
}

export default hot(module)(Scatter)
