import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Popper } from 'react-popper'
import { curveMonotoneX, line as d3Line } from 'd3-shape'

import data from '../../data/operator-by-year.json'
const allData = [...data.military, ...data.nonmilitary]

import Voronoi from '../../vizlib/Voronoi'
import Tooltip from '../../vizlib/Tooltip'
import getVirtualReference from '../../vizlib/virtualReference'
import { blueRed } from '../../vizlib/colors'

const color = blueRed()

const Interaction = ({ xScale, yScale, hint }) => {
  const [hl, setHl] = useState({})

  const hlIndex = hint ? allData.findIndex(([key]) => key === hl.key) : false
  const hlIsMil = hint ? hlIndex < 20 : false
  const highlighted = hint ? allData[hlIndex] : false
  const line = d3Line().curve(curveMonotoneX)

  return (
    <>
      {hint && highlighted && (
        <path
          key={highlighted[0]}
          d={line(highlighted[1].map(d => [xScale(d.year), yScale(+d.count)]))}
          style={{
            stroke: hlIsMil ? color(1) : color(0),
            strokeWidth: 3,
            fill: 'none',
          }}
        />
      )}

      {hint &&
        hl.key &&
        ReactDOM.createPortal(
          <Popper
            placement="top"
            referenceElement={getVirtualReference({
              x: hl.mouse.x,
              y: hl.mouse.y,
            })}
          >
            {({ ref, style, placement }) => (
              <Tooltip ref={ref} style={style} placement={placement}>
                Operator: <strong>{hl.key}</strong>
                <br />
                Year: <strong>{hl.year}</strong>
                <br />
                Crashes: <strong>{hl.count}</strong>
              </Tooltip>
            )}
          </Popper>,
          document.querySelector('body'),
        )}

      {hint && hl.key && (
        <circle
          cx={hl.x}
          cy={hl.y}
          r={4}
          style={{
            fill: hlIsMil ? color(1) : color(0),
            stroke: '#282c34',
            strokeWidth: 2,
          }}
        />
      )}

      <Voronoi
        points={allData.reduce(
          (ac, [k, arr]) =>
            ac.concat(
              arr.map(d => {
                const ar = [xScale(d.year), yScale(+d.count)]
                ar.key = k
                ar.year = d.year
                ar.count = +d.count
                return ar
              }),
            ),
          [],
        )}
        onMouseEnter={(e, point, polygon) => {
          setHl({
            key: polygon.data.key,
            year: polygon.data.year,
            count: polygon.data.count,
            x: polygon.data[0],
            y: polygon.data[1],
            mouse: { x: e.clientX, y: e.clientY },
          })
        }}
        onMouseMove={(e, point, polygon) => {
          setHl({
            key: polygon.data.key,
            year: polygon.data.year,
            count: polygon.data.count,
            x: polygon.data[0],
            y: polygon.data[1],
            mouse: { x: e.clientX, y: e.clientY },
          })
        }}
      />
    </>
  )
}

export default React.memo(Interaction)
