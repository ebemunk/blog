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

export const linesPerChar = (state = [], action) => {
  switch (action.type) {
    case 'LINES_PER_CHAR':
      return action.payload
    default:
      return state
  }
}

export const personalities = (state = [], action) => {
  switch (action.type) {
    case 'PERSONALITIES':
      return action.payload
    default:
      return state
  }
}

export const personalitySelection = (state = [[]], action) => {
  switch (action.type) {
    case 'SELECT_PROFILES':
      const copy = [...state]
      copy[action.payload.groupIndex] = action.payload.selection
      return copy
    case 'ADD_PROFILE_GROUP':
      return [...state, []]
    case 'REMOVE_PROFILE_GROUP': {
      const copy = [...state]
      copy.splice(action.payload.groupIndex, 1)
      return copy.length ? copy : [[]]
    }
    default:
      return state
  }
}

export const personalityTooltip = (
  state = { show: false, target: null },
  action,
) => {
  switch (action.type) {
    case 'PERSONALITY_TOOLTIP_SHOW':
      return {
        show: true,
        target: action.payload,
      }
    case 'PERSONALITY_TOOLTIP_HIDE':
      return {
        show: false,
        target: null,
      }
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
