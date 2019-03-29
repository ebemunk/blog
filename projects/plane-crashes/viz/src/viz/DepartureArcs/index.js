import React, { useState, useRef } from 'react'
import { StaticMap } from 'react-map-gl'
import DeckGL, { ArcLayer, ScatterplotLayer } from 'deck.gl/dist/es6'
import { pipe, groupBy, map, values, filter, flatten, unnest } from 'ramda'
import { multiPoint } from '@turf/helpers'
import bbox from '@turf/bbox'

import data from './data.csv'

const groupedData = groupBy(d => d.dep)(data)

const departures = pipe(
  map(d => ({
    position: [+d[0].dep_lng, +d[0].dep_lat],
    count: d.length,
    name: d[0].dep,
  })),
  values,
  // filter(d => d.count >= 10),
)(groupedData)

const arcs = pipe(
  values,
  map(
    pipe(
      groupBy(d => d.crash),
      values,
      map(d => ({
        targetPosition: [+d[0].crash_lng, +d[0].crash_lat],
        sourcePosition: [+d[0].dep_lng, +d[0].dep_lat],
        count: d.length,
      })),
    ),
  ),
  flatten,
)(groupedData)

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

  return (
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
                  : [255, 0, 0],
              updateTriggers: {
                getFillColor: [hover],
              },
              visible: !hide,
            }),
            // new ArcLayer({
            //   id: 'crashes-gray',
            //   data: arcs,
            //   getSourceColor: [255, 255, 255, 10],
            //   getTargetColor: [255, 255, 255, 10],
            //   getStrokeWidth: d => d.count,
            // }),
            new ArcLayer({
              id: 'flights-hover',
              data: hover
                ? pipe(
                    groupBy(d => d.crash),
                    values,
                    map(d => ({
                      targetPosition: [+d[0].crash_lng, +d[0].crash_lat],
                      sourcePosition: [+d[0].dep_lng, +d[0].dep_lat],
                      count: d.length,
                    })),
                  )(groupedData[hover.object.name])
                : [],
              getSourceColor: [0, 255, 0],
              getTargetColor: [0, 255, 0],
              getStrokeWidth: d => d.count,
              visible: !hide,
            }),
            new ArcLayer({
              id: 'flights-dep',
              data: dep
                ? pipe(
                    groupBy(d => d.crash),
                    values,
                    map(d => ({
                      targetPosition: [+d[0].crash_lng, +d[0].crash_lat],
                      sourcePosition: [+d[0].dep_lng, +d[0].dep_lat],
                      count: d.length,
                    })),
                  )(groupedData[dep.object.name])
                : [],
              getSourceColor: [255, 0, 255],
              getTargetColor: [255, 0, 255],
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

            console.log('wa', points)

            const box = bbox(points)

            console.log('wa', box)

            mapRef.current
              .getMap()
              .fitBounds([[box[1], box[0]], [box[3], box[2]]], {
                padding: { top: 100, bottom: 100, left: 200, right: 200 },
              })

            const m = mapRef.current.getMap()

            const moveEnd = () => {
              console.log('onmove', m)
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
          {hover && (
            <div
              style={{
                position: 'absolute',
                left: hover.x,
                top: hover.y,
                zIndex: 9000,
                pointerEvents: 'none',
                background: 'rgba(0,0,0,0.3)',
              }}
            >
              {hover.object.name} = {hover.object.count}
            </div>
          )}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '0.5rem',
            }}
          >
            <strong>{dep ? dep.object.name : 'gae'}</strong>
          </div>
        </DeckGL>
      </div>
    </div>
  )
}

import { hot } from 'react-hot-loader'

export default hot(module)(DepartureArcs)
