export const reducerFromObj = (defaultState, obj) => (
  state = defaultState,
  action,
) => (obj[action.type] ? obj[action.type](state, action) : state)
