import { createSelector } from 'reselect'
import * as R from 'ramda'

const episodes = R.path(['episodes'])
const episodeSelection = R.path(['episodeSelection'])

const wordCounts = R.path(['wordCount'])
const linesPerChar = R.path(['linesPerChar'])
const flashes = R.path(['flashes'])

const personalities = R.path(['personalities'])
const personalitySelection = R.path(['personalitySelection'])

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

export const selectedProfiles = createSelector(
	[
		personalitySelection,
		personalities
	],
	(selection, personalities) => selection.map(sel => sel.map(s => personalities.find(p => s.value === p.char_name)))
)

export const combinedProfileSelection = createSelector(
	[
		selectedProfiles
	],
	(selected) => {
		// holy fuck wtf is this
		const combine = R.pipe(
			R.map(d => d.profile.personality),
			R.map(R.map(d => ({
				trait_id: d.trait_id,
				percentile: d.percentile,
				facets: d.children.map(R.pick(['trait_id', 'percentile'])),
			}))),
			R.flatten,
			R.groupBy(d => d.trait_id),
			R.map(d => d.reduce((acc, v, i, arr) => ({
				percentile: acc.percentile + (v.percentile / arr.length),
				facets: acc.facets.concat(v.facets)
			}), { facets: [], percentile: 0 })),
			R.map(d => ({
				...d,
				facets: R.groupBy(dd => dd.trait_id)(d.facets)
			})),
			R.map(d => ({
				...d,
				facets: R.map(v => v.reduce((acc, vv, i, arr) => acc+(vv.percentile / arr.length), 0))(d.facets)
			}))
		)
		return R.map(combine)(selected)
	}
)
