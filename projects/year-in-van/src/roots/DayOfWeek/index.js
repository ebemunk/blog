import React from 'react'
import { format } from 'd3'

import dow from 'data/dow'
import month from 'data/month'
import places from 'data/places'

import { BarChart, Labels } from 'vizlib'

import css from './DayOfWeek.css'

const DayOfWeek = ({}) => (
  <div>
    <div className="">
      <Labels
        title="Events by Start Time"
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
              [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ][d - 1],
          }}
          linearAxisProps={{
            tickFormat: format(','),
            className: css.linearAxis,
            tickSize: -450 + 35 + 10,
          }}
        />
      </Labels>
      <Labels
        title="Events by Start Time"
        left="Number of events"
        bottom="Month"
        className={css.labels}
      >
        <BarChart
          className={css.white}
          width={450}
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
            tickSize: -450 + 35 + 10,
          }}
        />
      </Labels>
    </div>
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

export default compose(hot(module))(DayOfWeek)
