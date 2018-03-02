import { createSelector } from 'reselect'
import * as R from 'ramda'
import * as dateFns from 'date-fns'

export const events = R.pathOr([], ['events'])
export const selectedTags = R.pathOr([], ['tags', 'filters'])
export const dateFilter = R.pipe(
  R.pathOr({}, ['datePicker']),
  R.pick(['from', 'to']),
)

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
