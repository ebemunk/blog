import { get } from 'axios'

export const getEvents = () => async dispatch => {
  const { data: events } = await get(
    'https://jsonblob.com/api/jsonBlob/6d894d47-0ca2-11e8-a2ea-5d19acf93d35',
  )

  dispatch({
    type: 'EVENTS',
    payload: events,
  })
}

export const toggleTag = tag => ({
  type: 'TOGGLE_TAG',
  payload: tag,
})

export const toggleAll = () => ({
  type: 'TOGGLE_ALL',
})

export const toggleNone = () => ({
  type: 'TOGGLE_NONE',
})

export const selectDates = range => ({
  type: 'SELECT_DATES',
  payload: range,
})
