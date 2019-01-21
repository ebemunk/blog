import React from 'react'
import Waypoint from 'react-waypoint'

import Chart from './Chart'

const WP = ({ children, active, style, ...rest }) => (
  <Waypoint topOffset="20%" bottomOffset="80%" {...rest}>
    <div
      style={{
        margin: '5rem 0',
        padding: '3rem',
        border: '1px solid gray',
        background: 'red',
        opacity: active ? 1 : 0.3,
        ...style,
      }}
    >
      {children}
    </div>
  </Waypoint>
)

const Years = ({ stage, setStage }) => (
  <React.Fragment>
    <div
      style={{
        display: 'flex',
        border: '3px dashed white',
      }}
    >
      <div
        style={{
          flexBasis: '25%',
        }}
      >
        <WP onEnter={() => setStage(0)} active={stage === 0}>
          Fatalities, Ground Fatalities and crashes per year.
        </WP>
        <WP onEnter={() => setStage(1)} active={stage === 1}>
          1985 was the worst year in aviation history. Wiki
        </WP>
        <WP onEnter={() => setStage(2)} active={stage === 2}>
          Spike in ground fatalities in 2001 due to 9/11 attacks.
        </WP>
        <WP onEnter={() => setStage(3)} active={stage === 3}>
          When Military missions are considered, there's a big increase in all
          measures.
        </WP>
        <WP onEnter={() => setStage(4)} active={stage === 4}>
          Notice the big spike during World War 2, and the sudden decrease
          immediately following.
        </WP>
        <WP
          onEnter={() => setStage(5)}
          active={stage === 5}
          style={{ marginBottom: '20rem' }}
        >
          Vietnam War caused a steady increase.
        </WP>
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
