export const getCharCooccurrence = () => dispatch => {
  const charCooccurrence = require('data/charCooccurrence.json')

  dispatch({
    type: 'data/charCooccurrence',
    payload: charCooccurrence,
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj([], {
  'data/charCooccurrence': (state, action) =>
    action.payload.map(d => ({
      season: d.s,
      episode: d.e,
      from_char: d.f,
      to_char: d.t,
      val: d.v,
    })),
})

import * as R from 'ramda'
import { createSelector } from 'reselect'
import { selectedEpisodeKeys } from '../selectors'

const pad2 = str => str.toString().padStart(2, '0')

export const charCooccurrence = R.path(['charCooccurrence'])

export const selectedCharCooccurrence = createSelector(
  [charCooccurrence, selectedEpisodeKeys],
  (charCooccurrence, selectedKeys) => {
    const cooc = charCooccurrence.filter(c =>
      selectedKeys.includes(`S${pad2(c.season + '')}-E${pad2(c.episode + '')}`),
    )

    let links = cooc.reduce((map, val) => {
      const key = `${val.from_char}-${val.to_char}`
      if (!map[key]) {
        map[key] = {
          source: val.from_char,
          target: val.to_char,
          value: val.val,
        }
        return map
      } else {
        map[key].value = map[key].value + val.val
        return map
      }
    }, {})

    links = Object.values(links)

    const nodes = R.pipe(
      R.uniq,
      R.map(id => ({
        id,
        numLinksTo: Math.max(links.filter(i => i.target === id).length + 2, 3),
      })),
    )([
      //
      ...links.map(d => d.source),
      ...links.map(d => d.target),
    ])

    return { links, nodes }
  },
)
