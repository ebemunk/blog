import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import images from './images'
import style from './Value.css'

class Value extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.onRemove = this.onRemove.bind(this)
    this.handleTouchEndRemove = this.handleTouchEndRemove.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
  }

  handleMouseDown(event) {
    if (event.type === 'mousedown' && event.button !== 0) {
      return
    }
    if (this.props.onClick) {
      event.stopPropagation()
      this.props.onClick(this.props.value, event)
      return
    }
    if (this.props.value.href) {
      event.stopPropagation()
    }
  }

  onRemove(event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.onRemove(this.props.value)
  }

  handleTouchEndRemove(event) {
    // Check if the view is being dragged, In this case
    // we don't want to fire the click event (because the user only wants to scroll)
    if (this.dragging) return

    // Fire the mouse events
    this.onRemove(event)
  }

  handleTouchMove() {
    // Set a flag that the view is being dragged
    this.dragging = true
  }

  handleTouchStart() {
    // Set a flag that the view is not being dragged
    this.dragging = false
  }

  render() {
    const { label, value } = this.props.value
    return (
      <div className={style.wrap} title={label}>
        <div
          className={style.img}
          style={{
            backgroundImage: `url(${images[value]})`,
          }}
        />
        <div className={style.value}>{this.props.children}</div>
        <div
          className={style.remove}
          onMouseDown={this.onRemove}
          onTouchEnd={this.handleTouchEndRemove}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          children="×"
        />
      </div>
    )
  }
}

Value.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool, // disabled prop passed to ReactSelect
  id: PropTypes.string, // Unique id for the value - used for aria
  onClick: PropTypes.func, // method to handle click on value label
  onRemove: PropTypes.func, // method to handle removal of the value
  value: PropTypes.object.isRequired, // the option object for this value
}

export default Value
