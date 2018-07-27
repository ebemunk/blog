export const getReadingLevels = () => dispatch => {
  const episode = require('data/episodeReadingLevel.json')
  const char = require('data/charReadingLevel.json')

  dispatch({
    type: 'data/readingLevel',
    payload: {
      episode,
      char,
    },
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj(
  { char: [], episode: [] },
  {
    'data/readingLevel': (state, action) => action.payload,
  },
)

import * as R from 'ramda'
import { selectorByEpisode } from '../util'

export const readingLevel = R.path(['readingLevel'])
export const charReadingLevel = R.path(['readingLevel', 'char'])
export const episodeReadingLevel = R.path(['readingLevel', 'episode'])
export const episodeReadingLevelSelection = selectorByEpisode(
  episodeReadingLevel,
)
