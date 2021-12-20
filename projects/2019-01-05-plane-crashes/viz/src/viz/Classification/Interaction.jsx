import React from 'react'
import ReactDOM from 'react-dom'
import { Popper, Manager, Reference } from 'react-popper'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

import Tooltip from '../../vizlib/Tooltip'
import Voronoi from '../../vizlib/Voronoi'

const Interaction = ({ nodes, hint, setHint, r, links, color }) => {
  const shownLinks = hint
    ? links.filter(d => d.source.id === hint.id || d.target.id === hint.id)
    : []

  const linkNodes = [
    ...new Set(
      shownLinks.reduce((acc, d) => [...acc, d.source.id, d.target.id], []),
    ),
  ]

  const opacity = scaleLinear()
    .domain(extent(shownLinks.map(d => d.count)))
    .range([0.5, 1])

  return (
    <>
      <Voronoi
        points={nodes.map(d => {
          const arr = [d.x, d.y]
          arr.id = d.id
          arr.links = d.links
          return arr
        })}
        onMouseEnter={(e, mouse, polygon) => {
          setHint({
            x: polygon.data[0],
            y: polygon.data[1],
            r: r(polygon.data.links),
            id: polygon.data.id,
          })
        }}
        onMouseLeave={() => {
          setHint(null)
        }}
      />

      {hint &&
        shownLinks.map(link => (
          <line
            key={`${link.source.id}-${link.target.id}`}
            x1={link.source.x}
            y1={link.source.y}
            x2={link.target.x}
            y2={link.target.y}
            style={{
              stroke: 'white',
              opacity: opacity(link.count),
              pointerEvents: 'none',
            }}
          />
        ))}

      {hint &&
        linkNodes
          .map(d => nodes.find(dd => dd.id === d))
          .map(d => (
            <circle
              key={d.id}
              cx={d.x}
              cy={d.y}
              r={r(d.links)}
              style={{
                fill: color(d.id),
                pointerEvents: 'none',
                opacity: 0.7,
              }}
            />
          ))}

      {hint && (
        <Manager>
          <Reference>
            {({ ref }) => (
              <circle
                ref={ref}
                cx={hint.x}
                cy={hint.y}
                r={hint.r}
                style={{
                  fill: color(hint.id),
                  pointerEvents: 'none',
                }}
              />
            )}
          </Reference>
          {ReactDOM.createPortal(
            <Popper placement="top">
              {({ ref, style, placement }) => (
                <Tooltip
                  ref={ref}
                  style={style}
                  placement={placement}
                  key={hint.id}
                >
                  {hint.id}
                </Tooltip>
              )}
            </Popper>,
            document.querySelector('body'),
          )}
        </Manager>
      )}
    </>
  )
}

import { compose, withState } from 'recompose'

export default compose()(Interaction)
//
// withState('hint', 'setHint', null),
