import fs from 'fs'

import Promise from 'bluebird'
import _ from 'lodash'
import c from 'chalk'
import ProgressBar from 'progress'

import {
	parseEpisodeIndex,
	saveEpisodeHtml,
	getLines,
	parseLine,
} from '../lib/scrape'

const log = _.partial(console.log, c.bgGreen('scrape'))
const readFile = Promise.promisify(fs.readFile)
const writeFile = Promise.promisify(fs.writeFile)

export default async function scrape(opts) {
	const {
		concurrency,
		useCache
	} = opts

	log('starting')
	log('getting episode index...')

	const episodeIndex = await readFile('tmp/episode-index.html')
	const episodes = await parseEpisodeIndex(episodeIndex)

	log(`found ${c.blue(episodes.length)} episodes`)

	let progress = new ProgressBar(':current/:total :bar :eta', {
		total: episodes.length,
	})

	await Promise.map(episodes, async (episode) => {
		if( useCache ) {
			episode.html = await readFile(`tmp/html/${episode.season}-${episode.episode}.html`)
		} else {
			episode.html = await saveEpisodeHtml(episode.url, `tmp/html/${episode.season}-${episode.episode}.html`)
		}

		const lines = getLines(episode.html)
		.map((line, i) => ({
			...line,
			season: episode.season,
			episode: episode.episode,
			seq: i+1
		}))

		await writeFile(`tmp/json/${episode.season}-${episode.episode}.json`, JSON.stringify(lines, null, 2))

		progress.tick()
	}, { concurrency })
}
