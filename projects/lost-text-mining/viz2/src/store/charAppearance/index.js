export const getCharAppearance = () => dispatch => {
  const charAppearance = require('data/charAppearance.json')
  const charMentions = require('data/charMentions.json')

  dispatch({
    type: 'data/charAppearance',
    payload: {
      appearances: charAppearance,
      mentions: charMentions,
    },
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj(
  {
    appearances: {},
    mentions: {},
  },
  {
    'data/charAppearance': (state, action) => action.payload,
  },
)

import * as R from 'ramda'

export const charAppearance = R.path(['charAppearance'])
