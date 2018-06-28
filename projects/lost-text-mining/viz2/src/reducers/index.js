export const episodes = (state = [], action) => {
  switch (action.type) {
    case 'EPISODES':
      return action.payload
    default:
      return state
  }
}

export const episodeSelection = (state = [null, null], action) => {
  switch (action.type) {
    case 'SELECT_EPISODES':
      return action.payload
    default:
      return state
  }
}

export const flashes = (state = [], action) => {
  switch (action.type) {
    case 'FLASHES':
      return action.payload
    default:
      return state
  }
}

export const charCooccurrence = (state = [], action) => {
  switch (action.type) {
    case 'CHAR_COOCCURRENCE':
      return action.payload
    default:
      return state
  }
}
