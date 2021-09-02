import { Delaunay, pointer } from 'd3'
import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { usePlotContext } from 'vizlib'
import { usePopper } from 'react-popper'
import { Playmate, PlaymateCircle } from '../types'
import PlaymateTooltip from './PlaymateTooltip'
import { STAGES } from './util'

const Voronoi = ({
  data,
  stage,
}: {
  data: PlaymateCircle[]
  stage: typeof STAGES[number]
}) => {
  const plotCtx = usePlotContext()

  const [showing, setShowing] = useState<{
    data: Playmate
    reference: Element
  }>(null)
  const [popper, setPopper] = useState(null)
  const { styles, attributes, forceUpdate } = usePopper(
    showing?.reference,
    popper,
    {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    },
  )
  const [pinned, setPinned] = useState(false)
  const [delaunay, setDelaunay] = useState(
    Delaunay.from(data.map(d => [d.cx, d.cy])),
  )

  useEffect(() => {
    setDelaunay(Delaunay.from(data.map(d => [d.cx, d.cy])))
    setPinned(false)
    setShowing(null)
  }, [stage, plotCtx])

  const ref = useRef(null)
  useEffect(() => {
    const listener = (evt: MouseEvent) => {
      if (!ref.current || ref.current.contains(evt.target)) {
        return
      }

      const possibleTooltip = document.querySelector(
        'div[data-playmatetooltip]',
      )
      if (pinned && !possibleTooltip?.contains(evt.target as Node)) {
        setPinned(false)
        setShowing(null)
      }
    }

    window.addEventListener('click', listener, { capture: true })

    return () => {
      window.removeEventListener('click', listener, { capture: true })
    }
  }, [setPinned, setShowing, pinned, ref.current])

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('playmateCircleHover', {
        detail: showing?.data,
      }),
    )
  }, [showing])

  useEffect(() => {
    if (!pinned) return

    forceUpdate()
  }, [pinned])

  const halfWidth = ['hair', 'ethnicity', 'breasts', 'cup'].includes(stage)

  return (
    <g>
      <rect
        ref={ref}
        x={0 - plotCtx.margin.left}
        y={0 - plotCtx.margin.top}
        width={plotCtx.chartWidth + plotCtx.margin.left + plotCtx.margin.right}
        height={
          plotCtx.chartHeight + plotCtx.margin.top + plotCtx.margin.bottom
        }
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
                `[data-playmate="${d.datum.name}-${d.datum.year}-${d.datum.month}"]`,
              ),
            })
          }
        }}
        onMouseLeave={() => {
          if (pinned) return
          setShowing(null)
        }}
        onClick={evt => {
          if (showing === null) return
          if (pinned) {
            setShowing(null)
            setPinned(false)
          }
          if (!pinned) setPinned(true)
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
            }}
            {...attributes.popper}
          >
            <PlaymateTooltip data={showing.data} pinned={pinned} />
          </div>,
          document.querySelector('body'),
        )}
    </g>
  )
}

export default Voronoi
