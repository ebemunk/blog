import React from 'react'
import { compose, withProps, lifecycle, withStateHandlers } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps'
import { connect } from 'react-redux'

import { getEvents } from '../actions'
import { filteredEvents } from '../selectors'
import * as pins from '../img'

import style from './Map.css'

export const gmap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDRCV4YT7GO9mZ66mgggnA2CLUZmihR2Zw&v=3.exp',
    loadingElement: (
      <div style={{ height: `100%`, background: 'red' }}>
        Loading bro, chill
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
    }),
    {
      getEvents,
    },
  ),
)

export class GMap extends React.Component {
  state = {
    isOpen: false,
  }

  onToggleOpen = val =>
    this.setState({
      isOpen: val === this.state.isOpen ? false : val,
    })

  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    const { isOpen } = this.state
    const { events } = this.props
    return (
      <GoogleMap
        defaultCenter={{
          lat: 49.2827291,
          lng: -123.1207375,
        }}
        defaultZoom={13}
      >
        {events.filter(e => e.geometry).map(event => (
          <Marker
            defaultPosition={event.geometry.location}
            onClick={() => this.onToggleOpen(event.id)}
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
            {isOpen === event.id && (
              <InfoWindow onCloseClick={() => this.onToggleOpen()}>
                <div style={{ maxHeight: '150px', overflowY: 'scroll' }}>
                  <div>{event.name}</div>
                  <div>
                    {event.description.split('\n').map((e, i) => (
                      <React.Fragment key={i}>
                        {e}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                  <div>{event.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    )
  }
}

export default compose(gmap)(GMap)
