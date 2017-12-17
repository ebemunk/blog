import { createSelector } from 'reselect'
import * as R from 'ramda'

const wordCounts = R.path(['wordCount'])
const flashes = R.path(['flashes'])
const episodeSelection = R.path(['episodeSelection'])

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
