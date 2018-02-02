import { readFile } from 'fs'
import { fromCallback } from 'bluebird'
import axios from 'axios'

import scrape, { parsePage } from './scrape'
import * as db from './db'

let data, empty

beforeAll(async () => {
  data = await fromCallback(cb => readFile('./test/test2.html', 'utf-8', cb))
  empty = await fromCallback(cb => readFile('./test/empty.html', 'utf-8', cb))

  db.getPool = jest.fn(() => ({
    query: jest.fn(() => Promise.resolve()),
    end: jest.fn(() => Promise.resolve()),
  }))
})

describe('scrape', () => {
  it('gets', async () => {
    axios.get = jest
      .fn()
      .mockReturnValueOnce(Promise.resolve({ data }))
      .mockReturnValueOnce(Promise.resolve({ data: empty }))
    const events = await scrape()
    expect(axios.get).toHaveBeenCalledTimes(2)
  })
})

describe('parsePage', () => {
  it('parses list html', async () => {
    axios.get = jest.fn(() => Promise.resolve({ data }))
    const evs = await parsePage(3)
    expect(evs).toMatchSnapshot()
  })
})
