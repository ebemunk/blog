import React from 'react'

import useDimensions from './useDimensions'
import Svg, { Props as SvgProps } from './Svg'

import { Margin } from './types'

export interface Props {
  margin?: Margin | number
}

export const ResponsiveSvg = ({
  children,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  ...rest
}: Props & Omit<SvgProps, 'width' | 'height'>) => {
  const [ref, dims] = useDimensions()

  return (
    <div style={{ height: '100%', width: '100%' }} ref={ref}>
      <Svg
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
      </Svg>
    </div>
  )
}

export default ResponsiveSvg
