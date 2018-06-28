import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import WordCount from './src/sections/WordCount'
import CharWordHistogram from './src/sections/CharWordHistogram'
import CountPerEpisode from './src/sections/CountPerEpisode'
import CharSelector from './src/sections/CharSelector'
import Personalities from './src/sections/Personalities'
import LinesPerChar from './src/sections/LinesPerChar'
import FlashScenes from './src/sections/FlashScenes'
import CharCooccurrence from './src/sections/CharCooccurrence'

import configureStore from './src/store'

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
render(<LinesPerChar />, '#lines-per-char')
render(<FlashScenes />, '#flashbacks')
// render(<CharCooccurrence />, '#char-cooccurrence')
