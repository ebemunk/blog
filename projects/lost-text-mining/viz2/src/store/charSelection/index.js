export const select = (groupIndex, selection) => ({
  type: 'charSelection/select',
  payload: {
    groupIndex,
    selection,
  },
})

export const addGroup = () => ({
  type: 'charSelection/addGroup',
})

export const removeGroup = groupIndex => ({
  type: 'charSelection/removeGroup',
  payload: {
    groupIndex,
  },
})

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj([[]], {
  'charSelection/select': (state, action) => {
    const copy = [...state]
    copy[action.payload.groupIndex] = action.payload.selection
    return copy
  },
  'charSelection/addGroup': state => [...state, []],
  'charSelection/removeGroup': (state, action) => {
    const copy = [...state]
    copy.splice(action.payload.groupIndex, 1)
    return copy.length ? copy : [[]]
  },
})
