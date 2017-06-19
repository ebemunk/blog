import parse from './parse'
import * as util from '../util'

describe('parse', () => {
	beforeEach(() => {
		util.readDir = jest.fn(() => Promise.resolve([
			'6-16.html',
		]))
		util.writeFile = jest.fn(() => Promise.resolve())
	})

	afterEach(() => {
		util.readDir.mockRestore()
		util.writeFile.mockRestore()
	})

	it('should do it', async () => {

		const parsed = await parse({ concurrency: 1 })

		expect(parsed).toMatchSnapshot()
	})
})
