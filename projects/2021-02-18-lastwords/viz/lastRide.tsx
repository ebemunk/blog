import leaf from 'leaflet'
import MiniMap from 'leaflet-minimap'
import {
  line as line_1,
  select,
  transition as transition_1,
  interpolateString,
  schemeCategory10,
  range,
} from 'd3'
import { Fragment, h, render } from 'preact'
import { useEffect, useLayoutEffect, useRef, useState } from 'preact/hooks'
import { forwardRef } from 'preact/compat'
import { createPopper } from '@popperjs/core'

import points from '../data/lastRide.json'

const dom = document.querySelector<HTMLElement>('#lastRide')

const polunsky = [30.6960896, -95.0145924]
const huntsville = [30.72024669999999, -95.5768001]

const Viz = ({ latLnToScreen, active = false, setEnded }) => {
  const pathRef = useRef(null)
  const carRef = useRef(null)

  const line = line_1()
    .x(d => latLnToScreen(d).x)
    .y(d => latLnToScreen(d).y)

  useEffect(() => {
    const path = select(pathRef.current)

    if (!active) {
      return
    }

    const transition = transition_1().duration(60000)
    path
      .attr('opacity', 1)
      .transition(transition)
      .attrTween('stroke-dasharray', () => {
        return t => {
          var l = pathRef.current.getTotalLength()
          const interpolate = interpolateString(`0,${l}`, `${l},${l}`)
          var p = pathRef.current.getPointAtLength(t * l)
          select(carRef.current)
            .attr('transform', `translate(${p.x},${p.y})`)
            .attr('opacity', 1)
          return interpolate(t)
        }
      })
      .on('end', () => {
        setEnded(true)
      })

    return () => {
      path.interrupt()
      // path.attr('opacity', 0)
    }
  }, [active])

  const carStart = latLnToScreen(polunsky)

  return (
    <Fragment>
      <path
        ref={pathRef}
        /* @ts-ignore */
        d={line(points)}
        fill="none"
        stroke={'tomato'}
        stroke-width={5}
        opacity={0}
      />
      <circle
        ref={carRef}
        r={5}
        fill="red"
        transform={`translate(${carStart.x},${carStart.y})`}
      />
      {[polunsky, huntsville].map((d, i) => {
        const { x, y } = latLnToScreen(d)

        return (
          <g transform={`translate(${x},${y})`}>
            <circle r={8} fill={schemeCategory10[1]} />
            <text
              text-anchor="middle"
              fill="white"
              font-weight="bold"
              font-size={12}
              dy={30}
            >
              {i === 0 ? 'TDCJ Polunsky Unit' : 'TDCJ Huntsville Unit'}
            </text>
          </g>
        )
      })}
    </Fragment>
  )
}

const useCreateTooltip = ({ placement = 'top' }) => {
  const target = useRef(null)
  const tooltip = useRef(null)
  const create = () => {
    createPopper(target.current, tooltip.current, {
      placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 35],
          },
        },
        {
          name: 'flip',
          enabled: false,
        },
      ],
    })
    select(tooltip.current).transition().duration(750).style('opacity', 1)
  }

  return [target, tooltip, create] as const
}

const TooltipDiv = forwardRef((props, ref) => (
  <div
    style={{
      opacity: 0,
      maxWidth: '33ch',
      fontSize: '16px',
      textAlign: 'left',
    }}
    class="tooltip"
    ref={ref}
    {...props}
  />
))

