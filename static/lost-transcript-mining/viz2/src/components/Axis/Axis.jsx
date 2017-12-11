import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import _ from 'lodash'

const AXIS_TYPE = {
	top: 'axisTop',
	right: 'axisRight',
	bottom: 'axisBottom',
	left: 'axisLeft'
}

export default class Axis extends Component {
	static propTypes = {
		orientation: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
		scale: PropTypes.func.isRequired,
		ticks: PropTypes.any,
		tickArguments: PropTypes.any,
		tickValues: PropTypes.array,
		tickFormat: PropTypes.func,
		tickSize: PropTypes.number,
		tickSizeInner: PropTypes.number,
		tickSizeOuter: PropTypes.number,
		tickPadding: PropTypes.number,
		transitionDuration: PropTypes.number,
	}

	static defaultProps = {
		ticks: null,
		tickArguments: null,
		tickValues: null,
		tickFormat: null,
		tickSize: 6,
		tickSizeInner: 6,
		tickSizeOuter: 6,
		tickPadding: 3,
		transitionDuration: 250,
	}

	componentDidMount() {
		this.renderAxis()
	}

	componentDidUpdate() {
		this.renderAxis()
	}

	renderAxis() {
		const {
			orientation,
			scale,
			ticks,
			tickSize,
			tickFormat,
			tickValues,
			transitionDuration
		} = this.props

		const axis = d3[AXIS_TYPE[orientation]]()
			.scale(scale)
			.ticks(ticks)
			.tickSize(tickSize)
			.tickFormat(tickFormat)
			.tickValues(tickValues)

		d3.select(this.axisElement)
			.transition()
			.duration(transitionDuration)
			.call(axis)
	}

	render() {
		const otherProps = _.pick(this.props, [
			'className',
			'transform'
		])

		return (
			<g
				ref={el => this.axisElement = el}
				{...otherProps}
			/>
		)
	}
}
