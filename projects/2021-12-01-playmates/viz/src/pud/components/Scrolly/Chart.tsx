import { select } from 'd3'
import React, { lazy, Suspense, useEffect, useRef } from 'react'
import { usePlotContext } from 'vizlib'
import { Store, useIsMetric } from '../../../store'
import { useWindowSize } from '../../hooks'
import { formatFeetIn } from '../../util'
import { XAxis, YAxis } from './Axis'
import Bars from './Bars'
import GroupingCircles from './GroupingCircles'
import HefnerDeath from './HefnerDeath'
import PlaymateCircles from './PlaymateCircles'
import { GroupingSteps, PointSteps, ScatterSteps, Step } from './types'
import USAverage from './USAverage'
import useData from './useData'
import { STEP_UNITS } from './util'
import Voronoi from './Voronoi'

const LOESS = lazy(() => import('./LOESS'))

export default function Chart({
  step,
  playmateCircleSize = 3,
  forceFewerTicks = false,
}: {
  step: Step
  playmateCircleSize?: number
  forceFewerTicks?: boolean
}) {
  const { chartHeight, chartWidth } = usePlotContext()
  const { scales, data, accessors } = useData(step)
  const units = Store.useState(state => state.units)
  const isMetric = useIsMetric()

  const ageRef = useRef()
  useEffect(() => {
    if (step !== Step.Age) return

    select(ageRef.current)
      .transition()
      .delay(750 * 2)
      .duration(750)
      .attr('fill-opacity', 0.2)
  }, [step])

  const ws = useWindowSize()
  const isSm = ws.width < 768

  return (
    <>
      <XAxis
        //@ts-ignore
        scale={scales.sX}
        step={step}
      />
      {[...PointSteps, ...ScatterSteps].includes(step) && (
        <>
          <XAxis
            //@ts-ignore
            scale={scales.sX}
            step={step}
            tickSizeInner={-chartHeight}
            tickFormat={() => ''}
            opacity={0.2}
          />

          <YAxis
            //@ts-ignore its fine
            scale={scales.sY}
            step={step}
            units={STEP_UNITS[units][step]}
            {...(step === Step.Height && !isMetric
              ? {
                  tickFormat: formatFeetIn,
                }
              : {})}
          />
          <YAxis
            //@ts-ignore its fine
            scale={scales.sY}
            step={step}
            tickSizeInner={-chartWidth}
            tickFormat={() => ''}
            opacity={0.2}
          />
        </>
      )}

      {[Step.Hefner, ...ScatterSteps].includes(step) && (
        <HefnerDeath step={step} sX={scales.sX} />
      )}

      {step === Step.Age && (
        <rect
          ref={ageRef}
          x={0}
          y={scales.sY(18)}
          width={chartWidth}
          height={chartHeight - scales.sY(18)}
          fill="red"
          fillOpacity={0}
        />
      )}

      {step === Step.Height && (
        <USAverage value={scales.sY(isMetric ? 162.6 : 64)} />
      )}

      {step === Step.Weight && (
        <USAverage value={scales.sY(isMetric ? 74.9 : 165)} />
      )}

      {ScatterSteps.includes(step) && (
        <Suspense fallback={null}>
          <LOESS sX={scales.sX} sY={scales.sY} step={step} />
        </Suspense>
      )}

      {GroupingSteps.includes(step) && (
        <>
          <GroupingCircles
            data={scales.extras.map(d => ({
              ...d,
              cx: d.x,
              cy: d.y,
              stroke: scales.sC(d.data[0].toString()) as string,
            }))}
            transitionDuration={750}
          />
          <Bars
            width={isSm ? chartWidth : chartWidth / 2 - 40}
            height={
              isSm
                ? chartHeight / 2 / 1.6
                : Math.min(chartWidth / 2 / 1.6, chartHeight)
            }
            accessor={accessors.cA}
            // @ts-ignore
            colorScale={scales.sC}
            transform={
              isSm
                ? `translate(10,${chartHeight / 2})`
                : `translate(${chartWidth / 2 + 25},${
                    (chartHeight -
                      Math.min(chartWidth / 2 / 1.6, chartHeight)) /
                    2
                  })`
            }
            forceFewerTicks={forceFewerTicks}
          />
        </>
      )}

      <PlaymateCircles
        data={data}
        r={playmateCircleSize}
        transitionDuration={750}
      />
      <Voronoi data={data} step={step} />
    </>
  )
}
