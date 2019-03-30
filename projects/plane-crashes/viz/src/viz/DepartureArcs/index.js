import React, { useState, useRef } from 'react'
import { StaticMap } from 'react-map-gl'
import DeckGL, { ArcLayer, ScatterplotLayer } from 'deck.gl/dist/es6'
import { pipe, groupBy, map, values, filter, unnest } from 'ramda'
import { multiPoint } from '@turf/helpers'
import bbox from '@turf/bbox'

import data from '../../data/departure-arcs-geo.csv'

import Tt from '../../vizlib/Tooltip'
import ChartTitle from '../../vizlib/ChartTitle'

const color = {
  red: [228, 48, 52],
  dep: [255, 166, 0],
  hover: [255, 255, 255],
}

const groupedData = groupBy(d => d.dep)(data)

const departures = pipe(
  map(d => ({
    position: [+d[0].dep_lng, +d[0].dep_lat],
    count: d.length,
    name: d[0].dep,
  })),
  values,
  filter(d => d.count > 3),
)(groupedData)

const Tooltip = ({ hover }) =>
  hover ? (
    <Tt
      style={{
        position: 'absolute',
        left: hover.x,
        top: hover.y,
        zIndex: 9000,
      }}
    >
      {hover.object.name}
    </Tt>
  ) : null

const Info = ({ dep }) => (
  <div
    style={{
      position: 'absolute',
      right: 0,
      top: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      padding: '0.5rem',
      zIndex: 9000,
    }}
  >
    {dep && (
      <>
        <strong>{dep.object.name}</strong>
        <br />
      </>
    )}
    <small>{dep ? 'Click away to unfocus' : 'Click on a point to focus'}</small>
  </div>
)

const DepartureArcs = ({}) => {
  const [dep, setDep] = useState(null)
  const [hover, setHover] = useState(null)
  const [hide, setHide] = useState(false)
  const [viewState, setViewState] = useState({
    zoom: 1.25,
    minZoom: 0.5,
    pitch: 35,
    longitude: 0,
    latitude: 0,
    bearing: 0,
  })

  const deck = useRef(null)
  const mapRef = useRef(null)

  const getArcs = pipe(
    groupBy(d => d.crash),
    values,
    map(d => ({
      targetPosition: [+d[0].crash_lng, +d[0].crash_lat],
      sourcePosition: [+d[0].dep_lng, +d[0].dep_lat],
      count: d.length,
    })),
    filter(
      d =>
        d.targetPosition[0] !== d.sourcePosition[0] &&
        d.targetPosition[1] !== d.sourcePosition[1],
    ),
  )

  return (
    <>
      <ChartTitle
        title="Crashes from points of departure"
        subtitle="Shows all crashes from their originating departure location. Arcs do not represent actual flight paths. Locations are approximate."
        style={{
          marginLeft: '5vw',
          marginBottom: '0.5rem',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '90vw',
            height: '90vh',
            position: 'relative',
          }}
        >
          <DeckGL
            layers={[
              new ScatterplotLayer({
                id: 'departures',
                data: departures,
                radiusMinPixels: 2,
                radiusScale: 15,
                pickable: true,
                getRadius: d => d.count * 5,
                getFillColor: d =>
                  hover && d.name === hover.object.name
                    ? [255, 255, 255]
                    : color.red,
                updateTriggers: {
                  getFillColor: [hover],
                },
                visible: !hide,
              }),
              new ArcLayer({
                id: 'flights-hover',
                data: hover ? getArcs(groupedData[hover.object.name]) : [],
                getSourceColor: color.hover,
                getTargetColor: color.hover,
                getStrokeWidth: d => d.count,
                visible: !hide,
              }),
              new ArcLayer({
                id: 'flights-dep',
                data: dep ? getArcs(groupedData[dep.object.name]) : [],
                getSourceColor: color.dep,
                getTargetColor: color.dep,
                getStrokeWidth: d => d.count,
                visible: !hide,
              }),
            ]}
            viewState={viewState}
            onViewStateChange={v => {
              setViewState(v.viewState)
            }}
            controller
            onLayerHover={(info, layers, event) => {
              const closest = deck.current.pickObject({
                x: event.layerX,
                y: event.layerY,
                radius: 10,
                layerIds: ['departures'],
              })
              setHover(closest)
            }}
            onLayerClick={(info, layers, event) => {
              const closest = deck.current.pickObject({
                x: event.layerX,
                y: event.layerY,
                radius: 10,
                layerIds: ['departures'],
              })

              if (!closest && dep) {
                setDep(null)
                setViewState({
                  zoom: 1.25,
                  minZoom: 0.5,
                  pitch: 35,
                  bearing: 0,
                  longitude: 0,
                  latitude: 0,
                  transitionDuration: 500,
                })
                return
              }

              if (!closest) return

              setHide(true)
              setDep(closest)
              setHover(null)
              const points = multiPoint(
                pipe(
                  groupBy(d => d.crash),
                  values,
                  map(d => [
                    [+d[0].crash_lat, +d[0].crash_lng],
                    [+d[0].dep_lat, +d[0].dep_lng],
                  ]),
                  unnest,
                )(groupedData[closest.object.name]),
              )

              const box = bbox(points)

              mapRef.current
                .getMap()
                .fitBounds([[box[1], box[0]], [box[3], box[2]]], {
                  padding: { top: 100, bottom: 100, left: 200, right: 200 },
                })

              const m = mapRef.current.getMap()

              const moveEnd = () => {
                setViewState({
                  zoom: m.getZoom(),
                  longitude: m.getCenter().lng,
                  latitude: m.getCenter().lat,
                  pitch: m.getPitch(),
                  bearing: 0,
                })
                setHide(false)
                m.off('moveend', moveEnd)
              }
              m.on('moveend', moveEnd)
            }}
            ref={deck}
          >
            <StaticMap
              reuseMaps
              mapStyle="mapbox://styles/mapbox/dark-v10"
              mapboxApiAccessToken="pk.eyJ1Ijoic3Q2OSIsImEiOiJjanRsNnI0bGMzM2NkNDZtdW0xN3MwcWd0In0.2nwEI3cmp93NxcdGGG1F7g"
              ref={mapRef}
            />
            <Tooltip hover={hover} />
            <Info dep={dep} />
          </DeckGL>
        </div>
      </div>
    </>
  )
}

import { hot } from 'react-hot-loader'

export default hot(module)(DepartureArcs)
