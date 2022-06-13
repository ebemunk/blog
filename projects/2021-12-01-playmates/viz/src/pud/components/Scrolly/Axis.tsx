import React, { ComponentProps } from 'react'
import { Axis } from 'vizlib'
import { useYearTickValues } from '../../hooks'
import { PointSteps, ScatterSteps, Step } from './types'
import { isInStepCategory, MONTHS } from './util'

export const XAxis = ({
  step,
  ...rest
}: {
  step: Step
} & Omit<ComponentProps<typeof Axis>, 'orientation'>) => {
  const xTickValues = useYearTickValues()

  switch (step) {
    case isInStepCategory(step, PointSteps):
    case isInStepCategory(step, ScatterSteps):
      return (
        <Axis
          orientation="top"
          tickSizeOuter={0}
          transitionDuration={300}
          tickValues={xTickValues.map(d => new Date(d, 0, 1))}
          style={{
            transform: `translate(0, 0)`,
            transition: 'transform 750ms',
          }}
          {...rest}
        />
      )

    default:
      return null
  }
}

export const YAxis = ({
  step,
  units,
  ...rest
}: {
  step: Step
  units?: string
} & Omit<ComponentProps<typeof Axis>, 'orientation'>) => {
  switch (step) {
    case isInStepCategory(step, PointSteps):
      return (
        <Axis
          orientation="left"
          tickFormat={d => MONTHS[d]}
          transitionDuration={300}
          tickSizeOuter={0}
          {...rest}
        />
      )

    case isInStepCategory(step, ScatterSteps):
      return (
        <g>
          <Axis
            orientation="left"
            tickSizeOuter={0}
            transitionDuration={300}
            {...rest}
          />
          {units && (
            <text
              y={rest.scale(rest.scale.domain()[0])}
              fill="currentColor"
              fontSize={12}
              dx="6px"
            >
              {units}
            </text>
          )}
        </g>
      )

    default:
      return null
  }
}
