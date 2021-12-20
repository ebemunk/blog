import React, { useRef, useState } from 'react'
import { InteractiveMap } from 'react-map-gl'

import ChartTitle from '../../vizlib/ChartTitle'

import {
  source,
  bermudaFill,
  bermudaStroke,
  heatmap,
  scatter,
} from './mapElements'

const CrashesHeatmap = ({ subtitle, zoom, noInteraction }) => {
  const mapRef = useRef(null)
  const [viewState, setViewState] = useState({})
  const [scrollZoom, setScrollZoom] = useState(false)

  return (
    <>
      <ChartTitle
        title="Are crashes clustered around certain locations?"
        subtitle={
          subtitle ||
          'Heatmap of crashes where geodata is available. Locations are approximate. Also drawn is the Bermuda Triangle. Zoom in to see individual points.'
        }
        style={{
          marginLeft: '5vw',
          marginBottom: '0.5rem',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1.3rem',
          position: 'relative',
        }}
      >
        <InteractiveMap
          ref={mapRef}
          mapboxApiAccessToken="pk.eyJ1Ijoic3Q2OSIsImEiOiJjanRsNnI0bGMzM2NkNDZtdW0xN3MwcWd0In0.2nwEI3cmp93NxcdGGG1F7g"
          mapStyle="mapbox://styles/mapbox/dark-v10"
          width="90vw"
          height="90vh"
          onViewStateChange={({ viewState }) => setViewState(viewState)}
          viewState={viewState}
          zoom={zoom || 0.5}
          scrollZoom={scrollZoom}
          minZoom={0.5}
          onLoad={() => {
            const map = mapRef.current.getMap()

            map.addSource('crashes', source)
            map.addLayer(bermudaFill, 'waterway-label')
            map.addLayer(bermudaStroke, 'waterway-label')
            map.addLayer(heatmap, 'waterway-label')
            map.addLayer(scatter, 'waterway-label')
          }}
        />
        {!noInteraction && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 'calc(5vw + 1rem)',
            }}
          >
            <div>
              <label
                style={{
                  cursor: 'pointer',
                  marginLeft: 30,
                  fontSize: '0.8rem',
                  color: 'white',
                }}
              >
                <input
                  type="checkbox"
                  onChange={() => setScrollZoom(!scrollZoom)}
                  checked={scrollZoom}
                />
                Scroll Zoom
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

import { hot } from 'react-hot-loader'
export default hot(module)(CrashesHeatmap)
