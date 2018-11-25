import React from 'react'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic3Q2OSIsImEiOiJjamxweXVvdTMwZG82M3JrMHV3bHh2aG5rIn0.zDnkK2GJoxL8fuJ2lhL7-g',
  // scrollZoom: false,
  interactive: false,
})

import { compose, pure } from 'recompose'

const HeatmapLayer = compose(pure)(
  ({ data, color, focused, maxLen }) =>
    data.length && (
      <Layer
        type="heatmap"
        zoom={12}
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
    ),
)

import injectSheet from 'react-jss'

const Mapbox = compose(
  pure,
  injectSheet({
    zoomControl: {
      '& button': {
        all: 'unset',
      },
    },
  }),
)(({ heatmaps = [], focus = null, classes = {} }) => {
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
      <ZoomControl className={classes.zoomControl} />
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
})

import { hot } from 'react-hot-loader'

export default compose(
  pure,
  hot(module),
)(Mapbox)
