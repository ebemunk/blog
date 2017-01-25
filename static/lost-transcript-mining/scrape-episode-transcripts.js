import fs from 'fs'

import axios from 'axios'
import cheerio from 'cheerio'
import _ from 'lodash'
import Promise from 'bluebird'
import ProgressBar from 'progress'
import c from 'chalk'

const log = _.partial(console.log, c.bgGreen('scraper'))
const writeFile = Promise.promisify(fs.writeFile)
const pad2 = _.partialRight(_.padStart, 2, 0)

export async function getSeasonList() {
	const { data } = await axios.get('http://lostpedia.wikia.com/wiki/Portal:Transcripts')
	const $ = cheerio.load(data)
	const seasons = _.range(1,7).map(season => {
		const episodes = $(`#Season_${season}`)
		.parent()
		.next('ol')
		.children()
		.get()
		.map((el, i) => {
			const link = $('a', el)
			return {
				season,
				ep: i+1,
				name: link.attr('title').replace(' transcript', ''),
				url: link.attr('href')
			}
		})
		return {
			season,
			episodes
		}
	})
	return seasons
}

export async function getEpisode(episode) {
	const { data } = await axios.get(`http://lostpedia.wikia.com${episode.url}`)
	const $ = cheerio.load(data)
	const lines = $('#toc')
	.nextAll()
	.filter((i, el) => {
		return ['hr', 'h2', 'p'].includes(el.tagName)
	})
	.map((i, el) => {
		const row = {
			season: episode.season,
			episode: episode.ep,
			seq: i,
		}
		switch( el.tagName ) {
			case 'hr': return {
				...row,
				type: 'scene'
			}
			case 'h2': return {
				...row,
				type: 'act'
			}
			case 'p': {
				const text = $(el).text().trim()
				row.raw = text
				const stageDirection = text.match(/^\[(.+)\]$/)
				if( stageDirection ) {
					return {
						...row,
						line: stageDirection[1],
						type: 'stageDirection'
					}
				} else {
					const charLine = text.match(/^(.+)\: (.+)$/)
					const char_name = charLine[1]
					let line = charLine[2]
					let directions = line.match(/\[([^\]]+)\]/g)
					if( directions ) {
						directions = directions.map(str => str.replace(/[\[\]]/g, ''))
						line = line.replace(/\[[^\]]+\][ ]?/g, '')
					}
					return {
						...row,
						char_name,
						line,
						directions
					}
				}
			}
		}
		// const kek = text.replace(/\n/gm, '')
		// return kek
	})
	.get()
	// .join('\n')
	return lines
}

async function scrape() {
	log('starting')
	const seasons = await getSeasonList()
	const allEpisodes = seasons.reduce((prev, cur) => {
		return [...prev, ...cur.episodes]
	}, [])
	log(`found ${c.blue(allEpisodes.length)} episodes in ${c.blue(seasons.length)} seasons`)
	log('downloading...')
	// const progress = new ProgressBar(':current/:total :bar :eta', allEpisodes.length)
	return Promise.map(allEpisodes, async episode => {
		const episodeText = await getEpisode(episode)
		const fileName = `episodes/${pad2(episode.season)}-${pad2(episode.ep)}.txt`
		await writeFile(fileName, episodeText)
		// progress.tick()
	}, {concurrency: 10})
}

// scrape()
// .then(() => {
// 	log('done');
// })
// .catch(err => {
// 	log(err);
// })
