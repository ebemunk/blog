import axios from 'axios'
import Promise from 'bluebird'

import details, { getDetails, geocode } from './details'
import events from '../test/events.json'
import { readFile } from '../src/util'
import * as db from './db'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('getDetails', () => {
  ;['1016021', '1016356', '1018066', '1018551'].map(id =>
    it(`should parse event ${id}`, async () => {
      jest
        .spyOn(axios, 'get')
        .mockImplementation(() =>
          Promise.props({ data: readFile(`./test/${id}.html`) }),
        )
      const event = await getDetails(events[0])
      expect(event).toMatchSnapshot()
    }),
  )
})

xdescribe('details', () => {
  it('should do it', async () => {
    jest.spyOn(db, 'getPool').mockImplementation(() => ({
      query: () =>
        Promise.resolve({
          rows: [
            {
              evt: { url: '' },
            },
          ],
        }),
      end: () => Promise.resolve(),
    }))
    jest.spyOn(axios, 'get').mockImplementation(
      () => Promise.props({ data: readFile(`./test/1018551.html`) }),
      // Promise.props({}),
    )

    await details()
  })
})

xdescribe('geocode', () => {
  it('does it', async () => {
    try {
      const res = await geocode('200 - 1131 Howe Street, Vancouver')
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  })
})
