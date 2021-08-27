import { range } from 'd3'
import React from 'react'
import { Axis } from 'vizlib'

import { MONTHS } from '../util'

export const XAxis = ({ stage, scale }) => {
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

export const YAxis = ({ stage, scale }) => {
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
