import React from 'react'

const Tooltip = ({ children, placement, style }, ref) => (
  <div
    ref={ref}
    style={{
      padding: '0.5rem',
      backgroundColor: 'rgba(0,0,0,0.3)',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: '0.5rem',
      margin: '0.5rem',
      fontSize: '0.75rem',
      pointerEvents: 'none',
      ...style,
    }}
    data-placement={placement}
  >
    {children}
  </div>
)

export default React.forwardRef(Tooltip)
