import * as React from 'react'
import { hot } from 'react-hot-loader'

import { FlexPlot, usePlotContext, Path } from '@xmatters/vizlib'
import { useTransition, animated } from 'react-spring'

import { get, data } from '../data'
import { WAxis } from '../themed'
import { MONTHS } from '../util'

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
        // stroke: 'white',
        ...style,
      }}
    >
      <title>{datum.name}</title>
    </animated.circle>
  )
}

import accessors from './accessors'
import scales from './scales'

import loessData from '../../loess.json'
import { area, line } from 'd3-shape'

const LOESS = ({ stage, sX, sY, yA }) => {
  const ld = loessData.find(d => d.key === stage)

  if (!ld) return null

  const {
    loess: { fitted, halfwidth },
  } = ld

  const dd = get(accessors(stage)[1])

  return (
    <>
      <Path
        data={dd.map((d, i) => [
          sX(d[0]),
          sY(fitted[i] - halfwidth[i]),
          sY(fitted[i] + halfwidth[i]),
        ])}
        // @ts-ignore
        generator={area()
          .x(d => d[0])
          .y0(d => d[1])
          // @ts-ignore
          .y1(d => d[2])}
        style={{
          opacity: 0.4,
          fill: 'gray',
        }}
      />
      <Path
        data={dd.map((d, i) => [sX(d[0]), sY(fitted[i])])}
        // @ts-ignore
        generator={line()}
        style={{
          stroke: 'red',
          strokeWidth: 4,
          fill: 'none',
          opacity: 0.6,
        }}
      />
    </>
  )
}

const Viz = ({ stage }) => {
  console.log('viz rendering', stage)

  const { chartHeight, chartWidth } = usePlotContext()

  const [xA, yA, cA] = React.useMemo(() => accessors(stage), [stage])
  const [sX, sY, sC] = React.useMemo(
    () =>
      scales({
        stage,
        chartHeight,
        chartWidth,
        xA,
        yA,
      }),
    [stage, chartHeight, chartWidth, xA, yA],
  )

  // @ts-ignore
  const transition = useTransition(
    data,
    d => `${d.name}-${d.year}-${d.month}`,
    {
      from: {
        opacity: 0,
        // @ts-ignore
        r: 0,
        cx: 0,
        cy: 0,
        fill: 'pink',
      },
      enter: d => {
        if (!yA(d)) {
          return {
            opacity: 0,
          }
        }

        return {
          opacity: 0.7,
          r: 2,
          cx: sX(xA(d)),
          cy: sY(yA(d)),
          fill: sC(cA(d)),
        }
      },
      update: d => {
        if (!yA(d)) {
          return {
            opacity: 0,
          }
        }

        return {
          cx: sX(xA(d)),
          cy: sY(yA(d)),
          r: 2,
          opacity: 1,
          fill: sC(cA(d)),
        }
      },
      leave: d => ({
        r: 0,
        opacity: 0,
      }),
      // config: {
      //   duration: 3000,
      // },
      unique: true,
      // trail: 1,
      // immediate: true,
    },
  )

  return (
    <>
      {stage !== 'hair' && (
        <>
          <XAxis scale={sX} stage={stage} />
          <YAxis scale={sY} stage={stage} />
        </>
      )}
      {/* {stage === 'hair' && <Pie />} */}
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
              fill: props.fill,
              opacity: props.opacity,
            }}
            datum={item}
          />
        )
      })}
      {['mateAge', 'height', 'weight', 'bust', 'waist', 'hips'].includes(
        stage,
      ) && <LOESS sX={sX} sY={sY} stage={stage} yA={yA} />}
    </>
  )
}

const STAGES = [
  'start',

  'mateAge',
  'height',
  'weight',
  'bust',
  'waist',
  'hips',

  'hair',
  'ethnicity',
  'breasts',
]

const Scatter = () => {
  const [stage, setStage] = React.useState('hips')
  console.log('scatter rendering')

  return (
    <div
      style={{
        border: '2px solid red',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '10vh',
          border: '2px solid blue',
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
        {/* <button
          onClick={() =>
            setStage(
              // STAGES[(STAGES.findIndex(s => s === stage) + 1) % STAGES.length],
              // STAGES[(STAGES.findIndex(s => s === stage) + 1) % STAGES.length],
              // stage === 'hair' ? 'bust' : 'hair',
            )
          }
        >
          {stage}
        </button> */}

        <select
          onChange={e => {
            setStage(e.target.value)
          }}
        >
          {STAGES.map(opt => (
            <option key={opt} value={opt} label={opt} />
          ))}
        </select>
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
