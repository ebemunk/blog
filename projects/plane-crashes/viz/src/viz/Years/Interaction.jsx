import React, { useState, useContext } from 'react'
import { format } from 'd3-format'

import { PlotContext } from '../../vizlib/Plot'
import Voronoi from '../../vizlib/Voronoi'
import Hint from '../../vizlib/Hint'
import Tooltip from '../../vizlib/Tooltip'

const formatCount = format(',')

const Interaction = ({ xScale, data }) => {
  const [hint, setHint] = useState(null)
  const { chartHeight } = useContext(PlotContext)

  if (hint) {
    const d = data.find(d => d.year === hint.data.year)
    if (d && d.total !== hint.data.total) {
      setHint({
        x: xScale(d.year),
        data: d,
      })
    }
  }

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
          <Tooltip>
            Year: <strong>{hint.data.year}</strong>
            <br />
            Crashes: <strong>{formatCount(hint.data.crashes)}</strong>
            <br />
            Fatalities: <strong>{formatCount(hint.data.total)}</strong>
            <br />
            Ground Fatalities: <strong>{formatCount(hint.data.ground)}</strong>
          </Tooltip>
        </Hint>
      )}
    </>
  )
}

export default React.memo(Interaction)
