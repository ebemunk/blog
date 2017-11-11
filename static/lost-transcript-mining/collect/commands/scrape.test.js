import scrape from './scrape'
import * as util from '../util'

describe('scrape', () => {
	beforeEach(() => {
		util.download = jest.fn(
			() => {
				return Promise.resolve()
			}
		)
	})

	afterEach(() => {
		util.download.mockRestore()
	})

	it('should download all episodes', async () => {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000
		try {
		await scrape({ concurrency: 1 })
		} catch (e) {
			console.log('fuck');
		}

		expect(util.download).toHaveBeenCalledTimes(114)
		// expect(util.download.mock.calls).toMatchSnapshot()
	})
})
