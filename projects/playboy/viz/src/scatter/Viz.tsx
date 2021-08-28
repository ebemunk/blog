import React from 'react'
import { usePlotContext } from 'vizlib'

import { XAxis, YAxis } from './Axis'
import GroupingCircles from './GroupingCircles'
import LOESS from './LOESS'
import PlaymateCircles from './PlaymateCircles'
import useStageData from './useStageData'
import { STAGES } from './util'
import Voronoi from './Voronoi'

const Viz = ({ stage }: { stage: typeof STAGES[number] }) => {
  console.log('viz rendering', stage)

  const { chartHeight, chartWidth } = usePlotContext()

  const { scales, data } = useStageData(stage)

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
            scale={scales.sX}
            stage={stage}
          />
          <XAxis
            //@ts-ignore its fine
            scale={scales.sX}
            stage={stage}
            tickSizeInner={-chartHeight}
            tickFormat={() => ''}
            opacity={0.2}
          />
          <YAxis scale={scales.sY} stage={stage} />
        </>
      )}
      {['hair', 'ethnicity', 'breasts', 'theCup'].includes(stage) && (
        <GroupingCircles
          className="extras"
          data={scales.extras.map(d => ({
            ...d,
            cx: d.x,
            cy: d.y,
            stroke: scales.sC(d.data[0]) as string,
          }))}
          transitionDuration={750}
        />
      )}

      {['mateAge', 'height', 'weight', 'bust', 'waist', 'hips'].includes(
        stage,
      ) && <LOESS sX={scales.sX} sY={scales.sY} stage={stage} />}

      <PlaymateCircles
        data={data}
        r={3}
        transitionDuration={750}
        className="circles"
      />
      <Voronoi data={data} stage={stage} />
    </>
  )
}

export default Viz
