import React from 'react'
import { usePlotContext } from 'vizlib'

import { data } from '../data'
import { PlaymateCircle } from '../types'
import accessors from './accessors'
import { XAxis, YAxis } from './Axis'
import GroupingCircles from './GroupingCircles'
import LOESS from './LOESS'
import PlaymateCircles from './PlaymateCircles'
import scales from './scales'
import { STAGES } from './util'
import Voronoi from './Voronoi'

const Viz = ({ stage }: { stage: typeof STAGES[number] }) => {
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

  const multiplePlaymates = Object.entries(
    data.reduce((obj, d) => {
      const key = `${d.year}-${d.month}`
      return {
        ...obj,
        [key]: obj[key] ? obj[key] + 1 : 1,
      }
    }, {}),
  )
    .filter(d => d[1] > 1)
    .reduce((obj, d) => ({ ...obj, [d[0]]: d[1] }), {})

  const handledMultiple = { ...multiplePlaymates }
  console.log('multiple', multiplePlaymates)

  const playmateCircles: PlaymateCircle[] = data
    .filter(d => typeof yA(d) !== 'undefined' && yA(d) !== null)
    .map(d => {
      const datum = {
        cx: sX(xA(d)) as number,
        cy: sY(yA(d)) as number,
        fill: cA(d) ? (sC(cA(d)) as string) : 'cyan',
        datum: d,
      }

      // fuck im such a noob..
      // when there are multiple playmates, spread the points around so they
      // dont overlap. thankfully theres max 3 lol
      if (stage === 'start') {
        const key = `${d.year}-${d.month}`

        if (handledMultiple[key]) {
          switch (multiplePlaymates[key]) {
            case 3: {
              switch (handledMultiple[key]) {
                case 3: {
                  datum.cx -= 3.5
                  datum.cy += 3.5
                  break
                }
                case 2: {
                  datum.cx += 3.5
                  datum.cy += 3.5
                  break
                }
                case 1: {
                  datum.cy -= 3.5
                  break
                }
              }
              break
            }
            case 2: {
              switch (handledMultiple[key]) {
                case 2: {
                  datum.cy -= 3.5
                  break
                }
                case 1: {
                  datum.cy += 3.5
                  break
                }
              }
            }
          }
          handledMultiple[key]--
        }
      }

      return datum
    })

  return (
    <>
      {[
        'start',
        'mateAge',
        'height',
        'weight',
        'bust',
        'waist',
        'hips',
      ].includes(stage) && (
        <>
          <XAxis
            //@ts-ignore its fine
            scale={sX}
            stage={stage}
          />
          <XAxis
            //@ts-ignore its fine
            scale={sX}
            stage={stage}
            tickSizeInner={-chartHeight}
            tickFormat={() => ''}
            opacity={0.2}
          />
          <YAxis scale={sY} stage={stage} />
        </>
      )}
      {['hair', 'ethnicity', 'breasts', 'theCup'].includes(stage) && (
        <GroupingCircles
          className="extras"
          data={extras.map(d => ({
            ...d,
            cx: d.x,
            cy: d.y,
            stroke: sC(d.data[0]) as string,
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

export default Viz
