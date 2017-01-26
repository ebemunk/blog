import fs from 'fs'

import _ from 'lodash'
import Promise from 'bluebird'
import ProgressBar from 'progress'
import c from 'chalk'

import { getSeasonList, getEpisode } from './scrape-fns'

const log = _.partial(console.log, c.bgGreen('scraper'))
const writeFile = Promise.promisify(fs.writeFile)
const pad2 = _.partialRight(_.padStart, 2, 0)

async function scrape() {
	log('starting')
	const seasons = await getSeasonList()
	const allEpisodes = seasons.reduce((prev, cur) => {
		return [...prev, ...cur.episodes]
	}, [])
	log(`found ${c.blue(allEpisodes.length)} episodes in ${c.blue(seasons.length)} seasons`)
	log('downloading...')
	// const progress = new ProgressBar(':current/:total :bar :eta', allEpisodes.length)
  // const kek = _.find(allEpisodes, {season: 6, ep: 5})
  return Promise.map(allEpisodes, async episode => {
    log(episode)
		const episodeText = await getEpisode(episode)
		const fileName = `episodes/${pad2(episode.season)}-${pad2(episode.ep)}.json`
		await writeFile(fileName, JSON.stringify(episodeText, null, 2))
		// progress.tick()
	}, {concurrency: 10})
}

scrape()
.then(() => {
	log('done');
})
.catch(err => {
	log(err);
})
