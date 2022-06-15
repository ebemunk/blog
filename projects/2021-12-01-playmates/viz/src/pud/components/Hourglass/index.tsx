import React from 'react'
import { default as HourglassViz } from './Hourglass'

export interface Viz {
  type: 'viz'
  value: {
    title: string
    subtitle: string
    caption: string
  }
}

export default function Hourglass() {
  return <HourglassViz />
}
