import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePopper } from 'react-popper'
import { usePlotContext } from 'vizlib'
import { Playmate } from '../../data/data'
import { PLAYMATE_PINK } from '../../util'
import PlaymateTooltip from '../PlaymateTooltip'
import AliChanel from './AliChanel.webp'
import CarmellaDeCesare from './CarmellaDeCesare.webp'
import CarmenBerg from './CarmenBerg.webp'
import ChrisKoren from './ChrisKoren.webp'
import GeenaRocero from './GeenaRocero.webp'
import GraceKim from './GraceKim.webp'
import IdaLjungqvist from './IdaLjungqvist.webp'
import KatherineHushaw from './KatherineHushaw.webp'
import LizStewart from './LizStewart.webp'
import PhyllisColeman from './PhyllisColeman.webp'

const R = 15
const images = {
  'Ali Chanel': AliChanel,
  'Geena Rocero': GeenaRocero,
  'Carmella DeCesare': CarmellaDeCesare,
  'Grace Kim': GraceKim,
  'Ida Ljungqvist': IdaLjungqvist,
  'Katherine Hushaw': KatherineHushaw,
  'Liz Stewart': LizStewart,
  'Phyllis Coleman': PhyllisColeman,
  'Carmen Berg': CarmenBerg,
  'Chris Koren': ChrisKoren,
}

export default function Lollipop({
  x1,
  y1,
  y2,
  data,
}: {
  x1: number
  y1: number
  y2: number
  data: Playmate
}) {
  const { chartWidth } = usePlotContext()
  const [pinned, setPinned] = useState(false)
  const [showing, setShowing] = useState(false)
  const [popper, setPopper] = useState(null)
  const refRef = useRef(null)
  const { styles, attributes, forceUpdate } = usePopper(
    refRef.current,
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
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
          },
        },
      ],
    },
  )

  useEffect(() => {
    if (!pinned) return

    forceUpdate()
  }, [pinned])

  useEffect(() => {
    const listener = (evt: MouseEvent) => {
      const possibleTooltip = document.querySelector(
        'div[data-playmatetooltip]',
      )
      if (pinned && !possibleTooltip?.contains(evt.target as Node)) {
        setPinned(false)
        setShowing(null)
      }
    }

    window?.addEventListener('click', listener, { capture: true })

    return () => {
      window?.removeEventListener('click', listener, { capture: true })
    }
  }, [setPinned, setShowing, pinned])

  return (
    <g>
      <pattern
        id={`mostleast-image-${data.year}-${data.month}`}
        x={x1 - R}
        y={y1 - R}
        width="100%"
        height="100%"
        patternUnits="userSpaceOnUse"
      >
        <image
          x="0"
          y="0"
          xlinkHref={images[data.name]}
          height={R * 2}
          width={R * 2}
        />
      </pattern>
      <line
        x1={x1}
        y1={y1}
        x2={chartWidth}
        y2={y2}
        stroke={PLAYMATE_PINK}
        strokeDasharray="5, 5"
      />
      <circle
        cx={x1}
        cy={y1}
        r={R}
        fill={`url(#mostleast-image-${data.year}-${data.month})`}
        stroke={showing ? 'white' : PLAYMATE_PINK}
        strokeWidth={2}
        ref={refRef}
        onMouseOver={() => setShowing(true)}
        onMouseOut={() => {
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
            <PlaymateTooltip data={data} pinned={pinned} />
          </div>,
          document.querySelector('body'),
        )}
    </g>
  )
}
