import { createSelector } from 'reselect'
import * as R from 'ramda'

const episodes = R.path(['episodes'])
const episodeSelection = R.path(['episodeSelection'])

const wordCounts = R.path(['wordCount'])
const linesPerChar = R.path(['linesPerChar'])
const flashes = R.path(['flashes'])
const charCooccurrence = R.path(['charCooccurrence'])

const personalities = R.path(['personalities'])
const personalitySelection = R.path(['personalitySelection'])

export const selectedEpisodeKeys = createSelector(
  [episodes, episodeSelection],
  (episodes, [start, end]) => {
    const selected = R.equals([start, end], [null, null])
      ? episodes
      : episodes.slice(start, end + 1)
    return selected.map(({ key }) => key)
  },
)

export const selectedFlashes = createSelector(
  [flashes, episodeSelection],
  (flashes, [start, end]) =>
    R.equals([start, end], [null, null])
      ? flashes
      : flashes.slice(start, end + 1),
)

export const wordCountBySelection = createSelector(
  [wordCounts, episodeSelection],
  (wordCounts, [start, end]) =>
    R.equals([start, end], [null, null])
      ? wordCounts
      : wordCounts.slice(start, end + 1),
)

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

export const selectedProfiles = createSelector(
  [personalitySelection, personalities],
  (selection, personalities) =>
    selection.map(sel =>
      sel.map(s => personalities.find(p => s === p.char_name)),
    ),
)

export const combinedProfileSelection = createSelector(
  [selectedProfiles],
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

export const selectedCharCooccurrence = createSelector(
  [charCooccurrence, episodeSelection],
  (charCooccurrence, [start, end]) => {
    const cooc = R.equals([start, end], [null, null])
      ? charCooccurrence
      : charCooccurrence.slice(start, end + 1)

    const links = R.pipe(
      R.reduce((map, val) => {
        const key = R.pick(['from_char', 'to_char'])(val)
        if (!map.has(key)) {
          map.set(key, val.val)
        } else {
          const c = map.get(key)
          map.set(key, c + val.val)
        }
        return map
      }, new Map()),
      Array.from,
      R.map(([link, value]) => ({
        source: link.from_char,
        target: link.to_char,
        value,
      })),
    )(cooc)

    const nodes = R.pipe(
      R.uniq,
      R.map(id => ({
        id,
        numLinksTo: links.filter(i => i.target === id).length,
      })),
    )([
      //
      ...links.map(d => d.source),
      ...links.map(d => d.target),
    ])

    return { links, nodes }
  },
)
