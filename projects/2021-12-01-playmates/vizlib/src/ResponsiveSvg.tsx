import React from 'react'

import useDimensions from './useDimensions'
import Svg, { Props as SvgProps } from './Svg'

import { Margin } from './types'

export interface Props {
  margin?: Margin | number
  aspectRatio?: number
  maxWidth?: number
  maxHeight?: number
}

// aspect = width / height

const ResponsiveSvg = ({
  children,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  aspectRatio,
  maxWidth = Infinity,
  maxHeight = Infinity,
  ...rest
}: Props & Omit<SvgProps, 'width' | 'height'>) => {
  const [ref, dims] = useDimensions()

  let height = Math.min(maxHeight, dims.height)
  let width = Math.min(maxWidth, dims.width)

  if (aspectRatio) {
    height = Math.min(maxHeight, width / aspectRatio)
  }

  return (
    <div style={{ height: '100%', width: '100%' }} ref={ref}>
      <Svg
        {...rest}
        height={height}
        width={width}
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
