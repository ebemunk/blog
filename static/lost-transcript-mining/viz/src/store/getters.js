import _ from 'lodash'
import Measure from 'appmetrics.js'

import * as data from '../data'

const pad2 = _.partialRight(_.padStart, 2, 0)

export const seasonEpisodes = state => state.seasonEpisodes

export const episodeSelection = state => state.episodeSelection

export const selectedEpisodes = state => state.seasonEpisodes.slice(...state.episodeSelection)

export const filterDataBySelectedEpisodes = (state, getters) => {
  return data => {
    const keys = getters.selectedEpisodes.map(d => d.key)

    return _.chain(data)
      .filter(d => keys.includes(`S${pad2(d.season)}-E${pad2(d.episode)}`))
  }
}

export const totalLines = (state, getters) => {
  const m = new Measure('totalLines').start()

  return getters.filterDataBySelectedEpisodes(data.totalLines)
    .groupBy('char_name')
    .map((char, key) => ({
      char_name: key,
      lines: char.reduce((total, val) => {
        return total + val.lines
      }, 0)
    }))
    .orderBy('lines', 'desc')
    .tap(() => m.end().log())
    .value()
}

export const charCooccurrence = (state, getters) => {
  const m = new Measure('charCooccurrence').start()

  const links = getters.filterDataBySelectedEpisodes(data.charCooccurrence)
  .reduce((map, val) => {
    const key = _.pick(val, ['from_char', 'to_char'])
    if( ! map.has(key) ) {
      map.set(key, val.val)
    } else {
      const c = map.get(key)
      map.set(key, c+val.val)
    }
    return map
  }, new Map())
  .thru(Array.from)
  .map(d => {
    return {
      source: d[0].from_char,
      target: d[0].to_char,
      value: d[1]
    }
  })
  .tap(() => m.end().log())
  .value()

  const nodes = _([
    ...links.map(d => d.source),
    ...links.map(d => d.target)
  ])
  .uniq()
  .map(d => {
    const r = links.filter(item => item.target === d).length
    return {
      id: d,
      r: Math.max(r+2, 3)
    }
  })
  .value()

  return {
    nodes,
    links
  }
}
