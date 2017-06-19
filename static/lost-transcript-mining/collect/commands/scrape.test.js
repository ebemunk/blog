import scrape from './scrape'
import * as util from '../util'

describe('scrape', () => {
	beforeEach(() => {
		util.download = jest.fn(() => Promise.resolve())
	})

	afterEach(() => {
		util.download.mockRestore()
	})

	it('should download all episodes', async () => {
		await scrape({ concurrency: 1 })

		expect(util.download).toHaveBeenCalledTimes(114)
		expect(util.download.mock.calls).toMatchSnapshot()
	})
})
