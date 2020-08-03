import * as React from 'react'

import { Axis, AxisProps } from '@xmatters/vizlib'

export const WAxis = (props: AxisProps) => (
  <Axis
    domainProps={{
      style: {
        stroke: 'white',
      },
    }}
    tickProps={{
      style: {
        stroke: 'white',
      },
    }}
    markProps={{ style: { stroke: 'white' } }}
    {...props}
  />
)
