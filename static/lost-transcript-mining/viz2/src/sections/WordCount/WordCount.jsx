import React from 'react'
import * as d3 from 'd3'

import {
	BarChart
} from '../../components'

import style from './WordCount.css'

const color = d3.scaleOrdinal(d3.schemeCategory10)

export default function WordCount(props) {
	const {
		data,
		linearScale,
	} = props

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ alignSelf: 'center' }}>
				<span style={{ transform: 'rotate(-90deg)', display: 'block' }}>Words</span>
			</div>
			<BarChart
				width={900}
				height={350}
				padding={{
					top: 30,
					left: 30,
					right: 10,
					bottom: 30,
				}}
				data={data}
				bandAxisProps={{
					className: style.bandAxis,
					tickSize: 0,
					tickFormat: key => {
						const [season, episode] = key.split('-')
						if( episode === '1' ) {
							return `Season ${season}`
						}
						return
					},
				}}
				linearScaleProps={linearScale}
				linearAxisProps={{
					className: style.linearAxis,
					tickFormat: d3.format('.2s')
				}}
				barStyle={({key}) => ({
					fill: color(key.split('-')[0])
				})}
			/>
		</div>
	)
}
