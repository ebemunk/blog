export const getWordCount = () => dispatch => {
  const wordCount = require('data/wordCount.json')

  dispatch({
    type: 'data/wordCount',
    payload: wordCount,
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj([], {
  'data/wordCount': (state, action) => action.payload,
})

import * as R from 'ramda'

import { selectorByEpisode } from '../util'

export const wordCount = R.path(['wordCount'])

export const wordCountBySelection = selectorByEpisode(wordCount)
