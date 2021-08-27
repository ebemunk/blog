import * as React from 'react'
import { hot } from 'react-hot-loader'

import { ResponsiveSvg, usePlotContext, Axis } from 'vizlib'
import { useTransition, animated, useChain } from 'react-spring'

import { data } from '../data'
import { MONTHS } from '../util'

// @ts-ignore
window.data = data

const XAxis = ({ stage, scale }) => {
  switch (stage) {
    case 'start':
      return (
        <Axis
          scale={scale}
          orientation="top"
          tickValues={range(1955, 2021, 5).map(String)}
          tickSizeOuter={0}
          transitionDuration={300}
        />
      )

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips':
      return (
        <Axis
          scale={scale}
          orientation="top"
          tickSizeOuter={0}
          transitionDuration={300}
        />
      )

    default:
      return null
  }
}

const YAxis = ({ stage, scale }) => {
  switch (stage) {
    case 'start':
      return (
        <Axis
          scale={scale}
          orientation="left"
          tickFormat={d => MONTHS[d]}
          transitionDuration={300}
        />
      )

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips':
      return (
        <Axis
          scale={scale}
          orientation="left"
          tickSizeOuter={0}
          transitionDuration={300}
        />
      )

    default:
      return null
  }
}

import accessors from './accessors'
import scales from './scales'

import LOESS from './LOESS'
import PlaymateCircles from './PlaymateCircles'
import GroupingCircles from './GroupingCircles'
import Voronoi from './Voronoi'

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

  const playmateCircles: PlaymateCircle[] = data
    .filter(d => typeof yA(d) !== 'undefined' && yA(d) !== null)
    .map(d => ({
      cx: sX(xA(d)) as number,
      cy: sY(yA(d)) as number,
      fill: cA(d) ? (sC(cA(d)) as string) : 'cyan',
      datum: d,
    }))

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
        data={playmateCircles}
        r={3}
        transitionDuration={750}
        className="circles"
      />
      <Voronoi data={playmateCircles} stage={stage} />
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
import { range } from 'd3'
import { Playmate, PlaymateCircle } from '../types'

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
        <ResponsiveSvg margin={{ left: 30, top: 30, bottom: 10, right: 10 }}>
          <Viz stage={stage} />
        </ResponsiveSvg>
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
