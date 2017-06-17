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

export const toneAnalyzer = Promise.promisifyAll(tone_analyzer({
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

export async function allSentenceTones(text) {
	let txt = text
	const tones = []

	while( txt ) {
		const tone = await toneAnalyzer.toneAsync({
			text: txt
		})
		tones.push(tone)

		const nextChunk = R.last(tone.sentences_tone).input_to + 1
		txt = txt.substr(nextChunk)
	}

	return tones
}

export function episodeText(pool, season, episode) {
	return R.pipeP(
		(pool, season, episode) => pool.query(queries.episodeText(season, episode)),
		R.path(['rows', '0', 'text']),
		R.replace('...', '…')
	)(pool, season, episode)
}

export function episodeTone(pool, season, episode) {
	return R.pipeP(
		exports.episodeText,
		exports.allSentenceTones,
		R.addIndex(R.reduce)(
			(acc, val, i) => ({
				document_tone: i === 0 ? val.document_tone : acc.document_tone,
				sentences_tone: [
					...acc.sentences_tone,
					...R.map(R.pick([
						'text',
						'tone_categories'
					]))(val.sentences_tone)
				]
			}),
			{
				document_tone: {},
				sentences_tone: []
			}
		)
	)(pool, season, episode)
}
