import React from 'react'

import places from 'data/places'

import { BarChart, Labels } from 'vizlib'

import css from '../DayOfWeek/DayOfWeek.css'

const Places = ({}) => (
  <div className={css.locs}>
    <Labels
      title="Events by Location"
      left="Location Name"
      top="Number of events"
      className={css.labels}
    >
      <BarChart
        className={css.white}
        width={750}
        height={550}
        padding={{
          top: 20,
          left: 250,
          right: 15,
          bottom: 30,
        }}
        data={places.map(row => ({
          key: row.name,
          value: row.count,
        }))}
        horizontal
        bandAxisProps={{
          tickSize: 0,
        }}
        linearAxisProps={{
          tickSize: -550 + 20 + 30,
          className: css.linearAxis,
        }}
      />
    </Labels>
  </div>
)

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(hot(module))(Places)
