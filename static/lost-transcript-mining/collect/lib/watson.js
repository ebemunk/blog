import { config } from 'dotenv'
import {
	tone_analyzer,
	personality_insights,
} from 'watson-developer-cloud'
import R from 'ramda'
import Promise from 'bluebird'

import {
	queries
} from '../db'

config()

const {
	TONE_ANALYZER_USERNAME,
	TONE_ANALYZER_PASSWORD,
	PERSONALITY_INSIGHTS_USERNAME,
	PERSONALITY_INSIGHTS_PASSWORD
} = process.env

const toneAnalyzer = Promise.promisifyAll(tone_analyzer({
	version: 'v3',
	version_date: '2016-05-19',
	username: TONE_ANALYZER_USERNAME,
	password: TONE_ANALYZER_PASSWORD
}))

export const personalityInsights = Promise.promisifyAll(personality_insights({
	version: 'v3',
	version_date: '2016-10-19',
	username: PERSONALITY_INSIGHTS_USERNAME,
	password: PERSONALITY_INSIGHTS_PASSWORD
}))

export async function charProfile(pool, char_name) {
	const result = await pool.query(queries.allLines(char_name))
	const profile = await personalityInsights.profileAsync({
		text: result.rows[0].text,
		consumption_preferences: true
	})
	return profile
}

import {writeFile} from '../util'
export async function episodeTone(pool, season, episode) {
	return R.pipeP(
		sql => pool.query(sql),
		R.path(['rows', '0', 'text']),
		// str.match( /[^\.!\?]+[\.!\?]+/g )
		R.split(/[\.!\?]+/),
		R.splitEvery(100),
		// R.splitEvery(128*1024),
		// R.tap(v => console.log('ya', v.length))
		// text => toneAnalyzer.toneAsync({ text }),
		// res => writeFile('haha.json', JSON.stringify(res, null, 2))
	)(queries.episodeText(season, episode))
}
