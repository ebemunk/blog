import React from 'react'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic3Q2OSIsImEiOiJjamxweXVvdTMwZG82M3JrMHV3bHh2aG5rIn0.zDnkK2GJoxL8fuJ2lhL7-g',
  scrollZoom: false,
})

const HeatmapLayer = ({ data, color, focused }) => (
  <Layer
    type="heatmap"
    zoom={12}
    paint={{
      'heatmap-radius': 20,
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0,
        'transparent',
        1,
        color,
      ],
      'heatmap-opacity': focused ? 1 : 0.2,
    }}
  >
    {data.map((d, i) => (
      <Feature key={i} coordinates={[d.lng, d.lat]} />
    ))}
  </Layer>
)

const Mapbox = ({ heatmaps, focus }) => (
  <Map
    style="mapbox://styles/mapbox/dark-v9"
    center={[-123.1207375, 49.2827291]}
    containerStyle={{
      height: '100vh',
      width: '100vw',
    }}
  >
    <ZoomControl />
    {heatmaps.filter(hm => focus !== hm.label).map(hm => (
      <HeatmapLayer
        key={hm.label}
        data={hm.data}
        color={hm.color}
        focused={focus === null || focus === hm.label}
      />
    ))}
    {heatmaps.filter(hm => focus === hm.label).map(hm => (
      <HeatmapLayer
        key={hm.label}
        data={hm.data}
        color={hm.color}
        focused={focus === null || focus === hm.label}
      />
    ))}
  </Map>
)

import { pure } from 'recompose'

export default pure(Mapbox)
