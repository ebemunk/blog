import React from 'react'
import ReactDOM from 'react-dom'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

render(<div>hi</div>, '#hi')
