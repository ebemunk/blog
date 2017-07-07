import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

export default class Brush extends Component {
	static propTypes = {
		extent: PropTypes.array.isRequired,
		selection: PropTypes.array.isRequired,
		handleSize: PropTypes.number,
		onBrush: PropTypes.func,
		onBrushEnd: PropTypes.func
	}

	static defaultProps = {
		handleSize: 1,
		onBrush: () => {},
		onBrushEnd: () => {}
	}

	componentDidMount() {
		this.renderBrush()
	}

	componentDidUpdate() {
		this.renderBrush()
	}

	renderBrush() {
		if( ! this.props.selection ) return

		const brush = d3.brushX()
			.extent(this.props.extent)
			.handleSize(this.props.handleSize)
			.on('brush', () => {
				this.props.onBrush({
					event: d3.event,
					node: this.node
				})
			})
			.on('end', () => {
				this.props.onBrushEnd({
					event: d3.event,
					node: this.node
				})
			})

		d3.select(this.node)
			.call(brush)

		if( this.props.selection[0] === this.props.extent[0][0] && this.props.selection[1] === this.props.extent[1][0] ) {
			d3.select(this.node).call(brush.move, null)
		} else {
			d3.select(this.node).call(brush.move, this.props.selection)
		}
	}

	render() {
		return (
			<g
				ref={(el) => { this.node = el; }}
				className={this.props.className}
				transform={this.props.transform}
			/>
		)
	}
}
