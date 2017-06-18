import tone from './tone'
import { watson } from '../lib'
import * as db from '../db'

describe('tone', () => {
	it('should get tone analysis for all episodes', async () => {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 350000000

		watson.episodeTone = jest.fn(() => Promise.resolve({
			season: 8,
			episode: 113,
			document_tone: { derp: 23 },
			sentences_tone: [
				{ herder: 1, derper: 2 },
				{ herder: 2, derper: 3 }
			]
		}))
		const query = jest.fn()
		.mockReturnValueOnce(Promise.resolve({
			rows: [
				{ season: 1, episode: 1 },
				{ season: 1, episode: 2 },
			]
		}))
		.mockReturnValue(Promise.resolve())
		db.getPool = jest.fn(() => ({
			query
		}))

		const r = await tone()

		console.log(r);

		expect(watson.episodeTone.mock.calls).toMatchSnapshot()
		expect(query.mock.calls).toMatchSnapshot()
	})
})
