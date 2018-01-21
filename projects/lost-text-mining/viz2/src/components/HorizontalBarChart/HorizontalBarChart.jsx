import React, { Component } from 'react'
import * as d3 from 'd3'
import classnames from 'classnames'
import { NodeGroup } from 'react-move'

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
			{key: 'JACK', value: 134},
			{key: 'KATE', value: 1121},
			{key: 'QAYT', value: 821},
			{key: 'JACQUEAUIAZXAUQX', value: 314},
		],
		barStyle: () => {},
		linearAxisProps: {},
		bandAxisProps: {},
		linearScaleProps: {},
	}

	state = {
		linearScale: d3.scaleLinear(),
		bandScale: d3.scaleBand(),
	}

	componentWillReceiveProps({ data, width, height, padding, linearScaleProps }) {
		const linearDomain = linearScaleProps.domain ? linearScaleProps.domain : [0, d3.max(data, d => d.value)]

		const linearScale = d3.scaleLinear()
		.range([0, width - padding.right - padding.left])
		.domain(linearDomain)

		const bandScale = d3.scaleBand()
		.range([0, height*data.length - padding.top - padding.bottom])
		.padding(0.1)
		.domain(data.map(d => d.key))

		this.setState({
			linearScale,
			bandScale
		})
	}

	render() {
		const {
			className,
			width,
			height,
			padding,
			data,
			linearAxisProps,
			bandAxisProps,
			barStyle
		} = this.props

		const {
			linearScale,
			bandScale
		} = this.state

		return (
			<svg
				width={width}
				height={height*data.length}
				className={className}
			>
				<g
					transform={`translate(${padding.left}, ${padding.top})`}
				>
					<Axis
						orientation="top"
						scale={linearScale}
						tickSize={-height*data.length + padding.top + padding.bottom}
						{...linearAxisProps}
						className={classnames(style.linearAxis, linearAxisProps.className)}
					/>
					<Axis
						orientation="left"
						scale={bandScale}
						tickSize={3}
						{...bandAxisProps}
						className={classnames(style.bandAxis, bandAxisProps.className)}
					/>
					<NodeGroup
						data={data}
						keyAccessor={d => d.key}
						start={() => ({
							width: 0
						})}
						enter={d => ({
							width: [linearScale(d.value)],
							timing: { duration: 250 }
						})}
						update={d => ({
							width: [linearScale(d.value)],
							timing: { duration: 250 }
						})}
						leave={d => ({
							width: 0,
						})}
					>
						{
							nodeData => {
								return (
									<g>
										{
											nodeData.map(node => {
												const { key, data: { value } } = node
												const { x, width } = node.state
												return (
													<rect
														y={bandScale(key)}
														x={0}
														width={width}
														height={bandScale.bandwidth()}
														className={style.bar}
														key={key}
														style={barStyle({ key, value })}
													/>
												)
											}
											)
										}
									</g>
								)
							}
						}
					</NodeGroup>
				</g>
			</svg>
		)
	}
}
