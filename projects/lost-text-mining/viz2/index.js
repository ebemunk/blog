import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import App from './src'
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

import WordCount from './src/sections/WordCount'
import * as actions from './src/actions'

const components = {
	'WordCount': <WordCount />
}

window.renderTo = (component, selector) => ReactDOM.render(
	<AppContainer>
		<Provider store={store}>
			{components[component]}
		</Provider>
	</AppContainer>,
	document.querySelector(selector)
)
window.store = store
window.loadData = () => {
	[
		actions.getWordCount,
	].map(fn => store.dispatch(fn()))
}
