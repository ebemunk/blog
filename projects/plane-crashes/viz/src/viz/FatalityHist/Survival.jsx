import React from 'react'
import { format } from 'd3-format'

import { fatalities } from '../../data/fatality-histogram.json'

import { blueRed } from '../../vizlib/colors'
import ChartTitle from '../../vizlib/ChartTitle'

const total = fatalities.none + fatalities.onep
const numFormat = format('.4p')
const color = blueRed()

const Survival = ({}) => {
  return (
    <>
      <ChartTitle
        title="Flights with fatalities"
        subtitle="2/3rds of crashes have no fatalities."
        style={{ marginLeft: '0.5rem', marginBottom: '0.5rem' }}
      />
      <div
        style={{
          display: 'flex',
          height: '65px',
        }}
      >
        <div
          style={{
            background: color(0),
            width: `${(fatalities.none / total) * 100}%`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div>No fatalities</div>
          <strong>{numFormat(fatalities.none / total)}</strong>
        </div>
        <div
          style={{
            background: color(1),
            width: `${(fatalities.onep / total) * 100}%`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div>At least 1 fatality</div>
          <strong>{numFormat(fatalities.onep / total)}</strong>
        </div>
      </div>
    </>
  )
}

import { hot } from 'react-hot-loader'

export default hot(module)(Survival)
