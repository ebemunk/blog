import React, { useCallback, useState } from 'react'
import * as d3 from 'd3'
// import world from 'world-atlas/countries-110m.json'
import usa from 'us-atlas/states-10m.json'
import * as topojson from 'topojson-client'
import { usePopper } from 'react-popper'
import { createPortal } from 'react-dom'

import { ResponsiveSvg, usePlotContext } from 'vizlib'

const states = topojson.feature(usa, usa.objects.states)
states.features.forEach(state => {
  state.properties.data = byState.get(state.properties.name) ?? []
})

const color = d3.scaleThreshold(d3.schemeBlues[6]).domain([1, 2, 10, 20, 100])

const State = ({ feature, path }) => {
  const [hovered, setHovered] = useState<{
    data: any
    reference: Element
  }>(null)
  const [popper, setPopper] = useState(null)
  const { styles, attributes, forceUpdate } = usePopper(
    hovered?.reference,
    popper,
    {
      placement: 'top',
    },
  )

  return (
    <>
      <path
        d={path(feature)}
        fill={color(feature.properties.data.length)}
        stroke={
          hovered?.data.name === feature.properties.name ? 'white' : 'black'
        }
        strokeWidth={hovered?.data.name === feature.properties.name ? 2 : 0.25}
        data-state={feature.properties.name}
        onMouseMove={evt => {
          setHovered({
            data: {
              name: feature.properties.name,
              value: feature.properties.data.length,
            },
            reference: {
              getBoundingClientRect() {
                return {
                  width: 0,
                  height: 0,
                  top: evt.clientY,
                  left: evt.clientX,
                  right: evt.clientX,
                  bottom: evt.clientY,
                }
              },
            },
          })
        }}
        onMouseOut={() => {
          setHovered(null)
        }}
      ></path>
      {hovered &&
        createPortal(
          <div
            ref={setPopper}
            style={{
              ...styles.popper,
              pointerEvents: 'none',
            }}
            {...attributes.popper}
          >
            <div
              style={{
                background: 'rgba(0,0,0,0.66)',
                padding: '0.25rem',
                borderRadius: '5px',
                maxWidth: '14rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontWeight: 'bold',
                }}
              >
                {hovered.data.name}
              </div>
              <div>
                {hovered.data.value} playmate
                {hovered.data.value > 1 ? 's' : ''}
              </div>
            </div>
          </div>,
          document.querySelector('body'),
        )}
    </>
  )
}

const USAMap = () => {
  const ctx = usePlotContext()
  const projection = useMemo(
    () =>
      d3.geoAlbersUsa().fitExtent(
        [
          [10, 10],
          [ctx.chartWidth - 10, ctx.chartHeight - 10],
        ],
        states,
      ),
    [ctx.chartHeight, ctx.chartWidth],
  )
  const path = useMemo(() => d3.geoPath(projection), [projection])

  return (
    <>
      <g>
        {states.features.map(feature => (
          <State key={feature.id} feature={feature} path={path} />
        ))}
      </g>
    </>
  )
}

const Birthplace = () => {
  return (
    <div
      style={{
        width: '100vw',
        maxWidth: '1200px',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {[
          { val: 0, label: 0 },
          { val: 1, label: 1 },
          { val: 2, label: '2-9' },
          { val: 10, label: '10-19' },
          { val: 20, label: '20-99' },
          { val: 100, label: '100+' },
        ].map(d => (
          <div
            key={d.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '0 0.25rem',
              fontSize: 12,
            }}
          >
            <div
              style={{
                height: '1rem',
                width: '1rem',
                background: color(d.val),
                marginRight: '0.25rem',
              }}
            />
            <div>{d.label}</div>
          </div>
        ))}
      </div>
      <ResponsiveSvg aspectRatio={1.8} margin={0}>
        <USAMap />
      </ResponsiveSvg>
    </div>
  )
}

import { hot } from 'react-hot-loader'
import { uniqBy } from 'remeda'
import { byState, data } from '../data'
import { useMemo } from 'react'
export default hot(module)(Birthplace)
