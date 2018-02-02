import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import cnb from "classnames/bind";

import eventsJsonRaw from "./eventsWithGeo.json";

import { Marker } from "../../components";

import styles from "./Map.styles.scss";

const cn = cnb.bind(styles);

export default class Map extends Component {
  state = {
    location: { coords: {}, events: [] }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.setLocation);
    this.setState({
      events:
        eventsJsonRaw[
          "select * from events where geo is not null and details is not null"
        ]
    });
  }

  setLocation = location => {
    console.log(location);
    this.setState({ location });
  };

  render() {
    const {
      location: { coords: { latitude, longitude } },
      events
    } = this.state;
    return (
      <div className={cn("container")}>
        <GoogleMapReact center={{ lat: latitude, lng: longitude }} zoom={12}>
          {events &&
            events.map(event => {
              const { geo, id } = event;
              return (
                <Marker
                  key={id}
                  lat={JSON.parse(geo).results[0].geometry.location.lat}
                  lng={JSON.parse(geo).results[0].geometry.location.lng}
                />
              );
            })}
        </GoogleMapReact>
        )}
      </div>
    );
  }
}
