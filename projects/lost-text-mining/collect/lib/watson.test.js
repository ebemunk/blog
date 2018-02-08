import * as watson from './watson'

describe('watson', () => {
	describe('charProfile', () => {
		beforeEach(() => {
			watson.personalityInsights.profileAsync = jest.fn(() => Promise.resolve({}))
		})

		afterEach(() => {
			watson.personalityInsights.profileAsync.mockRestore()
		})

		it('should make it happen', async () => {
			const queryStub = jest.fn(() => Promise.resolve({
				rows: [
					{ text: 'blabla' }
				]
			}))

			await watson.charProfile({ query: queryStub }, 'JACK')

			expect(queryStub).toHaveBeenCalledTimes(1)
			expect(queryStub.mock.calls).toMatchSnapshot()
			expect(watson.personalityInsights.profileAsync).toHaveBeenCalledTimes(1)
			expect(watson.personalityInsights.profileAsync.mock.calls).toMatchSnapshot()
		})
	})

	describe('allSentenceTones', () => {
		beforeEach(() => {
		})

		afterEach(() => {
			watson.toneAnalyzer.toneAsync.mockRestore()
		})

		it('make requests until all text is analyzed', async () => {
			watson.toneAnalyzer.toneAsync = jest.fn()
			.mockReturnValue({
				sentences_tone: [
					{ input_to: 1 }
				]
			})

			await watson.allSentenceTones('blabla blabla')

			expect(watson.toneAnalyzer.toneAsync.mock.calls).toMatchSnapshot()
		})

		it('should stop queries if no sentences_tone exists', async () => {
			watson.toneAnalyzer.toneAsync = jest.fn()
			.mockReturnValueOnce({
				sentences_tone: [
					{ input_to: 1 }
				]
			})
			.mockReturnValueOnce({})

			await watson.allSentenceTones('blabla blabla')

			expect(watson.toneAnalyzer.toneAsync).toHaveBeenCalledTimes(2)
			expect(watson.toneAnalyzer.toneAsync.mock.calls).toMatchSnapshot()
		})
	})

	describe('episodeText', () => {
		it('should query db', async () => {
			const pool = {
				query: jest.fn(() => Promise.resolve({
					rows: [
						{ text: 'some text... hello' }
					]
				}))
			}

			const text = await watson.episodeText(pool, 2, 3)

			expect(pool.query).toHaveBeenCalledTimes(1)
			expect(pool.query.mock.calls).toMatchSnapshot()
			expect(text).toMatchSnapshot()
		})
	})

	describe('episodeTone', () => {
		beforeEach(() => {
			watson.episodeText = jest.fn(() => Promise.resolve())
			watson.allSentenceTones = jest.fn(() => [
				{
					document_tone: { something: 1 },
					sentences_tone: [
						{ text: 1, tone_categories: [1,2], derp: 3 },
						{ text: 2, tone_categories: [1,2], derp: 3 },
					]
				},
				{
					document_tone: { something: 2 },
					sentences_tone: [
						{ text: 3, tone_categories: [1,2], derp: 3 },
					]
				}
			])
		})

		afterEach(() => {
			watson.episodeText.mockRestore()
			watson.allSentenceTones.mockRestore()
		})

		it('should return document_tone and all sentences_tone combined', async () => {
			const tone = await watson.episodeTone({}, 3, 4)

			expect(tone).toMatchSnapshot()
		})
	})
})
