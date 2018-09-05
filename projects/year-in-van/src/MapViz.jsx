import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer'

import mapStyles from './mapStyles'
import css from './MapViz.css'

import events from './events.csv'

export const gmap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDRCV4YT7GO9mZ66mgggnA2CLUZmihR2Zw&v=3.exp&libraries=visualization',
    loadingElement: (
      <div className={css.loading}>
        <div className={css.loadingText}>Loading bro, chill...</div>
      </div>
    ),
    containerElement: <div className={css.map} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)

export const MapViz = ({ heatmaps, selection }) => (
  <GoogleMap
    defaultCenter={{
      lat: 49.2827291,
      lng: -123.1207375,
    }}
    defaultZoom={12}
    mapTypeId="roadmap"
    options={{
      styles: mapStyles,
      clickableIcons: false,
      disableDefaultUI: true,
      zoomControl: true,
    }}
  >
    {heatmaps.map(
      hm =>
        (typeof selection[hm.label] === 'undefined'
          ? true
          : selection[hm.label]) && (
          <HeatmapLayer
            key={hm.label}
            data={hm.data.map(d => new google.maps.LatLng(d.lat, d.lng))}
            options={{
              maxIntensity: 1,
              gradient: ['transparent', hm.color],
              radius: 20,
            }}
          />
        ),
    )}
  </GoogleMap>
)

export default gmap(MapViz)
