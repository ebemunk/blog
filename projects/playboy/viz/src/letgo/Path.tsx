import React from 'react'
import * as d3 from 'd3'

const Path = ({ data, generator, transitionDuration, ...rest }) => {
  const ref = React.useRef<SVGPathElement>(null)

  React.useEffect(() => {
    if (!ref.current) return

    d3.select(ref.current) //
      .transition()
      .duration(transitionDuration)
      .attr('d', generator(data))
  })

  return <path ref={ref} {...rest} />
}

export default Path
