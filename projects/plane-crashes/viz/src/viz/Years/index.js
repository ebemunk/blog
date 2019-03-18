import React, { useState } from 'react'

import Waypoint from '../../vizlib/Waypoint'

import Chart from './Chart'

const Years = () => {
  const [stage, setStage] = useState(0)

  return (
    <>
      <div
        style={{
          display: 'flex',
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
            1972 was the worst year in aviation history, followed closely by
            1985. (
            <a
              href="https://www.cnn.com/interactive/2014/07/travel/aviation-data/"
              target="_blank"
            >
              CNN
            </a>
            )
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
            Vietnam War caused a steady increase in both crashes and fatalities.
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
          <div style={{ marginTop: '0.5rem' }}>
            <div>
              <strong>Crashes and Fatalities between 1919-2019</strong>
            </div>
            <div style={{ fontSize: '0.8rem' }}>Mouseover to see details</div>
          </div>
          <Chart stage={stage} />
        </div>
      </div>
    </>
  )
}

import { hot } from 'react-hot-loader'

export default hot(module)(Years)
