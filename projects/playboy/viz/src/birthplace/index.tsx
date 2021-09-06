import React, { useState } from 'react'
import * as d3 from 'd3'
import world from 'world-atlas/countries-110m.json'
import * as topojson from 'topojson-client'

import data from '../../locations.json'
import { ResponsiveSvg, usePlotContext } from 'vizlib'
import Bins from './bins'

const byCountry = d3.group(
  data.map(d => {
    const [country, state, town] = d.birthplace.split(', ').reverse()
    return {
      ...d,
      country,
      state,
      town,
    }
  }),
  d => d.country,
)

console.log(
  Array.from(byCountry.entries()).sort((a, b) => b[1].length - a[1].length),
)

// const byTown = d3.group(
//   data.map(d => {
//     const [country, state, town] = d.birthplace.split(', ').reverse()
//     return {
//       ...d,
//       country,
//       state,
//       town,
//     }
//   }),
//   d => `${d.country} - ${d.state} - ${d.town}`,
//   // d => d.country,
//   // d => d.state,
//   // d => d.town,
// )

const countries = topojson.feature(world, world.objects.countries)
countries.features.forEach(country => {
  country.properties.data =
    byCountry.get(
      country.properties.name
        .replace('United States of America', 'United States')
        .replace('Netherlands', 'The Netherlands')
        .replace('Czechia', 'Czech Republic')
        .replace('United Kingdom', 'England'),
    ) ?? []
})

const outline = { type: 'Sphere' }

const color = d3.scaleThreshold(d3.schemeBlues[6]).domain([1, 2, 10, 20, 100])

const WorldMap = () => {
  const ctx = usePlotContext()
  const projection = d3.geoNaturalEarth1().fitExtent(
    [
      [10, 10],
      [ctx.chartWidth - 10, ctx.chartHeight - 10],
    ],
    countries,
  )
  const path = d3.geoPath(projection)
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
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 20],
          },
        },
      ],
    },
  )

  return (
    <>
      <defs>
        <path id="worldmap-outline" d={`${path(outline)}`} />
      </defs>
      <g>
        {countries.features.map(feature => (
          <path
            d={path(feature)}
            fill={color(feature.properties.data.length)}
            key={feature.properties.name}
            stroke={
              hovered?.data.name === feature.properties.name ? 'white' : 'black'
            }
            strokeWidth={
              hovered?.data.name === feature.properties.name ? 3 : 0.25
            }
            onMouseOver={evt => {
              if (hovered?.data.name !== feature.properties.name) {
                setHovered({
                  data: feature.properties,
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
              }
            }}
            onMouseOut={() => {
              setHovered(null)
            }}
          ></path>
        ))}
      </g>
      <use
        xlinkHref="#worldmap-outline"
        fill="none"
        stroke="white"
        strokeWidth={3}
      />
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
              <div>{hovered.data.data.length} playmates</div>
            </div>
          </div>,
          document.querySelector('body'),
        )}
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
          { val: 2, label: '2-10' },
          { val: 20, label: '10-20' },
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
        <WorldMap />
      </ResponsiveSvg>

      <div>
        {Array.from(byCountry.entries())
          .sort((a, b) => {
            const lendiff = b[1].length - a[1].length
            if (lendiff !== 0) return lendiff
            return a[0].localeCompare(b[0])
          })
          .map(([country, arr]) => {
            return (
              <div
                key={country}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    width: '100px',
                    flex: '0 0 auto',
                    textAlign: 'right',
                    marginRight: '6px',
                  }}
                >
                  {country}
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
                    <div
                      key={i}
                      style={{
                        height: '8px',
                        width: '8px',
                        borderRadius: '100%',
                        background: 'red',
                        margin: 1,
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          })}
      </div>
      {/* <ResponsiveSvg
        aspectRatio={1.68}
        margin={{
          left: 100,
          top: 10,
          bottom: 10,
          right: 10,
        }}
      >
        <Bins
          data={Array.from(byCountry.entries())
            .filter(d => d[1].length > 4)
            .sort((a, b) => b[1].length - a[1].length)}
        />
      </ResponsiveSvg> */}
    </div>
  )
}

import { hot } from 'react-hot-loader'
import { usePopper } from 'react-popper'
import { createPortal } from 'react-dom'
export default hot(module)(Birthplace)
