import writeDb from './write-db'
import * as util from '../util'
import * as db from '../db'

describe('writeDb', () => {
	const queryStub = jest.fn(() => Promise.resolve())

	beforeEach(() => {
		util.readDir = jest.fn(() => Promise.resolve([
			'.',
			'1-1.json'
		]))
		db.getPool = jest.fn(() => ({
			query: queryStub,
			end: jest.fn(() => Promise.resolve())
		}))
	})

	afterEach(() => {
		util.readDir.mockRestore()
		db.getPool.mockRestore()
	})

	it('should do it', async () => {
		await writeDb({ concurrency: 1 })

		expect(queryStub.mock.calls).toMatchSnapshot()
	})
})
