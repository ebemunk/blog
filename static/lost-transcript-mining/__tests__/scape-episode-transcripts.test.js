jest.mock('axios')

import { getSeasonList, getEpisode } from '../scrape-episode-transcripts'

describe('getSeasonList', () => {
	it('gets season list', async () => {
		const list = await getSeasonList()
		expect(list).toMatchSnapshot()
	})
})

describe('getEpisode', () => {
	it('gets season list', async () => {
		const list = await getSeasonList()
		const episode = await getEpisode({
			...list[0].episodes[0],
			url: 'episode'
		})
		expect(episode).toMatchSnapshot()
	})
})