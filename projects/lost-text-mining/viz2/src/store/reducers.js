import { combineReducers } from 'redux'

import {
  episodes,
  episodeSelection,
  flashes,
  personalities,
  personalityTooltip,
  charCooccurrence,
} from '../reducers'
import { reducer as countsPerEpisode } from './countsPerEpisode'
import { reducer as wordCount } from './wordCount'
import { reducer as charWordFrequencies } from './charWordFrequencies'
import { reducer as linesPerChar } from './linesPerChar'
import { reducer as charSelection } from './charSelection'

const rootReducer = combineReducers({
  episodes,
  episodeSelection,
  wordCount,
  flashes,
  linesPerChar,
  charWordFrequencies,
  personalities,
  charSelection,
  personalityTooltip,
  charCooccurrence,
  countsPerEpisode,
})

export default rootReducer
