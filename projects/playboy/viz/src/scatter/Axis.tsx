import { range } from 'd3'
import React, { ComponentProps } from 'react'
import { Axis } from 'vizlib'

import { MONTHS } from '../util'

export const XAxis = ({
  stage,
  ...rest
}: {
  stage: string
} & ComponentProps<typeof Axis>) => {
  switch (stage) {
    case 'start':
      return (
        <Axis
          orientation="top"
          tickValues={range(1955, 2021, 5).map(String)}
          tickSizeOuter={0}
          transitionDuration={300}
          {...rest}
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
          orientation="top"
          tickSizeOuter={0}
          transitionDuration={300}
          {...rest}
        />
      )

    default:
      return null
  }
}

export const YAxis = ({
  stage,
  units,
  ...rest
}: {
  stage: string
  units: string
} & ComponentProps<typeof Axis>) => {
  switch (stage) {
    case 'start':
      return (
        <Axis
          orientation="left"
          tickFormat={d => MONTHS[d]}
          transitionDuration={300}
          tickSizeOuter={0}
          {...rest}
        />
      )

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips':
      return (
        <g>
          <Axis
            orientation="left"
            tickSizeOuter={0}
            transitionDuration={300}
            {...rest}
          />
          <text
            y={rest.scale(rest.scale.domain()[0])}
            fill="currentColor"
            fontSize={12}
            dx="12px"
          >
            {units}
          </text>
        </g>
      )

    default:
      return null
  }
}
