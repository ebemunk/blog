import Promise from 'bluebird'
import R from 'ramda'

import {
	getLines,
	parseLine,
	countActsAndFlashbacks
} from '../lib'
import {
	readDir,
	readFile,
	writeFile,
	prettyJson
} from '../util'

export default async function scrape(opts) {
	const {
		concurrency,
	} = opts

	return Promise.map(readDir('data/html'), async file => {
		if( file === '.gitignore' ) return

		const [, season, episode] = /(\d+)-(\d+)/.exec(file)

		const content = await readFile(`data/html/${file}`)

		const parseFile = R.pipe(
			getLines,
			R.map(parseLine),
			R.filter(Boolean),
			countActsAndFlashbacks,
			R.addIndex(R.map)((line, seq) => ({
				...line,
				season: +season,
				episode: +episode,
				seq: seq+1
			}))
		)

		const lines = parseFile(content)

		await writeFile(`data/json/${season}-${episode}.json`, prettyJson(lines))

		return lines
	}, { concurrency })
}
