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
          <XAxis
            //@ts-ignore its fine
            scale={sX}
            stage={stage}
          />
          <YAxis scale={sY} stage={stage} />
        </>
      )}
      {stage === 'start' && (
        <XAxis
          //@ts-ignore its fine
          scale={sX}
          stage={stage}
          tickSizeInner={-chartHeight}
          tickFormat={() => ''}
          opacity={0.2}
        />
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
