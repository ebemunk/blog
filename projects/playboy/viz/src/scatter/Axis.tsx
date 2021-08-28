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

export const YAxis = ({ stage, scale }) => {
  switch (stage) {
    case 'start':
      return (
        <Axis
          scale={scale}
          orientation="left"
          tickFormat={d => MONTHS[d]}
          transitionDuration={300}
          tickSizeOuter={0}
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
