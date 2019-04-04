import React, { useState } from 'react'

import Waypoint from '../../vizlib/Waypoint'
import ChartTitle from '../../vizlib/ChartTitle'

import Bar from './Bar'

const Phase = () => {
  const [stage, setStage] = useState(0)

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flexBasis: '50%' }}>
        <Waypoint onEnter={() => setStage(0)} active={stage === 0}>
          Crashes and Average Fatalities for phases of a flight.
        </Waypoint>
        <Waypoint onEnter={() => setStage(1)} active={stage === 1}>
          Number of crashes increases as a flight enters later stages.
        </Waypoint>
        <Waypoint onEnter={() => setStage(2)} active={stage === 2}>
          Safest phases of flights, obviously, is when the plane is stationary
          or moving on the ground: Standing, Taxi and Pushback.
        </Waypoint>
        <Waypoint onEnter={() => setStage(3)} active={stage === 3}>
          Most dangerous is when the plane is En Route, with the most crashes.
          Even though there are almost half as many crashes in Approach stage,
          the average fatalities are highest among any other phase.
        </Waypoint>
        <Waypoint onEnter={() => setStage(4)} active={stage === 4}>
          Landing phase is 3rd highest amount of crashes, including Unknowns,
          but has way lower average fatalities. Crashing during Landing might be
          the "best case".
        </Waypoint>
        <Waypoint
          onEnter={() => setStage(5)}
          onLeave={({ currentPosition }) => {
            if (currentPosition === 'above') setStage(0)
          }}
          active={stage === 5}
          style={{ marginBottom: '20rem' }}
        >
          Maneuvering is the phase for demonstration flights when the plane is
          low-flying.
        </Waypoint>
      </div>
      <div
        style={{
          flexBasis: '50%',
          position: 'sticky',
          top: 0,
          alignSelf: 'flex-start',
        }}
      >
        <ChartTitle
          title="Which flight phases are the most dangerous?"
          subtitle="Mouseover to see details"
        />
        <Bar stage={stage} />
      </div>
    </div>
  )
}

import { hot } from 'react-hot-loader'

export default hot(module)(Phase)
