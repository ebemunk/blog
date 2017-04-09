import _ from 'lodash'
import Measure from 'appmetrics.js'

import * as data from '../data'

const pad2 = _.partialRight(_.padStart, 2, 0)

export const seasonEpisodes = state => state.seasonEpisodes

export const episodeSelection = state => state.episodeSelection

export const selectedEpisodes = state => state.seasonEpisodes.slice(...state.episodeSelection)

export const totalLines = (state, getters) => {
  const m = new Measure('totalLines')
  m.start()
  const keepKeys = getters.selectedEpisodes.map(d => d.key)
  const plz = _(data.totalLines)
  .filter(d => {
    return keepKeys.includes(`S${pad2(d.season)}-E${pad2(d.episode)}`)
  })
  .groupBy('char_name')
  .map((char, key) => ({
    char_name: key,
    lines: char.reduce((total, val) => {
      return total + val.lines
    }, 0)
  }))
  .orderBy('lines', 'desc')
  .value()
  m.end().log()
  return plz
}


export const charCooccurrence = (state, getters) => {
  const m = new Measure('charCooccurrence')
  m.start()
  const keepKeys = getters.selectedEpisodes.map(d => d.key)
  const plz = _(data.charCooccurrence)
  .filter(d => {
    // console.log('wa', d);
    return keepKeys.includes(`S${pad2(d.season)}-E${pad2(d.episode)}`)
  })
  // .tap(plzl => console.log('ya', plzl))
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

  const plz2 = Array.from(plz)
  .map(d => {
    return {
      source: d[0].from_char,
      target: d[0].to_char,
      value: d[1]
    }
  })

  // console.log('val', plz2);
  m.end().log()
  return plz2
}

export const charOccNodes = (state, getters) => {
  const m = new Measure('charOccNodes')
  m.start()
  const { charCooccurrence } = getters
  const nodes = _.uniq(charCooccurrence.map(d => d.source).concat(charCooccurrence.map(d => d.target)))
  .map(d => {
    const r = charCooccurrence.filter(item => item.target === d).length
    return {
      id: d,
      r: Math.max(r+2, 3)
    }
  })

  m.end().log()
  return nodes
}
