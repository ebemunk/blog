import React from 'react'
import { format } from 'd3'

import dow from 'data/dow'
import month from 'data/month'

import { BarChart, Labels } from 'vizlib'

import css from './DayOfWeek.css'

const DayOfWeek = ({}) => (
  <div className={css.split2}>
    <Labels
      title="Starting Day"
      left="Number of events"
      bottom="Day of Week"
      className={css.labels}
    >
      <BarChart
        className={css.white}
        width={316}
        height={300}
        padding={{
          top: 15,
          left: 35,
          right: 10,
          bottom: 30,
        }}
        data={dow.map(row => ({
          key: row.dow,
          value: row.count,
        }))}
        bandAxisProps={{
          tickFormat: d =>
            ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][d - 1],
        }}
        linearAxisProps={{
          tickFormat: format(','),
          className: css.linearAxis,
          tickSize: -316 + 35 + 10,
        }}
      />
    </Labels>
    <Labels
      title="Starting Month"
      left="Number of events"
      bottom="Month"
      className={css.labels}
    >
      <BarChart
        className={css.white}
        width={316}
        height={300}
        padding={{
          top: 10,
          left: 30,
          right: 15,
          bottom: 30,
        }}
        data={month.map(row => ({
          key: row.month,
          value: row.count,
        }))}
        bandAxisProps={{
          tickFormat: d =>
            [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ][d - 1],
        }}
        linearAxisProps={{
          tickFormat: format(','),
          className: css.linearAxis,
          tickSize: -316 + 35 + 10,
        }}
      />
    </Labels>
  </div>
)

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(hot(module))(DayOfWeek)
