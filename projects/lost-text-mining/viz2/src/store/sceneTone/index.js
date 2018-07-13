export const getSceneTone = () => dispatch => {
  const sceneTone = require('data/sceneTone.json')

  dispatch({
    type: 'data/sceneTone',
    payload: sceneTone,
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj([], {
  'data/sceneTone': (state, action) => action.payload,
})

import * as R from 'ramda'

export const sceneTone = R.path(['sceneTone'])
