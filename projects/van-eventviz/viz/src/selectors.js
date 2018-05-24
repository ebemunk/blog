import { createSelectorCreator, defaultMemoize } from 'reselect'
import * as R from 'ramda'
import * as dateFns from 'date-fns'
import Fuse from 'fuse.js'

export const events = R.pathOr([], ['events'])
export const selectedTags = R.pathOr([], ['tags', 'filters'])
export const dateFilter = R.pipe(
  R.pathOr({}, ['datePicker']),
  R.pick(['from', 'to']),
)
export const searchFilter = R.pathOr('', ['search', 'string'])

const createSelector = createSelectorCreator(defaultMemoize, R.equals)

export const filteredEvents = createSelector(
  [events, selectedTags, dateFilter],
  (evt, selected, dates) =>
    evt
      .filter(e => {
        const l = R.intersection(e.tags, selected).length
        return l
      })
      .filter(
        e =>
          (dateFns.isAfter(e.startDate, dates.from) &&
            dateFns.isBefore(e.startDate, dates.to)) ||
          (dateFns.isAfter(e.endDate, dates.from) &&
            dateFns.isBefore(e.endDate, dates.to)) ||
          (dateFns.isBefore(e.startDate, dates.from) &&
            dateFns.isAfter(e.endDate, dates.to)),
      ),
)

export const searchFilteredEvents = createSelector(
  [filteredEvents, searchFilter],
  (evts, filter) => {
    if (!filter) return evts

    const fuse = new Fuse(evts, {
      shouldSort: true,
      keys: [
        // 'name',
        { name: 'name', weight: 0.7 },
        { name: 'description', weight: 0.3 },
      ],
    })
    return fuse.search(filter)
  },
)
