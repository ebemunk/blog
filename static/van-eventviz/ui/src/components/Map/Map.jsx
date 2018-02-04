import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import cnb from "classnames/bind";

import { Marker } from "../../components";

import styles from "./Map.styles.scss";

const cn = cnb.bind(styles);

export default class Map extends Component {
  state = {
    location: { coords: {} }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.setLocation);
  }

  setLocation = location => {
    this.setState({ location });
  };

  render() {
    const { location: { coords: { latitude, longitude } } } = this.state;
    const { events } = this.props;
    return (
      <div className={cn("container")}>
        <GoogleMapReact center={{ lat: latitude, lng: longitude }} zoom={12}>
          {events &&
            latitude &&
            events.map(event => {
              const { geo, id } = event;
              const { lat, lng } = JSON.parse(geo).results[0].geometry.location;
              return <Marker key={id} lat={lat} lng={lng} />;
            })}
        </GoogleMapReact>
        )}
      </div>
    );
  }
}
