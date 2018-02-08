import React from 'react'

import labels from './labels'

import style from './Facet.css'

export class Facet extends React.Component {
  state = {
    hoverTimeout: null,
  }

  mouseEnter = () => {
    const hoverTimeout = setTimeout(() => {
      this.props.showPersonalityTooltip(this.props.trait_id)
    }, 300)
    this.setState({ hoverTimeout })
  }

  mouseLeave = () => {
    if (this.state.hoverTimeout) clearTimeout(this.state.hoverTimeout)
    if (!this.props.tooltipShown) return
    this.props.hidePersonalityTooltip()
    this.setState({ hoverTimeout: null })
  }

  render() {
    const {
      trait_id,
      height,
      width,
      color,
      showPersonalityTooltip,
      hidePersonalityTooltip,
    } = this.props

    const { low, high, label } = labels[trait_id]

    return (
      <React.Fragment>
        {low && (
          <text dx={-5} dy={height / 2} className={style.low} children={low} />
        )}
        {high && (
          <text
            x={width}
            dx={5}
            dy={height / 2}
            className={style.high}
            children={high}
          />
        )}
        <rect
          id={trait_id}
          width={width}
          height={height}
          className={style.rect}
          fill={color}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        />
        <text
          x={width / 2}
          dy={height / 2}
          className={style.label}
          children={label.toUpperCase()}
        />
      </React.Fragment>
    )
  }
}

import { connect } from 'react-redux'
import { showPersonalityTooltip, hidePersonalityTooltip } from '../../actions'

export default connect(
  state => ({
    tooltipShown: state.personalityTooltip.show,
  }),
  {
    showPersonalityTooltip,
    hidePersonalityTooltip,
  },
)(Facet)
