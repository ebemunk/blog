import { createSelector } from 'reselect'
import * as R from 'ramda'

export const events = state => state.events
export const selectedTags = state => state.selectedTags

export const filteredEvents = createSelector(
  [events, selectedTags],
  (evt, selected) =>
    evt.filter(e => {
      const l = R.intersection(e.tags, selected).length
      return l
    }),
)
