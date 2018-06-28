import { createSelector } from 'reselect'
import * as R from 'ramda'

import {
  episodes,
  episodeSelection,
  selectedEpisodeKeys,
} from 'store/selectors'

const flashes = R.path(['flashes'])
const charCooccurrence = R.path(['charCooccurrence'])

export const selectedFlashes = createSelector(
  [flashes, episodeSelection],
  (flashes, [start, end]) =>
    R.equals([start, end], [null, null])
      ? flashes
      : flashes.slice(start, end + 1),
)

const pad2 = str => str.toString().padStart(2, '0')

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
