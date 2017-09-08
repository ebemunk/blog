import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

import style from './EpisodeBar.css'

export default function EpisodeBar(props) {
	const {
		width,
		height,
		data,
		classScale,
		transform
	} = props

	const total = data.reduce((sum, d) => sum + d.value, 0)
	const x = d3.scaleLinear()
	.range([0, width])
	.domain([0, total])

	return (
		<g
			width={width}
			height={height}
			transform={transform}
		>
			{data.map((d, i) =>
				<rect
					className={classScale(d.class !== undefined ? d.class : d.value)}
					key={d.key}
					x={x(data.slice(0, i).reduce((acc, d1) => acc + d1.value, 0))}
					width={x(d.value)}
					y={0}
					height={height}
				/>
			)}
		</g>
	)
}

EpisodeBar.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.number,
		value: PropTypes.number,
	})).isRequired,
	classScale: PropTypes.func,
	width: PropTypes.number,
	height: PropTypes.number
}

EpisodeBar.defaultProps = {
	width: 960,
	height: 40,
	classScale: () => undefined
}
