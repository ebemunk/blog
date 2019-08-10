import React, { useState } from 'react'
import { format } from 'd3-format'
import { pie, arc } from 'd3-shape'
import { Popper } from 'react-popper'
import ReactDOM from 'react-dom'

import Tooltip from '../../vizlib/Tooltip'
import Legend from '../../vizlib/Legend'
import FlexPlot from '../../vizlib/FlexPlot'
import { colors8, get8 } from '../../vizlib/colors'
import getVirtualReference from '../../vizlib/virtualReference'

const Pie = ({ data }) => {
  const [hint, setHint] = useState(null)
  const colorScale = get8()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Legend
        data={data
          .sort((a, b) => a[1] - b[1])
          .map((d, i) => ({
            title: d[0],
            color: colorScale(d[0]),
          }))}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <FlexPlot height={350} width={350}>
        {({ chartHeight, chartWidth }) => {
          const arcGenerator = arc()
            .innerRadius(125)
            .outerRadius(chartWidth / 2)
            .cornerRadius(5)

          const arcs = pie()
            .value(d => d[1])
            .padAngle(0.01)(data.sort((a, b) => a[1] - b[1]))

          const total = data.reduce((tot, d) => tot + d[1], 0)

          return (
            <>
              <g transform={`translate(${chartWidth / 2},${chartHeight / 2})`}>
                {arcs.map((d, i) => (
                  <path
                    key={d.data[0]}
                    d={arcGenerator(d)}
                    style={{ fill: colorScale(d.data[0]) }}
                    onMouseMove={e =>
                      setHint({
                        d: d,
                        mouse: { x: e.clientX, y: e.clientY },
                      })
                    }
                    onMouseOut={() => setHint(null)}
                  />
                ))}
              </g>
              {hint &&
                ReactDOM.createPortal(
                  <Popper
                    placement="top"
                    referenceElement={getVirtualReference({
                      x: hint.mouse.x,
                      y: hint.mouse.y,
                    })}
                  >
                    {({ ref, style, placement }) => (
                      <Tooltip ref={ref} style={style} placement={placement}>
                        Damage: <strong>{hint.d.data[0]}</strong>
                        <br />
                        Total: <strong>{format(',')(hint.d.data[1])}</strong>
                        <br />
                        Percentage:{' '}
                        <strong>{format('.2%')(hint.d.data[1] / total)}</strong>
                      </Tooltip>
                    )}
                  </Popper>,
                  document.querySelector('body'),
                )}
            </>
          )
        }}
      </FlexPlot>
    </div>
  )
}

export default React.memo(Pie)
