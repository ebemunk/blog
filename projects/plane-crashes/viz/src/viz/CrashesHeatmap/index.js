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

const CrashesHeatmap = ({ subtitle, zoom }) => {
  const mapRef = useRef(null)
  const [viewState, setViewState] = useState({})

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
      </div>
    </>
  )
}

import { hot } from 'react-hot-loader'
export default hot(module)(CrashesHeatmap)
