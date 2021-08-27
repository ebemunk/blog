import { Delaunay, pointer } from 'd3'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { usePlotContext } from 'vizlib'
import { usePopper } from 'react-popper'
import { Playmate, PlaymateCircle } from '../types'

const Voronoi = ({ data }: { data: PlaymateCircle[] }) => {
  const plotCtx = usePlotContext()

  const [showing, setShowing] = useState<{
    data: Playmate
    reference: Element
  }>(null)
  const [popper, setPopper] = useState(null)
  const { styles, attributes } = usePopper(showing?.reference, popper)
  const [pinned, setPinned] = useState(false)
  const [delaunay, setDelaunay] = useState(
    Delaunay.from(data.map(d => [d.cx, d.cy])),
  )

  useEffect(() => {
    setDelaunay(Delaunay.from(data.map(d => [d.cx, d.cy])))
    setPinned(false)
    setShowing(null)
  }, [data[0].cx])

  return (
    <g>
      <rect
        x={0}
        y={0}
        width={plotCtx.chartWidth}
        height={plotCtx.chartHeight}
        onMouseMove={evt => {
          if (pinned) return

          const [mx, my] = pointer(evt)
          const idx = delaunay.find(mx, my)
          const d = data[idx]

          const dist = Math.sqrt(
            Math.pow(mx - d.cx, 2) + Math.pow(my - d.cy, 2),
          )

          if (dist > 50) {
            setShowing(null)
            return
          }

          if (showing?.data.name !== d.datum.name) {
            setShowing({
              data: d.datum,
              reference: document.querySelector(
                `[data-playmate="${d.datum.name}"]`,
              ),
            })
          }
        }}
        onMouseLeave={() => {
          if (pinned) return
          setShowing(null)
        }}
        onClick={() => {
          setPinned(!pinned)
        }}
        fill="transparent"
        pointerEvents="all"
      />
      {showing &&
        createPortal(
          <div
            ref={setPopper}
            style={{
              ...styles.popper,
              pointerEvents: pinned ? 'auto' : 'none',
              background: 'black',
            }}
            {...attributes.popper}
          >
            {showing.data.name}
          </div>,
          document.querySelector('body'),
        )}
    </g>
  )
}

export default Voronoi
