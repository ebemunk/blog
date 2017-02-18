import axios from 'axios'
import cheerio from 'cheerio'
import _ from 'lodash'
import c from 'chalk'

const log = process.env.NODE_ENV === 'test' ?
	null : _.partial(console.log, c.bgMagenta('scrape-fns'))

export async function getSeasonList() {
	const { data } = await axios.get('http://lostpedia.wikia.com/wiki/Portal:Transcripts')
	const $ = cheerio.load(data)
	const seasons = _.range(1,7).map(season => {
		const episodes = $(`#Season_${season}`)
		.parent()
		.next('ol')
		.children()
		.get()
		.map((el, i) => {
			const link = $('a', el)
			return {
				season,
				ep: i+1,
				name: link.attr('title').replace(' transcript', ''),
				url: link.attr('href')
			}
		})
		return {
			season,
			episodes
		}
	})
	return seasons
}

export async function getEpisode(episode) {
	const { data } = await axios.get(`http://lostpedia.wikia.com${episode.url}`)
	const $ = cheerio.load(data)
	const lines = $('#toc')
	.nextAll()
	.filter((i, el) => {
		return ['hr', 'h2', 'p'].includes(el.tagName) && $(el).text().trim()
	})
	.map((i, el) => {
		const row = {
			season: episode.season,
			episode: episode.ep,
			// seq: i,
		}
		switch( el.tagName ) {
			case 'hr': return {
				...row,
				type: 'scene'
			}
			case 'h2': return {
				...row,
				type: 'act'
			}
			case 'p': {
				const text = $(el).text().trim()
				row.raw = text
				const stageDirection = text.match(/^\[(.+)\]$/)
				if( stageDirection ) {
					return {
						...row,
						line: stageDirection[1],
						type: 'stageDirection'
					}
				} else {
					const charLine = text.match(/^(.+?)\: (.+)$/)
					// log(charLine)
					if( ! charLine ) return null
					const char_name = charLine[1]
					let line = charLine[2]
					let directions = line.match(/\[([^\]]+)\]/g)
					if( directions ) {
						directions = directions.map(str => str.replace(/[\[\]]/g, ''))
						line = line
						.replace(/\[[^\]]+\][ ]?/g, '')
					}
					return {
						...row,
						char_name,
						line,
						directions,
						type: 'dialog'
					}
				}
			}
		}
	})
	.filter(row => row)
	.get()
	return lines
	.map((row, i) => {
		return {
			...row,
			seq: i+1
		}
	})
}
