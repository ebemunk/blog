import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import configureStore from './src/store'
import App from './src/App'

const store = configureStore({})

// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }

const render = (component, selector) =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>{component}</Provider>
    </AppContainer>,
    document.querySelector(selector),
  )

// render(<App />, '#root')
