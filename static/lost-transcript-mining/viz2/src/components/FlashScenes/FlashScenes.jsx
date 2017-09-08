import React, { Component } from 'react'
import * as d3 from 'd3'

import { EpisodeBar } from '../'

import style from './FlashScenes.css'

export default class FlashScenes extends Component {
	componentWillMount() {
		this.props.getFlashes()
	}

	render() {
		const {
			episodes
		} = this.props

		return (
			<svg height="1000" width="960">
				{episodes.map((episode, i) => (
					<EpisodeBar
						data={episode.flashes.map((d, i) => ({
							key: i,
							value: d.chars,
							class: d.flashback
						}))}
						classScale={d3.scaleOrdinal().range([style.normal, style.flashback]).domain([false, true])}
						key={`${episode.season}-${episode.episode}`}
						transform={`translate(0, ${17*i})`}
						height={15}
					/>
				))}
			</svg>
		)
	}
}
