import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import configureStore from './src/store'

const store = configureStore({})

// const render = Component => ReactDOM.render(
// 	<AppContainer>
// 		<Provider store={store}>
// 			<Component />
// 		</Provider>
// 	</AppContainer>,
// 	document.getElementById('root')
// )

// if( module.hot ) {
// 	render(App)
// 	module.hot.accept('./src', () => {
// 		const NextApp = require('./src').default
// 		render(NextApp)
// 	})
// }

import { WordCount, CharWordHistogram, Personalities } from './src/sections'
import Selector from './src/sections/Personalities/Selector'

const render = (component, selector) =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>{component}</Provider>
    </AppContainer>,
    document.querySelector(selector),
  )

render(<WordCount />, '#word-count')
render(<CharWordHistogram />, '#char-word-histogram')
render(<Selector />, '#personality-selector')
render(<Personalities />, '#personality')
