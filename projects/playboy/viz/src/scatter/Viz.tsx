import React from 'react'
import { usePlotContext } from 'vizlib'

import { XAxis, YAxis } from './Axis'
import Bars from './Bars'
import GroupingCircles from './GroupingCircles'
import LOESS from './LOESS'
import PlaymateCircles from './PlaymateCircles'
import useStageData from './useStageData'
import { STAGES, STAGE_UNITS } from './util'
import Voronoi from './Voronoi'
import { data as fullData } from '../data'
import { format } from 'd3-format'
import { Store } from '../store'

const Viz = ({ stage }: { stage: typeof STAGES[number] }) => {
  console.log('viz rendering', stage)

  const { chartHeight, chartWidth } = usePlotContext()

  const { scales, data, accessors } = useStageData(stage)

  const pct = format('.0%')(data.length / fullData.length)

  const units = Store.useState(s => s.units)

  return (
    <>
      <text
        fill="white"
        x={chartWidth}
        y={chartHeight}
        textAnchor="end"
        alignmentBaseline="baseline"
        fontSize={12}
      >
        {pct} data ({data.length} of {fullData.length} total)
      </text>
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
          <YAxis
            //@ts-ignore its fine
            scale={scales.sY}
            stage={stage}
            units={STAGE_UNITS[units][stage]}
          />
          <YAxis
            //@ts-ignore its fine
            scale={scales.sY}
            stage={stage}
            tickSizeInner={-chartWidth}
            tickFormat={() => ''}
            opacity={0.2}
          />
        </>
      )}
      {['hair', 'ethnicity', 'breasts', 'cup'].includes(stage) && (
        <>
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
          <Bars
            width={chartWidth / 2 - 40}
            height={Math.min(chartWidth / 2 / 1.6, chartHeight)}
            accessor={accessors.cA}
            colorScale={scales.sC}
            transform={`translate(${chartWidth / 2 + 20},${
              (chartHeight - Math.min(chartWidth / 2 / 1.6, chartHeight)) / 2
            })`}
          />
        </>
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
