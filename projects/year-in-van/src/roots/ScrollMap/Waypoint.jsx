import React from 'react'
import { default as ReactWaypoint } from 'react-waypoint'

const Waypoint = props => (
  <React.Fragment>
    {/* <div style={{ border: '1px dashed red' }} /> */}
    <ReactWaypoint bottomOffset="30%" topOffset="15%" {...props} />
  </React.Fragment>
)

export default Waypoint
