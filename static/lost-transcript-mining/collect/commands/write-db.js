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

	const pool = getPool()
	let progress

	return R.pipeP(
		readDir,
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
		R.tap(() => {
			log('truncating dialog')
			return pool.query('truncate dialog')
		}),
		R.tap(rows => {
			progress = new ProgressBar(':current/:total :bar :eta', rows.length)
			log(`found ${rows.length} rows, writing`)
		}),
		R.map(R.partialRight(insertObj, ['dialog'])),
		R.partialRight(Promise.map, [
			R.pipeP(
				insert => pool.query(...insert),
				// R.tap as last element in pipeP fails for ramda@0.25 for some reason
				async result => {
					progress.tick()
					return result
				}
			),
			{ concurrency }
		]),
		() => pool.end()
	)('data/json')
}
