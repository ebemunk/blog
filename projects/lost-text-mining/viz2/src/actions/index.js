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
