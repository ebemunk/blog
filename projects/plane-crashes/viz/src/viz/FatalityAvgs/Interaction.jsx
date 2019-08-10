import React, { useState, useContext } from 'react'

import { PlotContext } from '../../vizlib/Plot'
import Voronoi from '../../vizlib/Voronoi'
import Hint from '../../vizlib/Hint'
import Tooltip from '../../vizlib/Tooltip'

const Interaction = ({ xScale, data, tooltip }) => {
  const [hint, setHint] = useState(null)
  const { chartHeight } = useContext(PlotContext)

  return (
    <>
      <Voronoi
        points={data.map(d => [xScale(d.year), 0])}
        onMouseMove={(e, point) => {
          const x = Math.round(xScale.invert(point.x))
          const d = data.find(d => +d.year === x)
          setHint({
            x: xScale(x),
            data: d,
          })
        }}
        onMouseLeave={() => {
          setHint(null)
        }}
      />

      {hint && (
        <Hint x1={hint.x} y1={0} x2={hint.x} y2={chartHeight}>
          <Tooltip>{tooltip(hint.data)}</Tooltip>
        </Hint>
      )}
    </>
  )
}

export default React.memo(Interaction)
