import { parsePage } from './parse'

import { readFile } from '../util'

describe('parsePage', () => {
  it('should parse 19750105-0', async () => {
    const file = await readFile('data/html/records/19750105-0.html')
    const lol = parsePage(file)
    console.log('lol', lol)
  })
})
