import R from 'ramda'
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
			process: R.addIndex(R.map)(({season, episode}, i) => ({
				season: season,
				episode: episode,
				key: episodeKey(season, episode),
				date: new Date(0, 0, i).getTime(),
				i
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
