import React, { useState, useContext } from 'react'
import { format } from 'd3-format'

import { PlotContext } from '../../vizlib/Plot'
import Voronoi from '../../vizlib/Voronoi'
import Hint from '../../vizlib/Hint'
import Tooltip from '../../vizlib/Tooltip'
import { scaleBandInvert } from '../../vizlib/util'

import PhaseDiagram from './PhaseDiagram'

const Interaction = ({ data, xScale }) => {
  const [hint, setHint] = useState(null)
  const { chartHeight } = useContext(PlotContext)

  const invertXScale = scaleBandInvert(xScale)

  return (
    <>
      {hint && (
        <Hint
          x1={hint.x}
          y1={0}
          x2={hint.x}
          y2={chartHeight}
          hintStyle={{
            pointerEvents: 'none',
          }}
        >
          <Tooltip>
            Phase: <strong>{hint.data[0]}</strong>
            <br />
            Crashes: <strong>{format(',')(hint.data[1])}</strong>
            <br />
            Avg. Fatalities: <strong>{format('.2f')(hint.data[2])}</strong>
          </Tooltip>
        </Hint>
      )}

      <PhaseDiagram xScale={xScale} hint={hint} />

      <Voronoi
        points={data.map(d => {
          return [xScale(d[0]) + xScale.bandwidth() / 2, 0]
        })}
        onMouseMove={(e, point) => {
          const x = invertXScale(point.x)
          const d = data.find(datum => datum[0] === x)
          setHint({
            x: xScale(x) + xScale.bandwidth() / 2,
            data: d,
          })
        }}
        onMouseLeave={() => {
          setHint(null)
        }}
      />
    </>
  )
}

export default React.memo(Interaction)
