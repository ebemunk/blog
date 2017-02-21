import { readdir, readFile } from 'fs'

import _ from 'lodash'
import Promise from 'bluebird'
import ProgressBar from 'progress'
import c from 'chalk'
import { Pool } from 'pg'

import { insertObj } from '../lib'

const log = _.partial(console.log, c.bgGreen('write-db'))
const readDirAsync = Promise.promisify(readdir)
const readFileAsync = Promise.promisify(readFile)

export default async function writeDb(opts) {
	const {
		concurrency
	} = opts

	log('starting')
	log('reading tmp/json')
	const dir = (await readDirAsync('tmp/json'))
	.filter(name => /\.json$/.test(name))
	log(`found ${c.blue(dir.length)} episode files`)

	log('parsing files...')
	let progress = new ProgressBar(':current/:total :bar :eta', dir.length)
	const rows = []
	await Promise.map(dir, async (file) => {
		const text = await readFileAsync(`tmp/json/${file}`)
		const json = JSON.parse(text)
		json.map(row => rows.push(row))
		progress.tick()
	}, {concurrency})

	log('connection to db')
	const pool = new Pool({
		user: 'postgres',
		password: 'deneme',
		host: 'localhost',
		port: 5432,
		database: 'lost_text_mining',
		Promise
	})

	log(`found ${c.blue(rows.length)} rows to insert`)
	log('writing to db...')
	progress = new ProgressBar(':current/:total :bar :eta', rows.length)
	await Promise.map(rows, async (row) => {
		row.directions = JSON.stringify(row.directions)
		await pool.query(...insertObj(row))
		progress.tick()
	}, {concurrency})

	await pool.end()
	log('done')
}
