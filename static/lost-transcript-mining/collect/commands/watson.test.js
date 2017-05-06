import {
  getEpisodeText,
  getCharText,
  personality,
} from './watson'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000000


describe('getCharText', () => {
  xit('ss', () => {
    expect.assertions(1)
    return personality({concurrency: 1})
    .then(k => {
      console.log(k);
    })
  })
})
