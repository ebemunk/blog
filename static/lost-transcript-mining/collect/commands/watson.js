/*
tone analyzer
	first 1000 calls free
	up to 128kb text or 1000 sentences

personality insights
	first 100 calls free
	20mb

alchemy api
	free plan, 1000 api plans per day

*/
import fs from 'fs'

import Promise from 'bluebird'
import R from 'ramda'
import { Pool } from 'pg'
import {
  tone_analyzer,
  personality_insights,
} from 'watson-developer-cloud'

import { insertObj } from '../lib/db'

const writeFile = Promise.promisify(fs.writeFile)
const readFile = Promise.promisify(fs.readFile)

const toneAnalyzer = tone_analyzer({
  version: 'v3',
  version_date: '2016-05-19',
  username: 'b1542d1c-5bdb-4ef0-8026-8f247fddecb4',
  password: 'oVVAU2Uc5RYk'
})

const personalityInsights = personality_insights({
  version: 'v3',
  version_date: '2016-10-19',
  username: '665cfbf1-1573-421d-8cda-0d71ced3f0aa',
  password: 'ybMSxGpmQA25'
})

const pool = new Pool({
	user: 'postgres',
	password: 'dr4w3r5',
	host: 'localhost',
	port: 5432,
	database: 'lost_text_mining',
	Promise
})

function qq() {
  return `select season, episode, string_agg(char_name || ': ' || line, E'\n' order by seq) as text
    from dialog
    where type='dialog' and season=4 and episode=13
    group by season,episode
    order by season,episode`
}

export async function getEpisodeText({ season, episode }) {
  console.log(qq())
  const eptext = await pool.query(qq())
  // console.log(eptext.rows[0].text);
  await writeFile('./text.txt', eptext.rows[0].text)
  const yay = await Promise.fromCallback(cb => toneAnalyzer.tone({text: eptext.rows[0].text}, cb))
  console.log('0--------------0');
  console.log(yay);
  await writeFile('./resp.json', JSON.stringify(yay, null, 2))
  // await pool.end()
}

export async function getCharProfile(char_name) {
  const q = await pool.query(
    `select string_agg(line, E'\n' order by season, episode, seq) as text
      from dialog
      where type='dialog' and char_name='${char_name}'
      group by char_name
    ;`
  )
  const profile = await Promise.fromCallback(cb => personalityInsights.profile({
    text: q.rows[0].text,
    consumption_preferences: true
  }, cb))
  // const profile = JSON.parse((await readFile('./resp.json', 'utf-8')))
  return pool.query(...insertObj({
    char_name: char_name,
    profile: JSON.stringify(profile)
  }, 'personality'))
}

export async function personality(opts) {
	const {
		concurrency
	} = opts

  const chars = [
    'JACK',
    'SAWYER',
    'LOCKE',
    'KATE',
    'HURLEY',
    'SAYID',
    'CHARLIE',
    'BEN',
    'DESMOND',
    'MICHAEL',
    'JULIET',
    'CLAIRE',
    'SUN',
    'JIN',
    'MILES',
    'RICHARD',
    'BOONE',
    'EKO',
    'SHANNON',
    'WALT'
  ]
  await Promise.map(chars, async (char) => {
    return getCharProfile(char)
  }, {concurrency})
}
