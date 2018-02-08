import { combineReducers } from 'redux'
import * as R from 'ramda'

const tags = [
  'Activism',
  'Attractions',
  'Comedy',
  'Concerts',
  'Dance',
  'Festivals',
  'Film',
  'Food & Drink',
  'Forums & Talks',
  'Fundraisers & Charity',
  'Galleries',
  'Holiday',
  "Kids' Stuff",
  'Literary/Books',
  'Markets',
  'Museums',
  'Nightlife',
  'Performing Arts',
  'Sports',
  'Theatre',
  'Other',
]

const rootReducer = combineReducers({
  events: (state = [], action) => {
    switch (action.type) {
      case 'EVENTS':
        return action.payload.map(event => ({
          ...event,
          startDate: new Date(event.startDate),
          endDate: new Date(event.endDate),
        }))
      default:
        return state
    }
  },
  datePicker: (state = {}, action) => {
    switch (action.type) {
      case 'EVENTS':
        return {
          minDate: R.reduce(
            R.min,
            Infinity,
            action.payload.map(e => new Date(e.startDate)),
          ),
          maxDate: R.reduce(
            R.max,
            -Infinity,
            action.payload.map(e => new Date(e.endDate)),
          ),
        }
      case 'SELECT_DATES':
        return {
          ...state,
          ...action.payload,
        }
      default:
        return state
    }
  },
  tags: (
    state = {
      all: tags,
      filters: tags,
    },
    action,
  ) => {
    switch (action.type) {
      // case 'EVENTS':
      //   return R.uniq(
      //     action.payload.reduce((arr, cur) => [...arr, ...cur.tags], []),
      //   )
      case 'TOGGLE_TAG':
        return {
          ...state,
          filters: state.filters.includes(action.payload)
            ? state.filters.filter(tag => tag !== action.payload)
            : [...state.filters, action.payload],
        }
      case 'TOGGLE_ALL':
        return {
          ...state,
          filters: state.all,
        }
      case 'TOGGLE_NONE':
        return {
          ...state,
          filters: [],
        }
      default:
        return state
    }
  },
})

export default rootReducer
