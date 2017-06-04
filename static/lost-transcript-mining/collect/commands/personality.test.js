import sinon from 'sinon'

import personality from './personality'
import { personalityInsights } from '../lib'
import * as db from '../db'

describe('watson', () => {
	const sandbox = sinon.sandbox.create()

	afterEach(() => sandbox.restore())

	it('should do it', async () => {
		const profileStub = jest.fn(() => Promise.resolve({ personality: 42 }))
		sandbox
		.stub(personalityInsights, 'profileAsync')
		.callsFake(profileStub)

		const queryStub = jest.fn(() => Promise.resolve({
			rows: [{ char_name: 'RAISTLIN MAJERE' }]
		}))
		sandbox
		.stub(db, 'getPool')
		.returns({
			query: queryStub,
			end: jest.fn(() => Promise.resolve())
		})

		await personality({ concurrency: 1 })

	})
})
