import sinon from 'sinon'
import * as watson from './watson'
import * as db from '../db'

describe('watson', () => {
	const sandbox = sinon.sandbox.create()

	afterEach(() => sandbox.restore())

	describe('charProfile', () => {
		it('should make it happen', async () => {
			const queryStub = jest.fn(() => Promise.resolve({
				rows: [
					{ text: 'blabla' }
				]
			}))
			const profileStub = jest.fn(() => Promise.resolve({}))
			sandbox
			.stub(watson.personalityInsights, 'profileAsync')
			.callsFake(profileStub)

			await watson.charProfile({ query: queryStub }, 'JACK')

			expect(queryStub).toHaveBeenCalledTimes(1)
			expect(queryStub.mock.calls).toMatchSnapshot()
			expect(profileStub).toHaveBeenCalledTimes(1)
			expect(profileStub.mock.calls).toMatchSnapshot()
		})
	})

	describe('episodeTone', () => {
		it('should make it happen', async () => {
			const kek = await watson.episodeTone(db.getPool(), 1, 1)
			console.log(kek);
		})
	})
})
