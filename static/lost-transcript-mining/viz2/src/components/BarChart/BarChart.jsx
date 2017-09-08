import React, { Component } from 'react'
import * as d3 from 'd3'

import { Axis } from '../'

import style from './BarChart.css'

export default class BarChart extends Component {
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
			{key: 'JACK', value: 134},
			{key: 'KATE', value: 1121},
			{key: 'QAYT', value: 821},
			{key: 'JACQUEAUIAZXAUQX', value: 314},
		]
	}

	state = {
		linearScale: d3.scaleLinear(),
		bandScale: d3.scaleBand(),
	}

	componentWillReceiveProps({ data, width, height, padding }) {
		console.log('recalc')
		const linearScale = d3.scaleLinear()
		.range([height - padding.top - padding.bottom, 0])
		.domain([0, d3.max(data, d => d.value)])

		const bandScale = d3.scaleBand()
		.range([0, width - padding.right - padding.left])
		.padding(0.1)
		.domain(data.map(d => d.key))

		this.setState({
			linearScale,
			bandScale
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
			linearScale,
			bandScale
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
						orientation="left"
						scale={linearScale}
						tickSize={-width + padding.right + padding.left}
						className={style.yAxis}
					/>
					<Axis
						orientation="bottom"
						scale={bandScale}
						tickSize={3}
						className={style.xAxis}
						transform={`translate(0, ${height - padding.top - padding.bottom})`}
					/>
					<g>
						{data.map(({ key, value }) =>
							<rect
								x={bandScale(key)}
								y={linearScale(value)}
								width={bandScale.bandwidth()}
								height={height - padding.top - padding.bottom - linearScale(value)}
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
