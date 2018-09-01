export const getCharWordFrequencies = () => dispatch => {
  const charWordFrequencies = require('data/charWordFrequencies.json')

  dispatch({
    type: 'data/charWordFrequencies',
    payload: charWordFrequencies,
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj([], {
  'data/charWordFrequencies': (state, action) => action.payload,
})
