import React from 'react'
import ReactDOM from 'react-dom'

import MapViz from 'roots/Map/MapV'
import DayOfWeek from 'roots/DayOfWeek'
import Places from 'roots/Places'
import ScrollMap from 'roots/ScrollMap'

// import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

// render(<MapViz />, '#map')
render(
  <ErrorBoundary>
    <ScrollMap />
  </ErrorBoundary>,
  '#map',
)
render(<DayOfWeek />, '#day-of-week')
render(<Places />, '#places')
