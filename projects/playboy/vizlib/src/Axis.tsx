import React, { SVGProps, useLayoutEffect, useRef } from 'react'
import { axisTop, axisRight, axisBottom, axisLeft, select } from 'd3'

const AXIS_TYPE = {
  top: axisTop,
  right: axisRight,
  bottom: axisBottom,
  left: axisLeft,
}

const Axis = ({
  orientation,
  scale,
  ticks = null,
  tickSize = 6,
  tickSizeInner = 6,
  tickSizeOuter = 6,
  tickFormat = null,
  tickValues = null,
  tickPadding = 3,
  tickArguments = null,
  offset = null,
  transitionDuration = 0,
  ...otherProps
}: {
  orientation: keyof typeof AXIS_TYPE
  scale: d3.AxisScale<any>
  ticks?: any
  tickSize?: number
  tickSizeInner?: number
  tickSizeOuter?: number
  tickFormat?: any
  tickValues?: any
  tickPadding?: number
  tickArguments?: any
  offset?: any
  transitionDuration?: number
} & SVGProps<SVGGElement>) => {
  const ref = useRef<SVGGElement>(null)

  useLayoutEffect(() => {
    if (!ref.current) return

    const axis = AXIS_TYPE[orientation](scale)
      .ticks(ticks)
      .tickSize(tickSize)
      .tickSizeInner(tickSizeInner)
      .tickSizeOuter(tickSizeOuter)
      .tickFormat(tickFormat)
      .tickValues(tickValues)
      .tickPadding(tickPadding)
      .tickArguments(tickArguments)
      .offset(offset)

    select<SVGGElement, any>(ref.current)
      .transition()
      .duration(transitionDuration)
      .call(axis)
  }, [
    orientation,
    scale,
    ticks,
    tickSize,
    tickSizeInner,
    tickSizeOuter,
    tickFormat,
    tickValues,
    tickPadding,
    offset,
    tickArguments,
    transitionDuration,
  ])

  return <g key={orientation} ref={ref} {...otherProps} />
}

export default Axis
