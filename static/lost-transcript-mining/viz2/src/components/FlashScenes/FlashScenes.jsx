import React, { Component } from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'

import style from './FlashScenes.css'

export default class FlashScenes extends Component {
	static defaultProps = {
		episodes: []
	}

	componentWillMount() {
		this.props.getFlashes()
	}

	render() {
		const {
			episodes
		} = this.props

		if( ! episodes.length ) return null

		const totals = episodes.map(e => R.sum(e.flashbacks.map(f => f.chars)))
		const lengths = d3.max(episodes.map(e => e.flashbacks.length))
		console.log('ya', {totals, lengths})

		const x = d3.scaleLinear()
		.range([0, 960])
		.domain([0, 100])
		// .domain([0, d3.max(totals)])

		const stack = d3.stack()
		.keys(R.range(0, lengths))
		.value((data, key) => data[key].chars)
		.order(d3.stackOrderNone)
		.offset(d3.stackOffsetNone)

		const sdata = episodes.reduce((acc, d, i) => ([
			...acc,
			d.flashbacks
			.map(v => ({
				...v,
				chars: v.chars / totals[i] * 100
			}))
			.concat(
				new Array(lengths - d.flashbacks.length)
				.fill({ chars: 0, flashback: false }, 0, lengths - d.flashbacks.length)
			),
		]), [])
		console.log('--------------');
		console.log('stada', sdata);
		const stax = stack(sdata)
		console.log('na', stax)

		return (
			<svg height="1000" width="960">
				{
					stax.map((cat, ci) => cat.map((r, i) => (
							<rect
								key={i}
								x={x(r[0])}
								y={i*27}
								height={25}
								width={x(r[1]) - x(r[0])}
								fill={r.data[ci].flashback ? 'red' : 'white'}
							/>
						))
					)
				}
			</svg>
		)
	}
}
