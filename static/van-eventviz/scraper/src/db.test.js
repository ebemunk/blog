import { insertObj, getPool } from './db'

describe('insertObj', () => {
  it('provides correct sql', () => {
    expect(
      insertObj({
        faf: 'etet',
        lolol: 'yaya',
        directions: ['some', 'things'],
      }),
    ).toMatchSnapshot()
  })
})

describe('getPool', () => {
  it('returns a singleton Pool', () => {
    const pool = getPool()
    expect(getPool()).toBe(pool)
  })
})
