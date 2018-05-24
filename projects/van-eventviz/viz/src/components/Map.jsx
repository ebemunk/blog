import React from 'react'
import { compose, withProps, lifecycle } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { connect } from 'react-redux'

import { getEvents, openInfo, closeInfo } from '../actions'
import { filteredEvents } from '../selectors'
import * as pins from '../img'

import Info from './Info'

import style from './Map.css'

export const gmap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDRCV4YT7GO9mZ66mgggnA2CLUZmihR2Zw&v=3.exp',
    loadingElement: (
      <div className={style.loading}>
        <div className={style.loadingText}>Loading bro, chill...</div>
      </div>
    ),
    containerElement: <div className={style.map} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  connect(
    state => ({
      events: filteredEvents(state),
      info: state.info,
    }),
    {
      getEvents,
      openInfo,
      closeInfo,
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.getEvents()
    },
  }),
)

export function GMap(props) {
  const { events, closeInfo, openInfo, info } = props
  return (
    <GoogleMap
      defaultCenter={{
        lat: 49.2827291,
        lng: -123.1207375,
      }}
      defaultZoom={13}
      onClick={closeInfo}
    >
      {events.map(event => (
        <Marker
          defaultPosition={event['geometry.location']}
          onClick={() => openInfo(event.id)}
          key={event.id}
          title={event.title}
          icon={
            pins[
              event.tags[0]
                .replace('/', '')
                .replace("'", '')
                .replace(/\s+/g, '')
                .replace('&', '')
            ]
          }
        >
          {info === event.id && <Info close={closeInfo} event={event} />}
        </Marker>
      ))}
    </GoogleMap>
  )
}

export default compose(gmap)(GMap)
