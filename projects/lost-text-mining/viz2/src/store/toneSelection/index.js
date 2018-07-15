export const toggle = payload => ({
  type: 'toneSelection/toggle',
  payload,
})

export const toggleAll = () => ({
  type: 'toneSelection/toggleAll',
})

export const toggleNone = () => ({
  type: 'toneSelection/toggleNone',
})

import * as R from 'ramda'

import { reducerFromObj } from '../util'

const defaultState = {
  anger: true,
  fear: true,
  joy: true,
  sadness: true,
  analytical: false,
  confident: false,
  tentative: false,
}

export const reducer = reducerFromObj(defaultState, {
  'toneSelection/toggle': (state, action) => ({
    ...state,
    [action.payload]: !state[action.payload],
  }),
  'toneSelection/toggleAll': () => defaultState,
  'toneSelection/toggleNone': () => R.map(() => false)(defaultState),
})
