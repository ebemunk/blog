import React, { useState, useContext } from 'react'
import { format } from 'd3-format'

import Voronoi from '../../vizlib/Voronoi'
import Hint from '../../vizlib/Hint'
import Tooltip from '../../vizlib/Tooltip'
import { PlotContext } from '../../vizlib/Plot'

const fmt = format(',')

const Interaction = ({ bins, xScale }) => {
  const [hint, setHint] = useState(null)
  const { chartHeight } = useContext(PlotContext)

  return (
    <>
      <Voronoi
        points={bins.map(bin => {
          return [(xScale(bin.x0) + xScale(bin.x1)) / 2, 0]
        })}
        onMouseMove={(e, point) => {
          const x = xScale.invert(point.x)
          const d = bins.find(bin => x >= bin.x0 && x < bin.x1)
          setHint({
            x: (xScale(d.x0) + xScale(d.x1)) / 2,
            d,
          })
        }}
        onMouseLeave={() => {
          setHint(null)
        }}
      />
      {hint && (
        <Hint x1={hint.x} y1={0} x2={hint.x} y2={chartHeight}>
          <Tooltip>
            Fatalities:{' '}
            <strong>
              {hint.d.x0}-{hint.d.x1}
            </strong>
            <br />
            Frequency: <strong>{fmt(hint.d.length)}</strong>
          </Tooltip>
        </Hint>
      )}
    </>
  )
}

export default React.memo(Interaction)
