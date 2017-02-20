import fs from 'fs'

import Promise from 'bluebird'
import sinon from 'sinon'
import axios from 'axios'
import { load } from 'cheerio'

const readFile = Promise.promisify(fs.readFile)

import {
	parseEpisodeIndex,
	saveEpisodeHtml,
	getLines,
	lineType,
	parseLine
} from './scrape'

describe('parseEpisodeIndex', () => {
	let html

	beforeAll(async () => {
		html = await readFile('tmp/episode-index.html')
	})

	it('should return list of seasons and episodes', async () => {
		const result = await parseEpisodeIndex(html)
		expect(result).toMatchSnapshot()
	})
})

describe('saveEpisodeHtml', () => {
	let sandbox

	beforeEach(() => {
		sandbox = sinon.sandbox.create()
	})

	afterEach(() => sandbox.restore())

	it('should write html to path', async () => {
		sandbox.stub(axios, 'get')
		.returns(Promise.resolve({
			data: '<html>yezs</html>'
		}))
		const writeMock = sandbox.stub(fs, 'writeFile')
		.callsArgWith(2)

		await saveEpisodeHtml('url', 'path/')

		expect(writeMock.calledOnce).toBe(true)
		expect(writeMock.firstCall.args).toMatchSnapshot()
	})
})

describe('getLines', () => {
	let html

	beforeAll(async () => {
		html = await readFile('tmp/html/1-1.html')
	})

	it('should return array of parsed lines', () => {
		const lines = getLines(html)
		expect(lines).toMatchSnapshot()
	})
})

describe('lineType', () => {
	let html

	beforeAll(async () => {
		html = await readFile('tmp/html/1-1.html')
	})

	it('should parse hr as scene', () => {
		let line = {
			tagName: 'hr'
		}
		expect(lineType(line)).toMatchSnapshot()
	})

	it('should parse h2 as act', () => {
		let line = {
			tagName: 'h2'
		}
		expect(lineType(line)).toMatchSnapshot()
	})

	it('should parse p', () => {
		let line = {
			tagName: 'p',
			text: `[Clanking noises are heard and Desmond has visual flashes of scenes from the original timeline: again he sees Charlie drowning; Penny smiling, kissing Penny,the birth of young Charlie; Charlie as a toddler; other scenes of kissing Penny. He also hears Penny's voice.] Desmond.`
		}
		expect(lineType(line)).toMatchSnapshot()

		line = {
			tagName: 'p',
			text: `[Flashback - Shot of Locke's hand setting up a Mouse Trap game as an employee in a department store. A kid walks up.]`
		}
		expect(lineType(line)).toMatchSnapshot()
		// console.log(lineType(line));
	})
})

describe('parseLine', () => {
	it('should parse correctly', () => {
		let text = 'SAYID: I know.'
		expect(parseLine(text)).toMatchSnapshot()

		text = `SAWYER [reacting to Jack's fright]: What?`
		expect(parseLine(text)).toMatchSnapshot()

		text = 'NURSE (responding to Ayesha): آه [Translation: Yea]'
		expect(parseLine(text)).toMatchSnapshot()

		text = 'JIN: [Speaks korean]'
		expect(parseLine(text)).toMatchSnapshot()

		// text = `TOM: I didn\'t say you were going back to the Island. You\'re not going on that boat so you can swab decks, Michael.`
		// console.log(parseLine(text));
	})
})
