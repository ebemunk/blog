import React, { Component } from 'react'
import * as d3 from 'd3'

const axisType = {
	top: 'axisTop',
	right: 'axisRight',
	bottom: 'axisBottom',
	left: 'axisLeft'
}

export default class Axis extends Component {
	static defaultProps = {
		tickSize: 6,
		tickFormat: null,
		tickValues: null,
		ticks: null
	}

	componentDidMount() {
		this.renderAxis()
	}

	componentDidUpdate() {
		this.renderAxis()
	}

	renderAxis() {
		if( !this.props.scale ) {
			return
		}

		const axis = d3[axisType[this.props.orientation]]()
			.scale(this.props.scale)
			.ticks(this.props.ticks)
			.tickSize(this.props.tickSize)
			.tickFormat(this.props.tickFormat)
			.tickValues(this.props.tickValues)

		d3.select(this.axisElement)
			.transition()
			.duration(250)
			.call(axis)
	}

	render() {
		return (
			<g
				ref={(el) => { this.axisElement = el; }}
				className={this.props.className}
				transform={this.props.transform}
			/>
		)
	}
}
