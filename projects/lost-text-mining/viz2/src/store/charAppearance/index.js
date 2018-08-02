export const getCharAppearance = () => dispatch => {
  const charAppearance = require('data/charAppearance.json')

  dispatch({
    type: 'data/charAppearance',
    payload: charAppearance,
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj(
  {},
  {
    'data/charAppearance': (state, action) => action.payload,
  },
)

import * as R from 'ramda'

export const charAppearance = R.path(['charAppearance'])
