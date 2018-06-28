import { combineReducers } from 'redux'

import {
  episodes,
  episodeSelection,
  flashes,
  personalities,
  personalitySelection,
  personalityTooltip,
  charCooccurrence,
} from '../reducers'
import { reducer as countsPerEpisode } from './countsPerEpisode'
import { reducer as wordCount } from './wordCount'
import { reducer as charWordFrequencies } from './charWordFrequencies'
import { reducer as linesPerChar } from './linesPerChar'

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
