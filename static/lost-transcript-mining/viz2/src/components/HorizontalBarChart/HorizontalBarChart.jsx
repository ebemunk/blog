import React, { Component } from 'react'
import * as d3 from 'd3'

import { Axis } from '../'

import style from './HorizontalBarChart.css'

export default class HorizontalBarChart extends Component {
	static defaultProps = {
		width: 480,
		height: 500,
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		},
		data: [
			{key: 'JACK', value: 1234},
			{key: 'KATE', value: 1121},
			{key: 'QAYT', value: 821},
			{key: 'JACQUEAUIAZXAUQX', value: 314},
		]
	}

	state = {
		x: d3.scaleLinear(),
		y: d3.scaleBand(),
	}

	componentWillReceiveProps({ data, width, height, padding }) {
		const x = d3.scaleLinear()
		.range([0, width - padding.left - padding.right])
		.domain([0, d3.max(data, d => d.value)])

		const y = d3.scaleBand()
		.range([0, height])
		.padding(0.1)
		.domain(data.map(d => d.key))

		this.setState({
			x,
			y
		})
	}

	render() {
		const {
			width,
			height,
			padding,
			data
		} = this.props

		const {
			x,
			y
		} = this.state

		return (
			<svg
				width={width}
				height={height}
			>
				<g
					transform={`translate(${padding.left}, ${padding.top})`}
				>
					<Axis
						orientation="top"
						scale={x}
						tickSize={-height}
						className={style.xAxis}
					/>
					<Axis
						orientation="left"
						scale={y}
						tickSize={0}
						className={style.yAxis}
					/>
					<g>
						{data.map(({ key, value }) =>
							<rect
								x={0}
								y={y(key)}
								width={x(value)}
								height={y.bandwidth()}
								className={style.bar}
								key={key}
							/>
						)}
					</g>
				</g>
			</svg>
		)
	}
}
