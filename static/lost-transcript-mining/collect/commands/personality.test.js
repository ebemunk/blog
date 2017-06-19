import personality from './personality'
import { watson } from '../lib'
import * as db from '../db'

describe('personality', () => {
	beforeEach(() => {
		watson.personalityInsights.profileAsync = jest.fn(() => Promise.resolve({
			personality: 42
		}))
		db.getPool = jest.fn(() => ({
			query: jest.fn(() => Promise.resolve({
				rows: [{ char_name: 'RAISTLIN MAJERE' }]
			})),
			end: jest.fn(() => Promise.resolve())
		}))
	})

	afterEach(() => {
		watson.personalityInsights.profileAsync.mockRestore()
		db.getPool.mockRestore()
	})

	it('should query for chars and return personality insights', async () => {
		const p = await personality({ concurrency: 1 })

		expect(p).toMatchSnapshot()
	})
})
