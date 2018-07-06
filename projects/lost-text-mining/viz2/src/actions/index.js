export const getEpisodes = () => dispatch => {
  const episodes = require('../data/episodes.json')

  dispatch({
    type: 'EPISODES',
    payload: episodes,
  })
}

export const selectEpisodes = selection => ({
  type: 'SELECT_EPISODES',
  payload: selection,
})

export const getCharCooccurrence = () => dispatch => {
  const charCooccurrence = require('../data/charCooccurrence.json')

  dispatch({
    type: 'CHAR_COOCCURRENCE',
    payload: charCooccurrence,
  })
}
