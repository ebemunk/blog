import React from 'react'

const Axis = ({ orientation, scale, tickSizeOuter = 6, ...props }) => {
  const k = orientation === 'top' || orientation === 'left' ? -1 : 1
  const range = scale.range()
  const range0 = +range[0] + 0.5
  const range1 = +range[range.length - 1] + 0.5

  return (
    <g
      className="AXOS"
      fill="none"
      fontSize={10}
      fontFamily="sans-serif"
      textAnchor={
        orientation === 'right'
          ? 'start'
          : orientation === 'left'
          ? 'end'
          : 'middle'
      }
      {...props}
    >
      <path
        className="domain"
        stroke="currentColor"
        d={
          orientation === 'left' || orientation === 'right'
            ? tickSizeOuter
              ? `M${k * tickSizeOuter},${range0}H0.5V${range1}H${k *
                  tickSizeOuter}`
              : `M05,${range0}V${range1}`
            : tickSizeOuter
            ? `M${range0},${k * tickSizeOuter}V0.5H${range1}V${k *
                tickSizeOuter}`
            : `M${range0},0.5H${range1}`
        }
      />
      {/* {ticks.map(tick => (
        <g key={tick} transform={''}>
          <line x1={0} y1={0} x2={0} y2={0} />
          <text x={0} y={0}>
            {''}
          </text>
        </g>
      ))} */}
    </g>
  )
}

export default Axis
