import {
	parseIndex,
	getLines,
	parseLine,
	parseText,
} from './parse'

import {
	readFile
} from '../util'

describe('parseIndex', () => {
	let html

	beforeAll(async () => {
		html = await readFile('data/episode-index.html')
	})

	it('should return list of seasons and episodes', async () => {
		const result = parseIndex(html)
		expect(result).toMatchSnapshot()
	})
})

describe('getLines', () => {
	let html

	beforeAll(async () => {
		html = await readFile('data/html/1-1.html')
	})

	it('should return array of parsed lines', () => {
		const lines = getLines(html)
		expect(lines).toMatchSnapshot()
	})
})


describe('parseLine', () => {
	it('should parse hr as scene', () => {
		let line = {
			tagName: 'hr'
		}
		expect(parseLine(line)).toMatchSnapshot()
	})

	it('should parse h2 as act', () => {
		let line = {
			tagName: 'h2'
		}
		expect(parseLine(line)).toMatchSnapshot()
	})

	it('should parse p', () => {
		let line = {
			tagName: 'p',
			text: `[Clanking noises are heard and Desmond has visual flashes of scenes from the original timeline: again he sees Charlie drowning; Penny smiling, kissing Penny,the birth of young Charlie; Charlie as a toddler; other scenes of kissing Penny. He also hears Penny's voice.] Desmond.`
		}
		expect(parseLine(line)).toMatchSnapshot()

		line = {
			tagName: 'p',
			text: `[Flashback - Shot of Locke's hand setting up a Mouse Trap game as an employee in a department store. A kid walks up.]`
		}
		expect(parseLine(line)).toMatchSnapshot()
	})
})

describe('parseText', () => {
	it('should parse correctly', () => {
		let text = 'SAYID: I know.'
		expect(parseText(text)).toMatchSnapshot()

		text = `SAWYER [reacting to Jack's fright]: What?`
		expect(parseText(text)).toMatchSnapshot()

		text = 'NURSE (responding to Ayesha): آه [Translation: Yea]'
		expect(parseText(text)).toMatchSnapshot()

		text = 'JIN: [Speaks korean]'
		expect(parseText(text)).toMatchSnapshot()

		text = `TOM: I didn\'t say you were going back to the Island. You\'re not going on that boat so you can swab decks, Michael.`
		expect(parseText(text)).toMatchSnapshot()
	})
})
