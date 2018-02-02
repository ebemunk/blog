import React from "react";
import GoogleMapReact from "google-map-react";
import cnb from "classnames/bind";

import styles from "./Map.styles.scss";

const cn = cnb.bind(styles);

export default function Map() {
  return (
    <div className={cn("container")}>
      <GoogleMapReact defaultCenter={{ lat: 59.95, lng: 30.33 }} zoom={11} />
    </div>
  );
}
