import fs from 'fs'

import Promise from 'bluebird'
import axios from 'axios'
import cheerio from 'cheerio'
import _ from 'lodash'

const writeFile = Promise.promisify(fs.writeFile)

export async function parseEpisodeIndex(html) {
	const $ = cheerio.load(html)
	const seasons = _.range(1,7)
	.map(season => {
		const episodes = $(`#Season_${season}`)
		// parsing the cheerio tree
		.parent()
		.next('ol')
		.children()
		.get()
		.map((el, i) => {
			const link = $('a', el)
			// an array of these are returned
			return {
				season,
				episode: i+1,
				name: link.attr('title').replace(' transcript', ''),
				url: link.attr('href')
			}
		})
		return episodes
	})
	// flatten
	return seasons.reduce((prev, cur) => prev.concat(cur))
}

export async function saveEpisodeHtml(url, path) {
	const { data } = await axios.get(`${url}`)
	await Promise.fromCallback(cb => fs.writeFile(path, data, cb))
	return data
}

export function getLines(htmlString) {
	const $ = cheerio.load(htmlString)
	const lines = $('#toc')
	// everything after table of contents
	.nextAll()
	// only hr h2 and p tags with content in them
	.filter((i, el) => {
		return ['hr', 'h2', 'p'].includes(el.tagName) && $(el).text().trim()
	})
	.map((i, el) => {
		return {
			tagName: el.tagName,
			text: $(el).text().trim().replace(/\n/g, '')
		}
	})
	.get()
	.map(lineType)
	.filter(Boolean)
	return lines
}

export function lineType({tagName, text}) {
	switch( tagName ) {
		case 'hr': return {
			type: 'scene'
		}

		case 'h2': return {
			type: 'act'
		}

		case 'p': {
			const stageDirection = text.match(/^\[([^\]]+)\]?(?: (.+))?$/)

			if( stageDirection ) {
				return {
					type: 'stageDirection',
					raw: text,
					line: stageDirection[1]
				}
			} else {
				const parsed = parseLine(text)
				if( ! parsed ) return false
				return {
					type: 'dialog',
					raw: text,
					...parsed
				}
			}
		}
	}
}

export function parseLine(text) {
	let line = text
	// everything inside square brackets or paranthesis is a direction
	let directions = []
	// [ and ]
	.concat(text.match(/\[([^\]]+)\]\.?/g))
	// ( and )
	.concat(text.match(/\(([^\]]+)\)\.?/g))
	// remove falsy
	.filter(Boolean)
	// strip and remove from source text
	.map(str => {
		line = line.replace(str, '').replace('  ', ' ')
		return str.replace(/[\[\]\(\)]/g, '').replace(/\.$/, '')
	})

	const charLine = line.trim().match(/^(.+?)\:\s*(.+)?$/)
	if( ! charLine ) {
		console.log('unparseable line:', text)
		console.log()
		return
	}
	const char_name = charLine[1].trim().toUpperCase()
	line = charLine[2] || ''
	return {
		char_name,
		line,
		directions,
	}
}
