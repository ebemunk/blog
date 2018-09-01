import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import WordCount from 'sections/WordCount'
import CharWordHistogram from 'sections/CharWordHistogram'
import CountPerEpisode from 'sections/CountPerEpisode'
import CharSelector from 'sections/CharSelector'
import Personalities from 'sections/Personalities'
import Individual from 'sections/Individual'
import LinesPerChar from 'sections/LinesPerChar'
import Flashes from 'sections/Flashes'
import SceneTone from 'sections/SceneTone'
import CharCooccurrence from 'sections/CharCooccurrence'
import CharReadingLevel from 'sections/CharReadingLevel'
import EpisodeReadingLevel from 'sections/EpisodeReadingLevel'
import CharAppearance from 'sections/CharAppearance'
import WordConnections from 'sections/WordConnections'

import configureStore from 'store'

const store = configureStore({})

const render = (component, selector) =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>{component}</Provider>
    </AppContainer>,
    document.querySelector(selector),
  )

render(<WordCount />, '#word-count')
render(<CountPerEpisode />, '#char-per-episode')
render(<CharWordHistogram />, '#char-word-histogram')
render(<Individual />, '#individual')
render(<CharSelector />, '#personality-selector')
render(<Personalities />, '#personality')
render(<LinesPerChar />, '#lines-per-char')
render(<Flashes />, '#flashbacks')
render(<SceneTone />, '#scene-tone')
render(<CharCooccurrence />, '#char-cooccurrence')
render(<CharReadingLevel />, '#char-reading-level')
render(<EpisodeReadingLevel />, '#episode-reading-level')
render(<CharAppearance />, '#char-appearance')
render(<WordConnections />, '#radial-word-connections')
