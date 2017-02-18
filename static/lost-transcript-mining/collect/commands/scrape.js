import fs from 'fs'

import _ from 'lodash'
import Promise from 'bluebird'
import ProgressBar from 'progress'
import c from 'chalk'

import { getSeasonList, getEpisode } from '../lib'

const log = _.partial(console.log, c.bgGreen('scrape'))
const writeFile = Promise.promisify(fs.writeFile)
const pad2 = _.partialRight(_.padStart, 2, 0)

export default async function scrape(opts) {
	const {
		concurrency
	} = opts

	log('starting')
	log('getting season list...')
	const seasons = await getSeasonList()
	const allEpisodes = seasons.reduce((prev, cur) => {
		return [...prev, ...cur.episodes]
	}, [])
	log(`found ${c.blue(allEpisodes.length)} episodes in ${c.blue(seasons.length)} seasons`)

	log('downloading...')
	const progress = new ProgressBar(':current/:total :bar :eta', allEpisodes.length)
	await Promise.map(allEpisodes, async episode => {
		const episodeText = await getEpisode(episode)
		const fileName = `episodes/${pad2(episode.season)}-${pad2(episode.ep)}.json`
		await writeFile(fileName, JSON.stringify(episodeText, null, 2))
		progress.tick()
	}, {concurrency})

	log('done')
}
