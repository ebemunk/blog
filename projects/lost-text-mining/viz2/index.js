import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import {
  WordCount,
  CharWordHistogram,
  Personalities,
  LinesPerChar,
  EpisodeRangeSelector,
  CharSelector,
  CharCooccurrence,
} from './src/sections'
import FlashScenes from './src/sections/FlashScenes'
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
render(<CharSelector />, '#personality-selector')
render(<Personalities />, '#personality')
render(<LinesPerChar />, '#lines-per-char')
render(<FlashScenes />, '#flashbacks')
render(<CharCooccurrence />, '#char-cooccurrence')

console.log('aefaefaefaefa')
