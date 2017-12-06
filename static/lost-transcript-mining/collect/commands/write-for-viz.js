import * as R from 'ramda'
import Promise from 'bluebird'

import {
	getPool,
	queries
} from '../db'
import {
	logger,
	writeFile,
	prettyJson
} from '../util'

const log = logger('tone')
const pad2 = str => str.toString().length < 2 ? `0${str}` : str
const episodeKey = (season, episode) => `S${pad2(season)}-E${pad2(episode)}`

export default async function writeForViz() {
	const pool = getPool()

	const dataFiles = [
		{
			filename: 'episodes',
			query: queries.allEpisodes(),
			process: R.addIndex(R.map)(({season, episode}) => ({
				season,
				episode,
				key: episodeKey(season, episode)
			}))
		},
		{
			filename: 'wordCount',
			query: queries.wordCount(),
			process: R.map(row => ({
				...row,
				density: row.uniq / row.total * 100,
			}))
		},
		{
			filename: 'flashes',
			query: queries.flashbacksAndSideways(),
			process: R.map(d => ({
				season: d.season,
				episode: d.episode,
				flashbacks: R.transpose([d.flashback, d.chars])
				.reduce((acc, [flashback, chars]) => {
					if( ! acc.length ) {
						return [{
							flashback,
							chars
						}]
					}

					if( R.last(acc).flashback != flashback ) {
						acc.push({
							flashback,
							chars
						})
						return acc
					}

					acc[acc.length-1] = {
						...R.last(acc),
						chars: R.last(acc).chars + chars
					}
					return acc
				}, [])
				// flashes: R.transpose([d.flashback, d.flashsideways, d.chars])
				// .map(([flashback, flashsideways, chars]) => ({
				// 	flashback,
				// 	flashsideways,
				// 	chars
				// }))
			}))
		}
	]

	await Promise.map(dataFiles, async dataFile => {
		log('doing', dataFile.filename)
		const { rows } = await pool.query(dataFile.query)
		const data = dataFile.process(rows)
		return writeFile(`../viz2/src/data/${dataFile.filename}.json`, prettyJson(data))
	})

	log('done')

	return pool.end()
}
