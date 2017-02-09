import { readdir, readFile } from 'fs'

import _ from 'lodash'
import Promise from 'bluebird'
import ProgressBar from 'progress'
import c from 'chalk'
import { Pool } from 'pg'

import { getSeasonList, getEpisode } from './scrape-fns'

const log = _.partial(console.log, c.bgGreen('write-db'))
const readDirAsync = Promise.promisify(readdir)
const readFileAsync = Promise.promisify(readFile)

export function insert(row) {
	const sql = `
		INSERT INTO dialog
		(season, episode, seq, type, char_name, line, directions, raw)
		VALUES
		($1, $2, $3, $4, $5, $6, $7, $8)
	`
	return [
		sql,
		[
			row.season,
			row.episode,
			row.seq,
			row.type,
			row.char_name,
			row.line,
			JSON.stringify(row.directions),
			row.raw
		]
	]
}

export async function doIt() {
	const pool = new Pool({
		user: 'postgres',
		password: 'deneme',
		host: 'localhost',
		port: 5432,
		database: 'lost_text_mining'
	})
	const queries = []
	const dir = await readDirAsync('episodes')
	const wut = Promise.map(dir, async (file) => {
		const text = await readFileAsync(`episodes/${file}`)
		const json = JSON.parse(text)
		log('doing', file)
		return Promise.map(json, row => {
			// log(row.seq)
			// queries.push(pool.query(...insert(f)))
			return pool.query(...insert(row))
		}, {concurrency: 1})
	}, {concurrency: 1})
	const yo = await wut
	log('ya')
	// const lol = await readFileAsync('episodes/01-01.json')
	// const json = JSON.parse(lol)
	// const f = json[0]
	// const fug = await pool.query(...insert(f))
	// log(fug)
}

doIt()