export const getCountsPerEpisode = () => dispatch => {
  const countsPerEpisode = require('data/countsPerEpisode.json')

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

import { selectorByEpisode } from '../util'

export const countsPerEpisode = R.path(['countsPerEpisode'])

export const countsPerEpisodeSelection = selectorByEpisode(countsPerEpisode)
