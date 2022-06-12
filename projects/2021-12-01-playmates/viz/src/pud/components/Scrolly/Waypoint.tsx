import React, { ReactNode } from 'react'
import { Waypoint as ReactWaypoint } from 'react-waypoint'

import { Step } from './types'

export default function Waypoint({
  step,
  setStep,
  number,
  total,
  children,
}: {
  step: Step
  setStep: (v: Step) => void
  number: number
  total: number
  children: ReactNode
}) {
  return (
    <ReactWaypoint
      topOffset="10%"
      bottomOffset="10%"
      onEnter={() => {
        setStep(step)
      }}
    >
      <div
        style={{
          border: '1px solid white',
          marginBottom: '90vh',
          pointerEvents: 'all',
          padding: '0 1rem',
        }}
      >
        <div
          style={{
            textAlign: 'right',
            fontSize: '0.7rem',
          }}
        >
          {number}/{total}
        </div>
        {children}
      </div>
    </ReactWaypoint>
  )
}
