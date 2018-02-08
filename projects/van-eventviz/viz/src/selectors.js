import { createSelector } from 'reselect'
import * as R from 'ramda'
import * as dateFns from 'date-fns'

export const events = state => state.events
export const selectedTags = state => state.tags.filters
export const dateFilter = state => R.pick(['from', 'to'])(state.datePicker)

export const filteredEvents = createSelector(
  [events, selectedTags, dateFilter],
  (evt, selected, dates) =>
    evt
      .filter(e => {
        const l = R.intersection(e.tags, selected).length
        return l
      })
      .filter(e => {
        return (
          dateFns.isAfter(e.startDate, dates.from) &&
          dateFns.isBefore(e.startDate, dates.to)
        )
      }),
)
