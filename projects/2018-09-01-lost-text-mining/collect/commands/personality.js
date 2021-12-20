import * as R from 'ramda'
import Promise from 'bluebird'
import ProgressBar from 'progress'

import {
	insertObj,
	logger
} from '../util'
import {
	getPool,
	queries
} from '../db'
import {
	watson
} from '../lib'

const log = logger('personality')

export default async function writeDB(opts) {
	const {
		concurrency
	} = opts

	const pool = getPool()
	let progress = new ProgressBar(':current/:total :bar :eta', 25)

	const getProfileAndSave = async char_name => {
		const getCharProfile = R.curry(watson.charProfile)(pool)
		return R.pipeP(
			getCharProfile,
			profile => ({
				char_name,
				profile: JSON.stringify(profile)
			}),
			R.partialRight(insertObj, ['personality']),
			R.tap(() => {
				progress.tick()
			}),
			insert => pool.query(...insert),
		)(char_name)
	}

	log('starting')

	return R.pipeP(
		sql => pool.query(sql),
		R.prop('rows'),
		R.take(25),
		R.map(R.prop('char_name')),
		R.partialRight(Promise.map, [
			getProfileAndSave,
			{ concurrency }
		]),
	)(queries.totalLinesByChar())
}
