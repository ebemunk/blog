export const getCountsPerEpisode = () => dispatch => {
  const countsPerEpisode = require('../../data/countsPerEpisode.json')

  dispatch({
    type: 'data/countsPerEpisode',
    payload: countsPerEpisode,
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj([], {
  'data/countsPerEpisode': (state, action) => action.payload,
})

import * as R from 'ramda'
import { createSelector } from 'reselect'

import { episodeSelection } from '../selectors'

export const countsPerEpisode = R.path(['countsPerEpisode'])

export const countsPerEpisodeSelection = createSelector(
  [countsPerEpisode, episodeSelection],
  (countsPerEpisode, [start, end]) =>
    R.equals([start, end], [null, null])
      ? countsPerEpisode
      : countsPerEpisode.slice(start, end + 1),
)
