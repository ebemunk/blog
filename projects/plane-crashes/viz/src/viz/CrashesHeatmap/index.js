import React, { useRef, useState } from 'react'
import { InteractiveMap } from 'react-map-gl'

import {
  source,
  bermudaFill,
  bermudaStroke,
  heatmap,
  scatter,
} from './mapElements'

const CrashesHeatmap = ({}) => {
  const mapRef = useRef(null)
  const [viewState, setViewState] = useState({})

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <InteractiveMap
        ref={mapRef}
        mapboxApiAccessToken="pk.eyJ1Ijoic3Q2OSIsImEiOiJjanRsNnI0bGMzM2NkNDZtdW0xN3MwcWd0In0.2nwEI3cmp93NxcdGGG1F7g"
        mapStyle="mapbox://styles/mapbox/dark-v10"
        width="90vw"
        height="90vh"
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        viewState={viewState}
        zoom={0.5}
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
  )
}

import { hot } from 'react-hot-loader'
export default hot(module)(CrashesHeatmap)
