export const getFlashes = () => dispatch => {
  const flashes = require('data/flashes.json')

  dispatch({
    type: 'data/flashes',
    payload: flashes,
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj([], {
  'data/flashes': (state, action) => action.payload,
})

import * as R from 'ramda'

export const flashes = R.path(['flashes'])