const Popups = ({ active, latLnToScreen }) => {
  const [secs, setSecs] = useState(0)
  useEffect(() => {
    if (!active) {
      setSecs(0)
      return
    }

    range(60).forEach(s => {
      setTimeout(() => setSecs(s), s * 1000)
    })
  }, [active])

  const [startLoc, startT, startC] = useCreateTooltip({ placement: 'bottom' })
  const [endLoc, endT, endC] = useCreateTooltip({ placement: 'top' })
  const [midLoc, midT, midC] = useCreateTooltip({ placement: 'top' })

  useEffect(() => {
    if (secs === 3) {
      startC()
    }
    if (secs === 25) {
      midC()
    }
    if (secs === 50) {
      endC()
    }
  }, [secs])

  useEffect(() => {
    if (active) return

    // d3.select(startT.current).style('opacity', 0)
    // d3.select(endT.current).style('opacity', 0)
    // d3.select(midT.current).style('opacity', 0)
  }, [active])

  const polunskyCoord = latLnToScreen(polunsky)
  const huntsvilleCoord = latLnToScreen(huntsville)
  const midCoord = latLnToScreen(points[120])

  return (
    <div>
      <div
        ref={startLoc}
        style={{
          position: 'absolute',
          left: polunskyCoord.x,
          top: polunskyCoord.y,
        }}
      />
      <TooltipDiv ref={startT}>
        On the day of the execution, the inmate is taken from their cell in a
        3-vehicle convoy in the afternoon to the Huntsville Unit. This is where
        the last journey starts.
      </TooltipDiv>

      <div
        ref={midLoc}
        style={{
          position: 'absolute',
          left: midCoord.x,
          top: midCoord.y,
        }}
      />
      <TooltipDiv ref={midT}>
        <div style={{ textAlign: 'left', width: '100%' }}>
          Only the Wardens of the units are informed of the transportation, and
          the route isn't public. This route is the shortest between the two
          units according to Google.
        </div>
        <div style={{ textAlign: 'left', width: '100%' }}>
          This route generally takes about 1 hour.
        </div>
      </TooltipDiv>

      <div
        ref={endLoc}
        style={{
          position: 'absolute',
          left: huntsvilleCoord.x,
          top: huntsvilleCoord.y,
        }}
      />
      <TooltipDiv ref={endT}>
        After arriving at the Huntsville Unit, they're placed in a holding cell
        next to the execution chamber. The execution takes place usually at 6pm.
      </TooltipDiv>
    </div>
  )
}

const LastRide = () => {
  const [latLnToScreen, setLanLnToScreen] = useState(null)
  const mapRef = useRef(null)
  useLayoutEffect(() => {
    const map = leaf
      .map(mapRef.current, {
        zoomControl: false,
        touchZoom: false,
        keyboard: false,
        boxZoom: false,
        doubleClickZoom: false,
        dragging: false,
        scrollWheelZoom: false,
        zoomSnap: 0.1,
      })
      .addLayer(
        leaf.tileLayer(
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          {
            attribution:
              'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
          }
        )
      )
      .fitBounds(
        new leaf.LatLngBounds([
          [30.8155524, -95.0143446],
          [30.6907708, -95.54651899999999],
        ]).pad(0.2)
      )
      .addControl(
        new MiniMap(
          leaf.tileLayer(
            'https://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
          ),
          {
            position: 'topright',
            width: 350,
            height: 200,
            zoomLevelOffset: -6,
          }
        )
      )

    setLanLnToScreen({ fn: ([lat, ln]) => map.latLngToLayerPoint([lat, ln]) })
  }, [])

  const [active, setActive] = useState(false)
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    if (!ended) return
    setActive(false)
  }, [ended])

  const height = '90vh'

  return (
    <div
      style={{
        height,
        position: 'relative',
      }}
    >
      <div style={{ height, zIndex: 0 }} ref={mapRef} />
      <svg
        style={{
          height,
          width: '100%',
          position: 'absolute',
          top: 0,
        }}
      >
        {latLnToScreen && (
          <Viz
            latLnToScreen={latLnToScreen.fn}
            active={active}
            setEnded={setEnded}
          />
        )}
      </svg>
      <div
        style={{
          height,
          width: '100%',
          position: 'absolute',
          top: 0,
        }}
      >
        {latLnToScreen && (
          <Popups active={active} latLnToScreen={latLnToScreen.fn} />
        )}
      </div>
      {!active && !ended && (
        <div
          style={{
            background: 'rgba(0,0,0,0.7)',
            height,
            width: '100%',
            position: 'absolute',
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              maxWidth: '45ch',
            }}
          >
            On the day of the execution, inmates are transferred from the
            Polunsky Unit - death row - to the Huntsville Unit where the
            execution chamber is.
          </p>
          <p
            style={{
              maxWidth: '45ch',
            }}
          >
            Take some time to reflect on what would go through your head if it
            was you in that vehicle. What would your last words be?
          </p>
          <button onClick={() => setActive(true)}>Start</button>
        </div>
      )}
      {ended && (
        <div
          style={{
            height,
            width: '100%',
            position: 'absolute',
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => {
              setEnded(false)
              setActive(true)
            }}
          >
            Play again
          </button>
        </div>
      )}
    </div>
  )
}

export const lastRide = () => {
  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0]
    if (!entry) return

    dom.innerHTML = ''
    render(<LastRide />, dom)
  })

  resizeObserver.observe(dom)
}
