import React, { ReactNode, SVGProps } from 'react'
import merge from 'lodash-es/merge'

import PlotContext from './PlotContext'
import { marginDefaults } from './const'

import { Margin } from './types'

interface SvgProps {
  margin?: Margin | number
  children: ReactNode
  width: number
  height: number
}

export type Props = SvgProps & SVGProps<SVGSVGElement>

const Svg = ({ children, margin = {}, width, height, ...rest }: Props) => {
  const ref = React.useRef<SVGSVGElement>(null)

  const margins =
    typeof margin === 'number'
      ? { top: margin, right: margin, bottom: margin, left: margin }
      : merge({}, marginDefaults, margin)

  const chartWidth = width - margins.left - margins.right
  const chartHeight = height - margins.top - margins.bottom

  if (chartWidth <= 0 || chartHeight <= 0) return null

  const transform = `translate(${margins.left}, ${margins.top})`

  return (
    <PlotContext.Provider
      value={{
        transform,
        chartWidth,
        chartHeight,
        margin: margins,
        getBoundingClientRect: () => ref?.current?.getBoundingClientRect(),
      }}
    >
      <svg width={width} height={height} ref={ref} {...rest}>
        <g transform={transform}>{children}</g>
      </svg>
    </PlotContext.Provider>
  )
}

export default Svg
