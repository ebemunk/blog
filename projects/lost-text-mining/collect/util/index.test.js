import fs from 'fs'

import Promise from 'bluebird'
import axios from 'axios'

import {
	readFile,
	writeFile,
	download,
	insertObj
} from './'

describe('util', () => {
	describe('readFile', () => {
		beforeEach(() => {
			fs.readFile = jest.fn(() => Promise.resolve())
		})

		afterEach(() => {
			fs.readFile.mockRestore()
		})

		it('returns Promise', () => {
			const p = readFile('lol.bmp')
			expect(p).toBeInstanceOf(Promise)
		})

		it('calls fs.readFile with utf-8 encoding', () => {
			readFile('hehe.jpg')
			expect(fs.readFile).toHaveBeenCalledWith('hehe.jpg', 'utf-8', expect.any(Function))
		})
	})

	describe('writeFile', () => {
		beforeEach(() => {
			fs.writeFile = jest.fn(() => Promise.resolve())
		})

		afterEach(() => {
			fs.writeFile.mockRestore()
		})

		it('returns Promise', () => {
			const p = writeFile('derp.txt', 'souper sekrit')
			expect(p).toBeInstanceOf(Promise)
		})

		it('calls fs.writeFile', () => {
			writeFile('meh/heh', 'okay')

			expect(fs.writeFile).toHaveBeenCalledWith('meh/heh', 'okay', expect.any(Function))
		})
	})

	describe('download', () => {
		beforeEach(() => {
			axios.get = jest.fn(() => Promise.resolve({
				data: '<html>yezs</html>'
			}))
			fs.writeFile = jest.fn((a, b, cb) => cb())
		})

		afterEach(() => {
			axios.get.mockRestore()
			fs.writeFile.mockRestore()
		})

		it('should write html to path', async () => {
			await download('url', 'path/')

			expect(fs.writeFile).toHaveBeenCalledTimes(1)
			expect(fs.writeFile.mock.calls).toMatchSnapshot()
		})
	})

	describe('insertObj', () => {
		it('provide correct sql', () => {
			expect(insertObj({
				faf: 'etet',
				lolol: 'yaya',
				directions: [
					'some', 'things'
				]
			})).toMatchSnapshot()
		})
	})
})
