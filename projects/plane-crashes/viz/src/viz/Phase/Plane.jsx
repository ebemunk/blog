import React from 'react'
import { Spring, animated } from 'react-spring'

const Plane = ({ xScale, yScale, phase = 'En route (ENR)' }) => {
  const planeTranslate = {
    'Standing (STD)': [
      xScale('Standing (STD)') + xScale.bandwidth() / 2,
      yScale(0),
    ],
    'Taxi (TXI)': [xScale('Taxi (TXI)') + xScale.bandwidth() / 2, yScale(0)],
    'Takeoff (TOF)': [
      xScale('Takeoff (TOF)') + xScale.bandwidth() / 2,
      yScale(1),
    ],
    'Initial climb (ICL)': [
      xScale('Initial climb (ICL)') + xScale.bandwidth() / 2,
      yScale(2),
    ],
    'En route (ENR)': [
      xScale('En route (ENR)') + xScale.bandwidth() / 2,
      yScale(2.75),
    ],
    'Approach (APR)': [
      xScale('Approach (APR)') + xScale.bandwidth() / 2,
      yScale(2),
    ],
    'Landing (LDG)': [
      xScale('Landing (LDG)') + xScale.bandwidth() / 2,
      yScale(1),
    ],
    'Pushback / towing (PBT)': [
      xScale('Pushback / towing (PBT)') + xScale.bandwidth() / 2,
      yScale(0),
    ],
    'Maneuvering (MNV)': [
      xScale('Maneuvering (MNV)') + xScale.bandwidth() / 2,
      yScale(0),
    ],
    'Unknown (UNK)': [
      xScale('Unknown (UNK)') + xScale.bandwidth() / 2,
      yScale(0),
    ],
  }

  const planeRotation = {
    'Standing (STD)': 0,
    'Taxi (TXI)': -5,
    'Takeoff (TOF)': -30,
    'Initial climb (ICL)': -30,
    'En route (ENR)': 0,
    'Approach (APR)': 30,
    'Landing (LDG)': 30,
    'Pushback / towing (PBT)': 0,
    'Maneuvering (MNV)': 0,
    'Unknown (UNK)': 0,
  }

  return (
    <Spring
      to={{
        x: planeTranslate[phase][0],
        y: planeTranslate[phase][1],
        rot: planeRotation[phase],
      }}
    >
      {spring => (
        <animated.g
          transform={`translate(${spring.x}, ${spring.y}) rotate(${
            spring.rot
          })`}
        >
          <animated.path
            d="M395 390 c-16 -4 -66 -24 -109 -44 -44 -20 -81 -34 -84 -31 -3 3 -1 5 4 5 6 0 19 6 29 14 17 12 14 15 -40 31 -96 28 -146 -13 -65 -53 l40 -20 -37 -15 c-35 -14 -40 -14 -71 5 -61 37 -81 -2 -39 -77 28 -49 59 -55 143 -26 32 11 60 18 61 17 2 -1 -2 -30 -8 -65 -6 -34 -9 -65 -6 -68 4 -3 17 -3 31 1 19 5 34 27 69 100 44 92 47 95 108 128 72 38 91 61 69 82 -20 18 -59 25 -95 16z"
            style={{
              fill: 'green',
              stroke: '#282c34',
              strokeWidth: 20,
              transform: `translate(-25px,12px) rotate(22deg) scale(0.075,-0.075)`,
            }}
          />
        </animated.g>
      )}
    </Spring>
  )
}

export default Plane
