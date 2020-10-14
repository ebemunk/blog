import * as React from 'react'
import { ChartOptions } from './types'

const useChart = (options?: ChartOptions) => {
  const margin = { top: 0, right: 0, bottom: 0, left: 0, ...options.margin }
  const ref = React.useRef<SVGGElement>()

  return {
    ref,
    margin,
    chartWidth: options.width - (margin.left + margin.right),
    chartHeight: options.height - (margin.top + margin.bottom),
    Chart: props => (
      <g
        ref={ref}
        transform={`translate(${margin.left},${margin.top})`}
        {...props}
      />
    ),
  }
}

export default useChart
