import React from 'react'

const Legend = ({ data = [], style, ...rest }) => (
  <div
    style={{
      background: 'rgba(0, 0, 0, 0.3)',
      border: '1px solid gray',
      padding: '0.5rem',
      ...style,
    }}
    {...rest}
  >
    {data.map(d => (
      <div
        style={{
          display: 'flex',
          fontSize: '0.8rem',
          margin: '0.3rem 0',
        }}
        key={d.title}
      >
        <div
          style={{
            height: '1rem',
            width: '1rem',
            marginRight: '0.3rem',
            background: d.color,
          }}
        />
        {d.title}
      </div>
    ))}
  </div>
)

export default Legend
