import { createSelector } from 'reselect'
import * as R from 'ramda'

import { episodeSelection } from './selectors'

export const reducerFromObj = (defaultState, obj) => (
  state = defaultState,
  action,
) => (obj[action.type] ? obj[action.type](state, action) : state)

export const selectorByEpisode = data =>
  createSelector(
    [data, episodeSelection],
    (data, [start, end]) =>
      R.equals([start, end], [null, null]) ? data : data.slice(start, end + 1),
  )
