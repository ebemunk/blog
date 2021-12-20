export const getLinesPerChar = () => dispatch => {
  const linesPerChar = require('data/linesPerChar.json')

  dispatch({
    type: 'data/linesPerChar',
    payload: linesPerChar,
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj([], {
  'data/linesPerChar': (state, action) => action.payload,
})

import { createSelector } from 'reselect'
import * as R from 'ramda'

import { selectedEpisodeKeys } from '../selectors'

export const linesPerChar = R.path(['linesPerChar'])

export const linesPerCharBySelection = createSelector(
  [linesPerChar, selectedEpisodeKeys],
  (linesPerChar, selectedKeys) => {
    return R.pipe(
      R.filter(d => selectedKeys.includes(d.key)),
      R.groupBy(d => d.char_name),
      R.mapObjIndexed(d => R.sum(d.map(R.path(['lines'])))),
      R.toPairs(),
      R.map(R.zipObj(['key', 'value'])),
      R.sortBy(d => -d.value),
    )(linesPerChar)
  },
)
