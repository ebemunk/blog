import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { map } from 'ramda'
import classnames from 'classnames'

import Button from './Button'

import '!style-loader!css-loader!react-day-picker/lib/style.css'
import style from './Calendar.css'

import {
  dayClickRange,
  todayRange,
  thisWeekRange,
  thisWeekendRange,
  nextWeekRange,
  thisMonthRange,
  format,
} from '../date'

export function Calendar(props) {
  const { from, to, minDate, maxDate, selectDates, preset } = props
  const now = new Date()

  return (
    <React.Fragment>
      <div className={style.wrap}>
        <div className={style.date}>
          <DayPicker
            className={style.picker}
            showOutsideDays
            firstDayOfWeek={1}
            selectedDays={[from, { from, to }]}
            modifiers={{
              start: from,
              end: to,
            }}
            disabledDays={{
              before: minDate,
              after: maxDate,
            }}
            onDayClick={day => {
              const range = DateUtils.addDayToRange(day, { from, to })
              selectDates(dayClickRange(range))
            }}
            month={from}
          />
        </div>
        <div className={style.buttons}>
          <Button
            onClick={() => selectDates({ from: null, to: null })}
            children="Clear"
          />
          <Button
            onClick={() => selectDates(todayRange(now), 'today')}
            active={preset === 'today'}
            children="Today"
          />
          <Button
            onClick={() => selectDates(thisWeekRange(now), 'this-week')}
            active={preset === 'this-week'}
            children="This week"
          />
          <Button
            onClick={() => selectDates(thisWeekendRange(now), 'this-weekend')}
            active={preset === 'this-weekend'}
            children="This weekend"
          />
          <Button
            onClick={() => selectDates(nextWeekRange(now), 'next-week')}
            active={preset === 'next-week'}
            children="Next week"
          />
          <Button
            onClick={() => selectDates(thisMonthRange(now), 'this-month')}
            active={preset === 'this-month'}
            children="This month"
          />
        </div>
      </div>
      <div className={style.selection}>
        {from && to
          ? `${format(from, 'MMM DD @ h:mma')} - ${format(
              to,
              'MMM DD @ h:mma',
            )}`
          : `Select Dates`}
      </div>
    </React.Fragment>
  )
}

import { connect } from 'react-redux'
import { selectDates } from '../actions'

export default connect(
  state => ({
    ...['from', 'to', 'minDate', 'maxDate'].reduce(
      (o, cur) => ({
        ...o,
        [cur]: state.datePicker[cur]
          ? new Date(state.datePicker[cur])
          : undefined,
      }),
      {},
    ),
    preset: state.datePicker.preset,
  }),
  {
    selectDates,
  },
)(Calendar)
