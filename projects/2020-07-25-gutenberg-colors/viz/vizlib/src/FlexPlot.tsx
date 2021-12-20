import React from 'react'

import useDimensions from './useDimensions'
import Plot, { Props as PlotProps } from './Plot'

import { Margin } from './types'

export interface Props {
  margin?: Margin | number
}

export const FlexPlot = ({
  children,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  ...rest
}: Props & Omit<PlotProps, 'width' | 'height'>) => {
  const [ref, dims] = useDimensions()

  return (
    <div style={{ height: '100%', width: '100%' }} ref={ref}>
      <Plot
        {...rest}
        height={dims.height}
        width={dims.width}
        margin={
          typeof margin === 'number'
            ? { top: margin, right: margin, bottom: margin, left: margin }
            : margin
        }
      >
        {children}
      </Plot>
    </div>
  )
}

export default FlexPlot
