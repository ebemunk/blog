import React from 'react'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic3Q2OSIsImEiOiJjamxweXVvdTMwZG82M3JrMHV3bHh2aG5rIn0.zDnkK2GJoxL8fuJ2lhL7-g',
  interactive: false,
})

const HeatmapLayer = ({ data, color, focused, maxLen }) => (
  <Layer
    type="heatmap"
    paint={{
      'heatmap-radius': [
        'interpolate',
        ['linear'],
        ['literal', data.length / maxLen],
        0,
        10,
        1,
        30,
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
)

import css from './Mapbox.css'

const vanCenter = [-123.1207375, 49.2827291]
const offsetCenter = [-123.1607375, 49.2827291]

const Mapbox = ({ heatmaps = [], focus = null }) => {
  const maxLen = heatmaps.reduce((sum, v) => sum + v.data.length, 0)
  return (
    <Map
      style="mapbox://styles/mapbox/dark-v9"
      center={window.innerWidth > 400 ? offsetCenter : vanCenter}
      zoom={window.innerWidth < 900 ? [10] : [11]}
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
    >
      {/* <ZoomControl className={css.zoomControl} /> */}
      {heatmaps.map((hm, i) => (
        <HeatmapLayer
          key={i}
          data={hm.data}
          color={hm.color}
          focused={focus === null || focus === hm.label}
          maxLen={maxLen}
        />
      ))}
    </Map>
  )
}

import { hot } from 'react-hot-loader'
import { compose, pure } from 'recompose'

export default compose(
  hot(module),
  pure,
)(Mapbox)
