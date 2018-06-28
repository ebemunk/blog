export const getEpisodes = () => dispatch => {
  const episodes = require('../data/episodes.json')

  dispatch({
    type: 'EPISODES',
    payload: episodes,
  })
}

export const getPersonalities = () => dispatch => {
  const personalities = require('data/personalities.json')

  dispatch({
    type: 'data/personalities',
    payload: personalities,
  })
}

export const selectEpisodes = selection => ({
  type: 'SELECT_EPISODES',
  payload: selection,
})

export const getFlashes = () => dispatch => {
  const flashes = require('../data/flashes.json')

  dispatch({
    type: 'FLASHES',
    payload: flashes,
  })
}

export const getCharCooccurrence = () => dispatch => {
  const charCooccurrence = require('../data/charCooccurrence.json')

  dispatch({
    type: 'CHAR_COOCCURRENCE',
    payload: charCooccurrence,
  })
}
