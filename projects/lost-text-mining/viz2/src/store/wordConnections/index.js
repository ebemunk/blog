export const getWordConnections = () => dispatch => {
  const wordConnections = require('data/wordConnections.json')

  dispatch({
    type: 'data/wordConnections',
    payload: wordConnections,
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj(
  {
    data: {},
  },
  {
    'data/wordConnections': (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
)

import * as R from 'ramda'

export const wordConnections = R.path(['wordConnections'])
