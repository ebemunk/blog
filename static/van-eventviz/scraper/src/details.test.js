import axios from 'axios'
import Promise from 'bluebird'

import details, { getDetails } from './details'
import events from '../test/events.json'
import { readFile } from '../src/util'
import * as db from './db'

describe('getDetails', () => {
  afterEach(() => {
    axios.get = null
  })
  ;['1016021', '1016356', '1018066', '1018551'].map(id =>
    it(`should parse event ${id}`, async () => {
      axios.get = jest.fn(() =>
        Promise.props({ data: readFile(`./test/${id}.html`) }),
      )
      const event = await getDetails(events[0])
      expect(event).toMatchSnapshot()
    }),
  )
})

describe.only('details', () => {
  it('should do it', async () => {
    db.getPool = jest.fn(() => ({
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
    axios.get = jest.fn(
      () => Promise.props({ data: readFile(`./test/1018551.html`) }),
      // Promise.props({}),
    )

    await details()
  })
})
