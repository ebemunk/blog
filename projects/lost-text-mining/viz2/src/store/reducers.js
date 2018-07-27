import { combineReducers } from 'redux'

import { episodes, episodeSelection, charCooccurrence } from '../reducers'
import { reducer as countsPerEpisode } from './countsPerEpisode'
import { reducer as wordCount } from './wordCount'
import { reducer as charWordFrequencies } from './charWordFrequencies'
import { reducer as linesPerChar } from './linesPerChar'
import { reducer as charSelection } from './charSelection'
import { reducer as personalities } from './personalities'
import { reducer as flashes } from './flashes'
import { reducer as sceneTone } from './sceneTone'
import { reducer as toneSelection } from './toneSelection'
import { reducer as readingLevel } from './readingLevel'

const rootReducer = combineReducers({
  episodes,
  episodeSelection,
  wordCount,
  flashes,
  linesPerChar,
  charWordFrequencies,
  personalities,
  charSelection,
  charCooccurrence,
  countsPerEpisode,
  sceneTone,
  toneSelection,
  readingLevel,
})

export default rootReducer
