import React from 'react'
import { default as ReactWaypoint } from 'react-waypoint'

const Waypoint = ({ children, active, style, ...rest }) => (
  <ReactWaypoint topOffset="20%" bottomOffset="60%" {...rest}>
    <div
      style={{
        margin: '8rem 1.5rem',
        padding: '2rem',
        border: '1px solid gray',
        borderRadius: '5px',
        background: 'rgba(255,255,255,0.1)',
        opacity: active ? 1 : 0.3,
        ...style,
      }}
    >
      {children}
    </div>
  </ReactWaypoint>
)

export default React.memo(Waypoint)
