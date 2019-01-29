import React from 'react'

import Waypoint from '../../vizlib/Waypoint'

import Chart from './Chart'

const Years = ({ stage, setStage }) => (
  <React.Fragment>
    <div
      style={{
        display: 'flex',
        // border: '3px dashed white',
      }}
    >
      <div
        style={{
          flexBasis: '25%',
        }}
      >
        <Waypoint onEnter={() => setStage(0)} active={stage === 0}>
          Fatalities, Ground Fatalities and crashes per year.
        </Waypoint>
        <Waypoint onEnter={() => setStage(1)} active={stage === 1}>
          1985 was the worst year in aviation history. Wiki
        </Waypoint>
        <Waypoint onEnter={() => setStage(2)} active={stage === 2}>
          Spike in ground fatalities in 2001 due to 9/11 attacks.
        </Waypoint>
        <Waypoint onEnter={() => setStage(3)} active={stage === 3}>
          When Military missions are considered, there's a big increase in all
          measures.
        </Waypoint>
        <Waypoint onEnter={() => setStage(4)} active={stage === 4}>
          Notice the big spike during World War 2, and the sudden decrease
          immediately following.
        </Waypoint>
        <Waypoint
          onEnter={() => setStage(5)}
          active={stage === 5}
          style={{ margin: '8rem 1.5rem 20rem 1.5rem' }}
        >
          Vietnam War caused a steady increase.
        </Waypoint>
      </div>
      <div
        style={{
          flexBasis: '75%',
          position: 'sticky',
          alignSelf: 'flex-start',
          top: 0,
        }}
      >
        <Chart stage={stage} />
      </div>
    </div>
  </React.Fragment>
)

import { hot } from 'react-hot-loader'
import { compose, withState } from 'recompose'

export default compose(
  hot(module),
  withState('stage', 'setStage', 0),
)(Years)
