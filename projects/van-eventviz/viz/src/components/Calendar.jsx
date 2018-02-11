import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { map } from 'ramda'
import classnames from 'classnames'

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

  console.log(props)

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
          <button
            onClick={() => selectDates({ from: null, to: null })}
            children="Clear"
          />
          <button
            onClick={() => selectDates(todayRange(now), 'today')}
            className={classnames({ [style.active]: preset === 'today' })}
            children="Today"
          />
          <button
            onClick={() => selectDates(thisWeekRange(now), 'this-week')}
            className={classnames({ [style.active]: preset === 'this-week' })}
            children="This week"
          />
          <button
            onClick={() => selectDates(thisWeekendRange(now), 'this-weekend')}
            className={classnames({
              [style.active]: preset === 'this-weekend',
            })}
            children="This weekend"
          />
          <button
            onClick={() => selectDates(nextWeekRange(now), 'next-week')}
            className={classnames({ [style.active]: preset === 'next-week' })}
            children="Next week"
          />
          <button
            onClick={() => selectDates(thisMonthRange(now), 'this-month')}
            className={classnames({ [style.active]: preset === 'this-month' })}
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
