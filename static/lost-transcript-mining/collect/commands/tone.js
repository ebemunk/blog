import R from 'ramda'
import Promise from 'bluebird'
import ProgressBar from 'progress'

import { watson } from '../lib'
import {
	getPool,
	queries
} from '../db'
import {
	insertObj,
	logger
} from '../util'

const log = logger('tone')

export default async function tone() {
	const pool = getPool()
	let progress
	return R.pipeP(
		sql => pool.query(sql),
		R.prop('rows'),
		R.tap(rows => {
			log(`found ${rows.length} episodes`)
			progress = new ProgressBar(':current/:total :bar :eta', rows.length)
		}),
		R.partialRight(Promise.mapSeries, [
			R.pipeP(
				({ season, episode }) => watson.episodeTone(pool, season, episode),
				R.evolve({
					document_tone: JSON.stringify,
					sentences_tone: JSON.stringify
				}),
				R.partialRight(insertObj, ['tone']),
				insert => pool.query(...insert),
				R.tap(() => {
					progress.tick()
				})
			)
		]),
	)(queries.allEpisodes())
}
