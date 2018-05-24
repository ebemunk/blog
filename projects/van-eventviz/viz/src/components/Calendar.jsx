import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { map } from 'ramda'
import classnames from 'classnames'
import Button from 'material-ui/Button'

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
  const isActive = test => (preset === test ? 'primary' : undefined)

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
            fullWidth
            onClick={() => selectDates({ from: null, to: null })}
            children="Clear"
          />
          <Button
            fullWidth
            onClick={() => selectDates(todayRange(now), 'today')}
            color={isActive('today')}
            children="Today"
          />
          <Button
            fullWidth
            onClick={() => selectDates(thisWeekRange(now), 'this-week')}
            color={isActive('this-week')}
            children="This week"
          />
          <Button
            fullWidth
            onClick={() => selectDates(thisWeekendRange(now), 'this-weekend')}
            color={isActive('this-weekend')}
            children="This weekend"
          />
          <Button
            fullWidth
            onClick={() => selectDates(nextWeekRange(now), 'next-week')}
            color={isActive('next-week')}
            children="Next week"
          />
          <Button
            fullWidth
            onClick={() => selectDates(thisMonthRange(now), 'this-month')}
            color={isActive('this-month')}
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
