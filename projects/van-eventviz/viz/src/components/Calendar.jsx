import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { map } from 'ramda'

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
  const { from, to, minDate, maxDate, selectDates } = props
  const now = new Date()

  console.log('from', from)

  return (
    <div className={style.wrap}>
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
      <div>
        {format(from, 'MMM DD @ h:mma')}
        {format(to, 'MMM DD @ h:mma')}
      </div>
      <div className={style.buttons}>
        <button
          onClick={() => selectDates({ from: null, to: null })}
          children="Clear"
        />
        <button onClick={() => selectDates(todayRange(now))} children="Today" />
        <button
          onClick={() => selectDates(thisWeekRange(now))}
          children="This week"
        />
        <button
          onClick={() => selectDates(thisWeekendRange(now))}
          children="This weekend"
        />
        <button
          onClick={() => selectDates(nextWeekRange(now))}
          children="Next week"
        />
        <button
          onClick={() => selectDates(thisMonthRange(now))}
          children="This month"
        />
      </div>
    </div>
  )
}

import { connect } from 'react-redux'
import { selectDates } from '../actions'

export default connect(
  state => ({
    ...map(d => new Date(d), state.datePicker),
  }),
  {
    selectDates,
  },
)(Calendar)
