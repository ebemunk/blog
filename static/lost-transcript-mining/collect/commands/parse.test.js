import parse from './parse'
import * as util from '../util'

describe('parse', () => {
	it('should do it', async () => {
		util.readDir = jest.fn(() => Promise.resolve([
			'6-16.html',
		]))
		util.writeFile = jest.fn(() => Promise.resolve())

		const parsed = await parse({ concurrency: 1 })

		expect(parsed).toMatchSnapshot()
	})
})
