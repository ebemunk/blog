import { combineReducers } from 'redux'

import {
  episodes,
  episodeSelection,
  wordCount,
  flashes,
  linesPerChar,
  charWordFrequencies,
  personalities,
  personalitySelection,
  personalityTooltip,
  charCooccurrence,
} from '../reducers'
import { reducer as countsPerEpisode } from './countsPerEpisode'

const rootReducer = combineReducers({
  episodes,
  episodeSelection,
  wordCount,
  flashes,
  linesPerChar,
  charWordFrequencies,
  personalities,
  personalitySelection,
  personalityTooltip,
  charCooccurrence,
  countsPerEpisode,
})

export default rootReducer
