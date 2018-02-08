import React from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import * as dateFns from 'date-fns'

import '!style-loader!css-loader!react-day-picker/lib/style.css'

import style from './Calendar.css'

export function Calendar(props) {
  const { from, to, minDate, maxDate, selectDates } = props
  const now = new Date()
  const nextWeek = dateFns.addDays(now, 7)

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
          selectDates(range)
        }}
        month={from}
      />
      <div className={style.buttons}>
        <button
          onClick={() => selectDates({ from: undefined, to: undefined })}
          children="Clear"
        />
        <button
          onClick={() =>
            selectDates({
              from: now,
              to: dateFns.endOfDay(now),
            })
          }
          children="Today"
        />
        <button
          onClick={() =>
            selectDates({
              from: now,
              to: dateFns.endOfWeek(now, { weekStartsOn: 1 }),
            })
          }
          children="This week"
        />
        <button
          onClick={() =>
            selectDates({
              from: dateFns.subDays(
                dateFns.endOfWeek(now, { weekStartsOn: 1 }),
                1,
              ),
              to: dateFns.endOfWeek(now, { weekStartsOn: 1 }),
            })
          }
          children="This weekend"
        />
        <button
          onClick={() =>
            selectDates({
              from: dateFns.startOfWeek(nextWeek, { weekStartsOn: 1 }),
              to: dateFns.endOfWeek(nextWeek, { weekStartsOn: 1 }),
            })
          }
          children="Next week"
        />
        <button
          onClick={() =>
            selectDates({
              from: now,
              to: dateFns.endOfMonth(now),
            })
          }
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
    ...state.datePicker,
  }),
  {
    selectDates,
  },
)(Calendar)
