import _ from 'lodash'
import R from 'ramda'
import { Metric } from '../util'

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
	const m = new Metric('totalLines').start()

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
	const m = new Metric('charCooccurrence').start()

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

export const wordsChars = (state, getters) => {
	const m = new Metric('wordsChars ramda').start()

	const keys = getters.selectedEpisodes.map(d => d.key)
	const lol = R.pipe(
		R.filter(d => keys.includes(`S${pad2(d.season)}-E${pad2(d.episode)}`)),
		R.groupBy(d => `S${pad2(d.season)}-E${pad2(d.episode)}`),
		R.map(R.map(d => d.words)),
		R.toPairs,
		R.tap(v => console.log('yxxxa;', v))
	)(data.wordsChars)

	const maxActs = Math.max(...lol.map(d => d[1].length))
	const fillArr = length => length < maxActs ? Array(maxActs - length).fill(0) : []

	console.log('keke', maxActs);

	const faf = R.pipe(
		R.map(([key, data]) => [key, data.concat(fillArr(data.length))]),
		R.map(([key, data]) => ({
			key,
			total: R.sum(data),
			...R.zipObj(R.keys(data).map(d => `scene-${+d+1}`), R.values(data))
		})),
	)(lol)

	console.log('fafa', faf);

	m.end().log()
	return faf
}

export const wordsCharsxx = (state, getters) => {
	const m = new Metric('wordsChars').start()

	const filtered = getters.filterDataBySelectedEpisodes(data.wordsChars)
	.groupBy(d => `S${pad2(d.season)}-E${pad2(d.episode)}`)

	// const max = filtered.tap(v => console.log('wtff', v)).maxBy(d => { console.log('yayaxxx', d); return d.length})
	// .value()
	//
	// console.log('yayaya', max);

	return filtered.map((ep, key) => ep.reduce((acc, d) => ({
		...acc,
		[`scene-${d.scene}`]: d.words,
		total: acc.total + d.words
	}), {key, total: 0}))
	.tap(v => console.log('ya', v))
	.tap(() => m.end().log())
	.value()

}
