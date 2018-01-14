import { readFile } from 'fs'
import { fromCallback } from 'bluebird'
import axios from 'axios'

import scrape from './scrape'

describe('scrape', () => {
  let data

  beforeAll(async () => {
    data = await fromCallback(cb => readFile('./test/test2.html', 'utf-8', cb))
  })

  it('gets', async () => {
    axios.get = jest.fn(() => Promise.resolve({data}))
    const events = await scrape()
    expect(events).toMatchSnapshot()
  })
})
