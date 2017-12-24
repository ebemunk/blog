import { createSelector } from 'reselect'
import * as R from 'ramda'

const episodes = R.path(['episodes'])
const wordCounts = R.path(['wordCount'])
const flashes = R.path(['flashes'])
const episodeSelection = R.path(['episodeSelection'])
const linesPerChar = R.path(['linesPerChar'])

export const selectedEpisodeKeys = createSelector(
	[
		episodes,
		episodeSelection
	],
	(episodes, [start, end]) => {
		const selected = R.equals([start, end], [null, null]) ? episodes : episodes.slice(start, end + 1)
		return selected.map(({ key }) => key)
	}
)

export const selectedFlashes = createSelector(
	[
		flashes,
		episodeSelection
	],
	(flashes, [start, end]) => R.equals([start, end], [null, null]) ? flashes : flashes.slice(start, end + 1)
)

export const wordCountBySelection = createSelector(
	[
		wordCounts,
		episodeSelection
	],
	(wordCounts, [start, end]) => R.equals([start, end], [null, null]) ? wordCounts : wordCounts.slice(start, end + 1)
)

export const linesPerCharBySelection = createSelector(
	[
		linesPerChar,
		selectedEpisodeKeys,
	],
	(linesPerChar, selectedKeys) => {
		return R.pipe(
			R.filter(d => selectedKeys.includes(d.key)),
			R.groupBy(d => d.char_name),
			R.mapObjIndexed(d => R.sum(d.map(R.path(['lines'])))),
			R.toPairs(),
			R.map(R.zipObj(['key', 'value'])),
			R.sortBy(d => -d.value)
		)(linesPerChar)
	}
)
