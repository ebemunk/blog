import fs from 'fs'

import Promise from 'bluebird'
import sinon from 'sinon'
import axios from 'axios'

import {
	readFile,
	writeFile,
	download,
	insertObj
} from './'

const sandbox = sinon.sandbox.create()

describe('util', () => {
	afterEach(() => sandbox.restore())

	describe('readFile', () => {
		beforeEach(() => {
			sandbox.stub(fs, 'readFile').yields()
		})

		it('returns Promise', () => {
			const p = readFile('lol.bmp')
			expect(p).toBeInstanceOf(Promise)
		})

		it('calls fs.readFile with utf-8 encoding', () => {
			readFile('hehe.jpg')
			sinon.assert.calledWith(fs.readFile, 'hehe.jpg', 'utf-8')
		})
	})

	describe('writeFile', () => {
		beforeEach(() => {
			sandbox.stub(fs, 'writeFile').yields()
		})

		it('returns Promise', () => {
			const p = writeFile('derp.txt', 'souper sekrit')
			expect(p).toBeInstanceOf(Promise)
		})

		it('calls fs.writeFile', () => {
			writeFile('meh/heh', 'okay')
			sinon.assert.calledWith(fs.writeFile, 'meh/heh', 'okay')
		})
	})

	describe('download', () => {
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

			await download('url', 'path/')

			expect(writeMock.calledOnce).toBe(true)
			expect(writeMock.firstCall.args).toMatchSnapshot()
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
