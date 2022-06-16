import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePopper } from 'react-popper'
import * as d3 from 'd3'

import { Playmate } from '../types'
import { PLAYMATE_PINK } from '../util'
import PlaymateTooltip from '../pud/components/PlaymateTooltip'

const Circle = ({ d }) => {
  const [pinned, setPinned] = useState(false)
  const [showing, setShowing] = useState<{
    data: Playmate
    reference: Element
  }>(null)
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
      ],
    },
  )

  useEffect(() => {
    if (!pinned) return

    forceUpdate()
  }, [pinned])

  useEffect(() => {
    const listener = (evt: MouseEvent) => {
      if (!showing) return

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
    <>
      <div
        ref={refRef}
        style={{
          height: '8px',
          width: '8px',
          borderRadius: '100%',
          background: showing?.data.name === d.name ? 'white' : PLAYMATE_PINK,
          margin: 1,
        }}
        data-playmate={d.name}
        onMouseOver={evt => {
          if (pinned) return

          setShowing({
            data: d,
            reference: document.querySelector(
              `.bins [data-playmate="${d.name}"]`,
            ),
          })
        }}
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
            <PlaymateTooltip data={showing.data} pinned={pinned} />
          </div>,
          document.querySelector('body'),
        )}
    </>
  )
}

const Bins = ({ data }) => {
  const [expanded, setExpanded] = useState(false)

  const total = d3.sum(Array.from(data.values()), d => d.length)

  return (
    <div
      style={{
        width: '100vw',
        maxWidth: '800px',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        marginBottom: '1rem',
      }}
      className="bins"
    >
      <div
        style={{
          height: expanded ? 'auto' : '250px',
          overflow: expanded ? 'auto' : 'hidden',
          overflowY: 'scroll',
        }}
      >
        {Array.from(data.entries())
          .sort((a, b) => {
            const lendiff = b[1].length - a[1].length
            if (lendiff !== 0) return lendiff
            return a[0].localeCompare(b[0])
          })
          .map(([country, arr]) => {
            return (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                key={country}
              >
                <div
                  style={{
                    fontSize: 12,
                    width: '150px',
                    flex: '0 0 auto',
                    textAlign: 'right',
                    marginRight: '6px',
                  }}
                >
                  {country}: <strong>{arr.length}</strong> (
                  {d3.format('.2p')(arr.length / total)})
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexGrow: 0,
                    borderLeft: '1px solid white',
                    padding: '12px 0 12px 3px',
                  }}
                >
                  {arr.map((d, i) => (
                    <Circle d={d} key={i} />
                  ))}
                </div>
              </div>
            )
          })}
      </div>
      {/* <div
        style={{
          height: '1.5rem',
          background: 'gray',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.8rem',
        }}
        onClick={() => setExpanded(!expanded)}
      >
        Show {!expanded ? 'More' : 'Less'}
      </div> */}
    </div>
  )
}

export default Bins
