import React from 'react'
import { default as ReactWaypoint } from 'react-waypoint'

const Waypoint = ({ children, active, style, ...rest }) => (
  <ReactWaypoint topOffset="20%" bottomOffset="80%" {...rest}>
    <div
      style={{
        margin: '5rem 0',
        padding: '3rem',
        border: '1px solid gray',
        background: 'red',
        opacity: active ? 1 : 0.3,
        ...style,
      }}
    >
      {children}
    </div>
  </ReactWaypoint>
)

export default Waypoint
