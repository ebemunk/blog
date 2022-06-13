import { mean, scaleOrdinal, select } from 'd3'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { groupBy } from 'remeda'
import { ResponsiveSvg } from 'vizlib'
import { data } from '../../data/data'
import { cm2in } from '../../util'
import { pinks } from './util'
import Viz from './Viz'

export default function Hourglass() {
  const decades = useMemo(() => {
    const byDecade = groupBy(
      data,
      d => `${d.date.getFullYear().toString().slice(0, 3)}0s`,
    )

    return Object.keys(byDecade).reduce(
      (acc, key) => ({
        ...acc,
        [key]: [
          mean(byDecade[key], d => cm2in(d.bustCM)),
          mean(byDecade[key], d => cm2in(d.waistCM)),
          mean(byDecade[key], d => cm2in(d.hipsCM)),
        ],
      }),
      {},
    )
  }, [])

  const color = scaleOrdinal<string>().range(pinks).domain(Object.keys(decades))

  const [chosen, setChosen] = useState(null)

  const legendRef = useRef(null)

  useEffect(() => {
    if (!legendRef.current) return

    select(legendRef.current)
      .selectAll('div[data-key]')
      .transition()
      .duration(750)
      .style('background', function (this: HTMLDivElement) {
        const key = this.attributes['data-key'].value
        if (!chosen) return color(key)
        return chosen === key ? color(key) : 'transparent'
      })
  }, [chosen])

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <ResponsiveSvg aspectRatio={1} margin={30}>
        <Viz decades={decades} chosen={chosen} />
      </ResponsiveSvg>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
        ref={legendRef}
      >
        {Object.keys(decades).map(k => (
          <div
            key={k}
            style={{
              display: 'flex',
              marginBottom: '0.25rem',
              fontSize: '0.8rem',
              cursor: 'pointer',
              alignItems: 'center',
            }}
            onClick={() => {
              if (k === chosen) {
                setChosen(null)
              } else {
                setChosen(k)
              }
            }}
          >
            <div
              data-key={k}
              style={{
                height: '1rem',
                width: '1rem',
                border: `2px solid ${color(k)}`,
                marginRight: '0.25rem',
              }}
            />{' '}
            {k.replace('2020s', '2020')}
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            marginBottom: '0.25rem',
            fontSize: '0.8rem',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height: '1rem',
              width: '1rem',
              background: 'cyan',
              border: '2px solid cyan',
              marginRight: '0.25rem',
            }}
          />{' '}
          “Ideal”
        </div>
        <div
          style={{
            display: 'flex',
            marginBottom: '0.25rem',
            fontSize: '0.8rem',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height: '1rem',
              width: '1rem',
              background: 'yellow',
              border: '2px solid yellow',
              marginRight: '0.25rem',
            }}
          />{' '}
          Barbie
        </div>
      </div>
    </div>
  )
}
