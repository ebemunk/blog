import sinon from 'sinon'

import scrape from './scrape'
import * as util from '../util'

describe('scrape', () => {
	const sandbox = sinon.sandbox.create()

	afterEach(() => sandbox.restore())

	it('should download all episodes', async () => {
		const stub = sandbox
		.stub(util, 'download')
		.resolves()

		await scrape({ concurrency: 1 })

		expect(stub.callCount).toBe(114)
		expect(stub.args).toMatchSnapshot()
	})
})
