import React, { Component } from 'react'
import * as d3 from 'd3'
import _ from 'lodash'
import fp from 'lodash/fp'
import classnames from 'classnames'

import { Axis, Brush } from '../'

import style from './EpisodeRangeSelector.css'

const SEASONS = [
	[0, 23],
	[24, 46],
	[47, 68],
	[69, 81],
	[82, 97],
	[98, 113]
]

export default class EpisodeRangeSelector extends Component {
	static defaultProps = {
		width: 960,
		height: 40,
		episodes: [],
		selection: []
	}

	state = {
		scale: () => {},
		color: () => {},
		debouncedSelect: () => {},
		brushSelection: [null, null],
		isBrushing: false
	}

	componentWillMount() {
		this.props.getEpisodes()
	}

	componentWillReceiveProps({episodes, width, selectEpisodes, selection}) {
		const debouncedSelect = _.debounce(selectEpisodes, 250)
		// const debouncedSelect = selectEpisodes

		const scale = d3.scalePoint()
		.domain(_.range(0, episodes.length))
		.range([0, width])
		.padding(0.5)

		// not null and not full selection
		const isBrushing = ! (
			_.isEqual(selection, [null, null])
			|| _.isEqual(selection, [0, episodes.length-1])
		)

		let brushSelection
		if(isBrushing) {
			brushSelection = [
				scale(selection[0]) - scale.step()/2,
				scale(selection[1]) + scale.step()/2
			]
		} else {
			brushSelection = [null, null]
		}

		const color = d3.scaleOrdinal(d3.schemeCategory10)
		.domain(_.range(0, episodes.length))

		this.setState({
			scale,
			color,
			debouncedSelect,
			brushSelection,
			isBrushing
		})
	}

	onBrush = (event) => {
		if( ! event.sourceEvent ) return
		if( event.sourceEvent.type === 'brush' ) return

		const { scale, debouncedSelect } = this.state

		const selection = scale.domain()
		.filter(d => event.selection[0] <= scale(d) && event.selection[1] >= scale(d))

		if( selection.length ) {
			debouncedSelect([_.first(selection), _.last(selection)])
		} else {
			debouncedSelect([null, null])
		}
	}

	onBrushEnd = (event) => {
		if( ! event.sourceEvent ) return
		if( ! event.selection ) {
			this.state.debouncedSelect([null, null])
		}
	}

	render() {
		const {
			width,
			height,
			episodes
		} = this.props
		const {
			scale,
			color,
			debouncedSelect,
			isBrushing,
			brushSelection
		} = this.state

		if( ! episodes.length ) return null
		if( ! scale.step ) return null

		const halfStep = scale.step() * 0.5

		return (
			<div>
				<svg
					className={classnames({
						[style.episodeSelector]: true,
						[style.brushed]: isBrushing
					})}
					width={width}
					height={height + 15}
				>
					<defs>
						<mask
							id="brushMask"
							x="0"
							y="0"
							width={width}
							height={height}
						>
							<rect
								y="0"
								x="0"
								width={brushSelection[0]}
								height={height}
								opacity="0.3"
								fill="white"
							/>
							<rect
								y="0"
								x={brushSelection[0]}
								width={brushSelection[1] - brushSelection[0]}
								height={height}
								opacity="1"
								fill="white"
							/>
							<rect
								y="0"
								x={brushSelection[1]}
								width={width - brushSelection[1]}
								height={height}
								opacity="0.3"
								fill="white"
							/>
						</mask>
					</defs>
						<g className={style.seasons}>
							{SEASONS.map(([start, end], i) =>
								<rect
									x={scale(start) - halfStep}
									y={0}
									width={(scale(end) + halfStep) - (scale(start) - halfStep)}
									height={height}
									fill={color(i)}
									key={[start, end]}
								/>
							)}
						</g>
						<g className={style.seasonSelectors}>
							{SEASONS.map(([start, end], i) =>
								<text
									x={scale(start) + (scale(end) - scale(start)) / 2}
									y={height+15}
									fill={color(i)}
									key={start}
									onClick={() => debouncedSelect([start, end])}
								>
									Season {i+1}
								</text>
							)}
						</g>
						<g className={style.episodes}>
							{episodes.map((episode, i) =>
								<rect
									x={scale(i) - 1.5}
									y={5}
									width={3}
									height={height - 10}
									key={i}
								/>
							)}
						</g>
						<Brush
							className={style.brush}
							extent={[[0, 0], [width, height]]}
							handleSize={2}
							onBrush={this.onBrush}
							onBrushEnd={this.onBrushEnd}
							selection={this.state.brushSelection}
						/>
				</svg>
			</div>
		)
	}
}
