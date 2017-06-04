import R from 'ramda'
import Promise from 'bluebird'
import ProgressBar from 'progress'

import {
	readDir,
	readFile,
	insertObj,
	logger
} from '../util'
import { getPool } from '../db'

const log = logger('write-db')

export default async function writeDB(opts) {
	const {
		concurrency
	} = opts

	const rows = await R.pipeP(
		() => readDir('data/json'),
		R.filter(name => /\.json$/.test(name)),
		R.tap(() => log('reading data/json')),
		R.partialRight(Promise.map, [
			file => readFile(`data/json/${file}`),
			{ concurrency }
		]),
		R.map(JSON.parse),
		R.flatten,
		R.map(R.evolve({
			directions: JSON.stringify
		})),
	)()

	log(`found ${rows.length} rows, writing`)

	const progress = new ProgressBar(':current/:total :bar :eta', rows.length)
	const pool = getPool()

	await Promise.map(rows, async row => {
		try {
			await pool.query(...insertObj(row))
		} catch (e) {
			log('failed', e, row)
		}
		progress.tick()
	}, { concurrency })

	await pool.end()

	return rows
}