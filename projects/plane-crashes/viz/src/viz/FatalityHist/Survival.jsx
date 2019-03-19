import React from 'react'
import { format } from 'd3-format'

import data from '../../data/fatality-histogram.csv'

import { blueRed } from '../../vizlib/colors'
import ChartTitle from '../../vizlib/ChartTitle'

const fatalities = data.reduce(
  (acc, d) => {
    const tot = +d.passenger_fat + +d.crew_fat
    if (tot > 0) {
      acc.onep++
    } else {
      acc.none++
    }
    return acc
  },
  {
    none: 0,
    onep: 0,
  },
)
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

export default React.memo(Survival)
