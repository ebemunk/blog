export const getPersonalities = () => dispatch => {
  const personalities = require('data/personalities.json')

  dispatch({
    type: 'data/personalities',
    payload: personalities,
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj([], {
  'data/personalities': (state, action) => action.payload,
})

import { createSelector } from 'reselect'
import * as R from 'ramda'

const personalities = R.path(['personalities'])
const charSelection = R.path(['charSelection'])

export const selectedChars = createSelector(
  [charSelection, personalities],
  (selection, personalities) =>
    selection.map(sel =>
      sel.map(s => personalities.find(p => s === p.char_name)),
    ),
)

export const combinedSelectedChars = createSelector(
  [selectedChars],
  selected => {
    const pickKeys = R.pick(['trait_id', 'percentile'])

    const combineGroup = R.pipe(
      R.map(d => [
        ...d.profile.personality,
        { trait_id: 'needs', children: d.profile.needs },
        { trait_id: 'values', children: d.profile.values },
      ]),
      R.map(R.map(d => [pickKeys(d), ...d.children.map(pickKeys)])),
      R.flatten,
      R.groupBy(d => d.trait_id),
      R.map(d =>
        d.reduce((acc, v, i, arr) => acc + v.percentile / arr.length, 0),
      ),
    )

    return R.pipe(
      R.map(combineGroup),
      R.reduce((acc, v) => {
        for (let key in v) {
          if (acc[key]) acc[key].push(v[key])
          else acc[key] = [v[key]]
        }
        return acc
      }, {}),
    )(selected)
  },
)
