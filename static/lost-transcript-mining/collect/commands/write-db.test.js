import sinon from 'sinon'

import writeDb from './write-db'
import * as util from '../util'
import * as db from '../db'

describe('writeDb', () => {
	const sandbox = sinon.sandbox.create()

	afterEach(() => sandbox.restore())

	it('should do it', async () => {
		sandbox
		.stub(util, 'readDir')
		.resolves([
			'.',
			'1-1.json'
		])
		const queryStub = jest.fn(() => Promise.resolve())
		sandbox
		.stub(db, 'getPool')
		.returns({
			query: queryStub,
			end: jest.fn(() => Promise.resolve())
		})

		const rows = await writeDb({ concurrency: 1 })

		expect(rows).toMatchSnapshot()
		expect(queryStub.mock.calls).toMatchSnapshot()
	})
})
