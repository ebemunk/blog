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
import FlashScenes from 'sections/FlashScenes'
import Flashes from 'sections/Flashes'
import SceneTone from 'sections/SceneTone'
import CharCooccurrence from 'sections/CharCooccurrence'

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
render(<CharWordHistogram />, '#char-word-histogram')
render(<CountPerEpisode />, '#char-per-episode')
render(<CharSelector />, '#personality-selector')
render(<Personalities />, '#personality')
render(<Individual />, '#individual')
render(<LinesPerChar />, '#lines-per-char')
render(<Flashes />, '#flashbacks')
render(<SceneTone />, '#scene-tone')
// render(<CharCooccurrence />, '#char-cooccurrence')
