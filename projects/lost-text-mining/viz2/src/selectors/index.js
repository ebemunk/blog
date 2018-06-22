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
