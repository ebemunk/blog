import React from 'react'

import Waypoint from '../../vizlib/Waypoint'

import Bar from './Bar'

import rawData from '../../data/phase.csv'

const data = [
  'Standing (STD)',
  'Taxi (TXI)',
  'Takeoff (TOF)',
  'Initial climb (ICL)',
  'En route (ENR)',
  'Approach (APR)',
  'Landing (LDG)',
  'Pushback / towing (PBT)',
  'Maneuvering (MNV)',
  'Unknown (UNK)',
].map(phase => {
  const d = rawData.find(dd => dd.phase === phase)
  return [d.phase, +d.count, +d.avg]
})

const Phase = ({ hint, setHint, stage, setStage, forceHint, setForceHint }) => (
  <div style={{ display: 'flex', border: '3px dashed white' }}>
    <div style={{ flexBasis: '50%' }}>
      <Waypoint onEnter={() => setStage(0)} active={stage === 0}>
        Phases
      </Waypoint>
      <Waypoint onEnter={() => setStage(1)} active={stage === 1}>
        Number of crashes increases as a flight enters later stages.
      </Waypoint>
      <Waypoint onEnter={() => setStage(2)} active={stage === 2}>
        Safest phases of flights, obviously, is when the plane is stationary or
        moving on the ground: Standing, Taxi and Pushback.
      </Waypoint>
      <Waypoint onEnter={() => setStage(3)} active={stage === 3}>
        Most dangerous is when the plane is En Route, with the most crashes.
        Even though there are almost half as many crashes in Approach stage, the
        average fatalities are highest among any other phase.
      </Waypoint>
      <Waypoint onEnter={() => setStage(4)} active={stage === 4}>
        Landing phase is 3rd highest amount of crashes, including Unknowns, but
        has way lower average fatalities. Crashing during Landing might be the
        "best case".
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
      <Bar data={data} hint={hint} setHint={setHint} stage={stage} />
    </div>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose, withState } from 'recompose'

export default compose(
  hot(module),
  withState('hint', 'setHint'),
  withState('stage', 'setStage', 0),
  withState('forceHint', 'setForceHint'),
)(Phase)
