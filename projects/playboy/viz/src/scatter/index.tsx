import * as React from 'react'
import { hot } from 'react-hot-loader'

import { FlexPlot, usePlotContext, Path } from '@xmatters/vizlib'
import { useTransition, animated, useChain } from 'react-spring'

import { get, data } from '../data'
import { WAxis } from '../themed'
import { MONTHS } from '../util'

// @ts-ignore
window.data = data

const XAxis = ({ stage, scale }) => {
  switch (stage) {
    case 'start':
      return (
        <WAxis
          scale={scale}
          orientation="top"
          ticks={[1953, 1960, 1970, 1980, 1990, 2000, 2010, 2020]}
          showDomain
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

import LOESS from './LOESS'

const Viz = ({ stage }) => {
  console.log('viz rendering', stage)

  const { chartHeight, chartWidth } = usePlotContext()

  const [xA, yA, cA] = React.useMemo(() => accessors(stage), [stage])
  const [sX, sY, sC, extras] = React.useMemo(
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

  const transitionRef = React.useRef(null)
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
          fill: cA(d) ? sC(cA(d)) : 'cyan',
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
          fill: cA(d) ? sC(cA(d)) : 'cyan',
        }
      },
      leave: d => ({
        r: 0,
        opacity: 0,
      }),
      unique: true,
      ref: transitionRef,
      // config: {
      //   duration: 3000,
      // },
      // trail: 1,
      // immediate: true,
    },
  )

  const extrasTransitionRef = React.useRef(null)
  // @ts-ignore
  const extrasTransition = useTransition(
    extras ?? [],
    d => {
      // @ts-ignore
      return d.data[0]
    },
    {
      from: d => ({
        opacity: 0,
        // @ts-ignore
        r: 0,
        // @ts-ignore
        cx: d.x,
        // @ts-ignore
        cy: d.y,
      }),
      // @ts-ignore
      enter: d => {
        const upd = {
          opacity: 0.4,
          r: d.r,
          cx: d.x,
          cy: d.y,
        }
        console.log('d', upd)
        return upd
      },
      update: d => {
        return {
          opacity: 0.4,
          r: d.r,
          cx: d.x,
          cy: d.y,
        }
      },
      leave: d => ({
        r: 0,
        opacity: 0,
      }),
      unique: true,
      ref: extrasTransitionRef,
    },
  )

  useChain([transitionRef, extrasTransitionRef])

  return (
    <>
      {stage !== 'hair' && (
        <>
          <XAxis scale={sX} stage={stage} />
          <YAxis scale={sY} stage={stage} />
        </>
      )}
      {['hair', 'ethnicity', 'breasts', 'theCup'].includes(stage) && (
        <g className="extras">
          {extrasTransition.map(({ item, key, state, props }) => {
            return (
              <animated.circle
                key={key}
                // @ts-ignore
                cx={props.cx}
                // @ts-ignore
                cy={props.cy}
                // @ts-ignore
                r={props.r}
                fill="transparent"
                //@ts-ignore
                stroke={sC(item.data[0])}
                strokeWidth={3}
                opacity={props.opacity}
                pointerEvents="none"
              />
            )
          })}
        </g>
      )}
      <g className="circles">
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
      </g>
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
  'theCup',
]

import _ from 'lodash'

function flattenObject(o, prefix = '', result = {}, keepNull = true) {
  if (
    _.isString(o) ||
    _.isNumber(o) ||
    _.isBoolean(o) ||
    (keepNull && _.isNull(o))
  ) {
    result[prefix] = o
    return result
  }

  if (_.isArray(o) || _.isPlainObject(o)) {
    for (let i in o) {
      let pref = prefix
      if (_.isArray(o)) {
        pref = pref + `[${i}]`
      } else {
        if (_.isEmpty(prefix)) {
          pref = i
        } else {
          pref = prefix + '.' + i
        }
      }
      flattenObject(o[i], pref, result, keepNull)
    }
    return result
  }
  return result
}

const Scatter = () => {
  const [stage, setStage] = React.useState('hips')
  console.log('scatter rendering')

  const khist = data
    .map(d => flattenObject(d))
    .reduce((acc, obj) => {
      Object.keys(obj).forEach(k => {
        acc[k] = acc[k] ? acc[k] + 1 : 1
      })
      return acc
    }, {})
  console.log('histtt', data.length, khist)

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
