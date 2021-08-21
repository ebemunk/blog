import * as React from 'react'
import { hot } from 'react-hot-loader'

import { FlexPlot, usePlotContext } from '@xmatters/vizlib'
import { useTransition, animated, useChain } from 'react-spring'

import { data } from '../data'
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

import accessors from './accessors'
import scales from './scales'

import LOESS from './LOESS'
import PlaymateCircles from './PlaymateCircles'
import GroupingCircles from './GroupingCircles'

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

  return (
    <>
      {stage !== 'hair' && (
        <>
          <XAxis scale={sX} stage={stage} />
          <YAxis scale={sY} stage={stage} />
        </>
      )}
      {['hair', 'ethnicity', 'breasts', 'theCup'].includes(stage) && (
        <GroupingCircles
          className="extras"
          // @ts-ignore
          data={extras.map(d => ({
            ...d,
            cx: d.x,
            cy: d.y,
            // @ts-ignore
            stroke: sC(d.data[0]),
          }))}
          transitionDuration={750}
        />
      )}

      {['mateAge', 'height', 'weight', 'bust', 'waist', 'hips'].includes(
        stage,
      ) && <LOESS sX={sX} sY={sY} stage={stage} />}

      <PlaymateCircles
        data={data
          .filter(d => typeof yA(d) !== 'undefined' && yA(d) !== null)
          .map(d => ({
            cx: sX(xA(d)) as number,
            cy: sY(yA(d)) as number,
            fill: cA(d) ? (sC(cA(d)) as string) : 'cyan',
            datum: d,
          }))}
        r={2}
        transitionDuration={750}
        className="circles"
      />
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
  const [stage, setStage] = React.useState('start')
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

  const stageIndex = STAGES.indexOf(stage)

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
        <FlexPlot margin={{ left: 30, top: 30, bottom: 10, right: 10 }}>
          <Viz stage={stage} />
        </FlexPlot>
      </div>
      <div
        style={{
          height: '100vh',
          marginLeft: '70vw',
        }}
      >
        <select
          onChange={e => {
            setStage(e.target.value)
          }}
          value={stage}
        >
          {STAGES.map(opt => (
            <option key={opt} value={opt} label={opt} />
          ))}
        </select>
        <button
          onClick={() => {
            setStage(s =>
              stageIndex > 0
                ? STAGES[stageIndex - 1]
                : STAGES[STAGES.length - 1],
            )
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            setStage(s =>
              stageIndex < STAGES.length - 1
                ? STAGES[stageIndex + 1]
                : STAGES[0],
            )
          }}
        >
          &gt;
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
