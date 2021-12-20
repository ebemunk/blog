import React from 'react'
import { usePlotContext } from 'vizlib'

import { XAxis, YAxis } from './Axis'
import Bars from './Bars'
import GroupingCircles from './GroupingCircles'
import LOESS from './LOESS'
import PlaymateCircles from './PlaymateCircles'
import useStageData from './useStageData'
import { formatFeetIn, STAGES, STAGE_UNITS } from './util'
import Voronoi from './Voronoi'
import { data as fullData } from '../data'
import { format } from 'd3-format'
import { Store } from '../store'
import { useRef } from 'react'
import { useEffect } from 'react'
import * as d3 from 'd3'

const useOpacityTransition = (
  condition,
  { delay = 0, duration = 750 } = {},
) => {
  const ref = useRef()
  useEffect(() => {
    if (!condition) return

    d3.select(ref.current)
      .transition()
      .delay(delay)
      .duration(duration)
      .attr('opacity', 1)
  }, [condition])
  return ref
}

const Viz = ({
  stage,
  subStage,
}: {
  stage: typeof STAGES[number]
  subStage: string
}) => {
  const { chartHeight, chartWidth } = usePlotContext()

  const { scales, data, accessors } = useStageData(stage)

  const pct = format('.0%')(data.length / fullData.length)

  const units = Store.useState(s => s.units)
  const isMetric = units === 'metric'

  const yikesRef = useRef()
  useEffect(() => {
    if (stage !== 'mateAge') return

    d3.select(yikesRef.current)
      .transition()
      .delay(750 * 2)
      .duration(750)
      .attr('fill-opacity', 0.2)
  }, [stage])

  const avgHeightRef = useOpacityTransition(stage === 'height')
  const avgWeightRef = useOpacityTransition(stage === 'weight')
  const avgWaistRef = useOpacityTransition(stage === 'waist')

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
          <YAxis
            //@ts-ignore its fine
            scale={scales.sY}
            stage={stage}
            units={STAGE_UNITS[units][stage]}
            {...(stage === 'height' && units !== 'metric'
              ? {
                  tickFormat: formatFeetIn,
                }
              : {})}
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
      {(['mateAge', 'height', 'weight', 'bust', 'waist', 'hips'].includes(
        stage,
      ) ||
        (stage === 'start' && subStage === 'hugh')) && (
        <>
          <g
            transform={`translate(${scales.sX(
              stage === 'start' ? '2017' : new Date(2017, 8, 27),
            )},0)`}
          >
            <line x1={0} y1={0} x2={0} y2={chartHeight} stroke="white" />
            <text
              fill="white"
              fontSize={11}
              transform="rotate(90)"
              dx={6}
              dy={-4}
            >
              Hugh Hefner dies Sept 27, 2017
            </text>
          </g>
        </>
      )}
      {stage === 'mateAge' && (
        <>
          <rect
            ref={yikesRef}
            x={0}
            y={scales.sY(18)}
            width={chartWidth}
            height={chartHeight - scales.sY(18)}
            fill="red"
            fillOpacity={0}
          />
        </>
      )}
      {stage === 'height' && (
        <g
          transform={`translate(0,${scales.sY(isMetric ? 162.6 : 64)})`}
          color="rgb(237, 201, 73)"
          ref={avgHeightRef}
          opacity={0}
        >
          <line
            x1={0}
            x2={chartWidth}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeOpacity={0.7}
            strokeDasharray="5 5"
          />
          <text
            fill="currentColor"
            fontSize={12}
            dy={4}
            dominantBaseline="hanging"
            textAnchor="end"
            x={chartWidth}
          >
            Average for US Women 20-29 between 2015-2018
          </text>
        </g>
      )}
      {stage === 'weight' && (
        <g
          transform={`translate(0,${scales.sY(isMetric ? 74.9 : 165)})`}
          color="rgb(237, 201, 73)"
          ref={avgWeightRef}
          opacity={0}
        >
          <line
            x1={0}
            x2={chartWidth}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeOpacity={0.7}
            strokeDasharray="5 5"
          />
          <text
            fill="currentColor"
            fontSize={12}
            dy={4}
            dominantBaseline="hanging"
            textAnchor="end"
            x={chartWidth}
          >
            Average for US Women 20-29 between 2015-2018
          </text>
        </g>
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