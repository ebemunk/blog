import sinon from 'sinon'

import parse from './parse'
import * as util from '../util'

describe('parse', () => {
	const sandbox = sinon.sandbox.create()

	afterEach(() => sandbox.restore())

	it('should do it', async () => {
		sandbox
		.stub(util, 'readDir')
		.resolves([
			'6-16.html',
		])
		sandbox
		.stub(util, 'writeFile')
		.resolves()

		const parsed = await parse({ concurrency: 1 })

		expect(parsed).toMatchSnapshot()
	})
})
