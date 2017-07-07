import React from 'react'
import ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import App from './src'
import configureStore from './src/store'

const store = configureStore({})

const render = Component => ReactDOM.render(
	// <AppContainer>
		<Provider store={store}>
			<Component />
		</Provider>,
	// </AppContainer>,
	document.getElementById('root')
)

render(App)

if( module.hot ) {
	module.hot.accept('./src', () => {
		const NextApp = require('./src').default
		render(NextApp)
	})
}
