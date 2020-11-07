import React from 'react'
import * as d3 from 'd3'
import 'd3-transition'

// import { Path } from '@xmatters/vizlib'

import loessData from '../../loess.json'
import { get, data } from '../data'
import accessors from './accessors'

const Path = ({ data, generator, ...rest }) => {
  const ref = React.useRef<SVGPathElement>(null)

  React.useEffect(() => {
    if (!ref.current) return

    d3.select(ref.current) //
      .transition()
      .attr('d', generator(data))
  })

  return <path ref={ref} {...rest} />
}

const LOESS = ({ stage, sX, sY, yA }) => {
  const ld = loessData.find(d => d.key === stage)

  if (!ld) return null

  const {
    loess: { fitted, halfwidth },
  } = ld

  const dd = get(accessors(stage)[1])

  return (
    <>
      <Path
        data={dd.map((d, i) => [
          sX(d[0]),
          sY(fitted[i] - halfwidth[i]),
          sY(fitted[i] + halfwidth[i]),
        ])}
        generator={d3
          .area<[number, number, number]>()
          .x(d => d[0])
          .y0(d => d[1])
          .y1(d => d[2])}
        style={{
          opacity: 0.4,
          fill: 'gray',
        }}
      />
      <Path
        data={dd.map((d, i) => [sX(d[0]), sY(fitted[i])])}
        generator={d3.line()}
        style={{
          stroke: 'red',
          strokeWidth: 4,
          fill: 'none',
          opacity: 0.6,
        }}
      />
    </>
  )
}

export default LOESS
