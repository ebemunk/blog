import fs from 'fs'

import Promise from 'bluebird'

import parse from './parse'
import * as util from '../util'

describe('parse', () => {
	let text

	beforeAll(async () => {
		text = await Promise.fromCallback(cb => fs.readFile('data/html/6-16.html', 'utf-8', cb))
		// console.log('before all');
	})

	beforeEach(() => {
		util.readDir = jest.fn(() => Promise.resolve([
			'6-16.html',
		]))
		util.writeFile = jest.fn(() => Promise.resolve())
		util.readFile = jest.fn(() => Promise.resolve(text))
		// console.log('before each');
	})

	afterEach(() => {
		util.readDir.mockRestore()
		util.writeFile.mockRestore()
		util.readFile.mockRestore()
		// console.log('after each');
	})

	it('should do it', async () => {
		// console.log('test');
		let parsed
		try {
			parsed = await parse({ concurrency: 1 })
		} catch (e) {
			// console.log('erozrrz', e);
		}
		// console.log('test2');

		expect(parsed).toMatchSnapshot()
	})
})
