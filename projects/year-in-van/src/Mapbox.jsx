import React from 'react'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic3Q2OSIsImEiOiJjamxweXVvdTMwZG82M3JrMHV3bHh2aG5rIn0.zDnkK2GJoxL8fuJ2lhL7-g',
  // scrollZoom: false,
  interactive: false,
})
import { pure } from 'recompose'

const HeatmapLayer = pure(({ data, color, focused, maxLen }) => (
  <Layer
    type="heatmap"
    zoom={12}
    paint={{
      'heatmap-radius': [
        'interpolate',
        ['linear'],
        ['literal', data.length / maxLen],
        0,
        30,
        1,
        10,
      ],
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0,
        'transparent',
        1,
        color,
      ],
      'heatmap-opacity': focused ? 1 : 0.1,
    }}
  >
    {data.map((d, i) => (
      <Feature key={i} coordinates={[d.lng, d.lat]} />
    ))}
  </Layer>
))

import { max } from 'd3'

import css from './Mapbox.css'

const Mapbox = ({ heatmaps, focus }) => {
  const maxLen = heatmaps.reduce((sum, v) => sum + v.data.length, 0)
  return (
    <Map
      style="mapbox://styles/mapbox/dark-v9"
      center={[-123.1207375, 49.2827291]}
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <ZoomControl className={css.zoomControl} />
      {heatmaps.map(hm => (
        <HeatmapLayer
          key={hm.label}
          data={hm.data}
          color={hm.color}
          focused={focus === null || focus === hm.label}
          maxLen={maxLen}
        />
      ))}
    </Map>
  )
}

export default pure(Mapbox)
