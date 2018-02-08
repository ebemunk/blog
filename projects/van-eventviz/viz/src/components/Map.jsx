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
import pinImage from '../img/pin.svg'

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
      // events: state.events,
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
            // icon={pinImage}
            // icon={{
            //   path:
            //     'M74.89,236.14c-5.35-26.25-14.78-48.1-26.2-68.35-8.47-15-18.29-28.88-27.37-43.45-3-4.86-5.65-10-8.56-15C6.94,99.2,2.21,87.5,2.51,72.32A68.92,68.92,0,0,1,13.28,35.88,71.31,71.31,0,0,1,63.34,3.32,75.55,75.55,0,0,1,112,12.53a70.38,70.38,0,0,1,24,23.22,68.1,68.1,0,0,1,10.9,36.32A67.12,67.12,0,0,1,144,92.82c-1.8,6-4.69,11-7.26,16.34-5,10.44-11.32,20-17.64,29.57C100.29,167.24,82.62,196.3,74.89,236.14Z',
            //   // 'M0-165c-27.618 0-50 21.966-50 49.054C-50-88.849 0 0 0 0s50-88.849 50-115.946C50-143.034 27.605-165 0-165z',
            //   fillColor: '#FF0000',
            //   fillOpacity: 0.6,
            //   strokeWeight: 0,
            //   scale: 0.1,
            // }}
          >
            {isOpen === event.id && (
              <InfoWindow onCloseClick={() => this.onToggleOpen()}>
                <React.Fragment>
                  <div>{event.name}</div>
                  <div>{event.description}</div>
                </React.Fragment>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    )
  }
}

export default compose(gmap)(GMap)
