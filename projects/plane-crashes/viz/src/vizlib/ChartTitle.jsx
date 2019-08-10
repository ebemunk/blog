import React from 'react'

const ChartTitle = ({ title, subtitle, style }) => {
  return (
    <div style={{ marginTop: '0.5rem', ...style }}>
      <div>
        <strong>{title}</strong>
      </div>
      <div style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>{subtitle}</div>
    </div>
  )
}

export default React.memo(ChartTitle)
