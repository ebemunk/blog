import * as R from 'ramda'
import Promise from 'bluebird'

import {
	readFile,
	download
} from '../util'

import {
	parseIndex,
} from '../lib'

export default async function scrape(opts) {
	const {
		concurrency
	} = opts

	const index = await readFile('data/episode-index.html')
	const seasons = parseIndex(index)

	const mapIndexed = R.addIndex(R.map)
	const downloads = R.pipe(
		mapIndexed((episodes, sIndex) =>
			mapIndexed((episode, eIndex) => [
				episode.url,
				`data/html/${sIndex+1}-${eIndex+1}.html`
			])(episodes)
		),
		R.unnest
	)(seasons)

	return Promise.map(downloads, R.apply(download), { concurrency })
}
