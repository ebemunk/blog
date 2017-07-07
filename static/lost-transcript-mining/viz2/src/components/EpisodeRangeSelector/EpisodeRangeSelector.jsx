import React, { Component } from 'react'
import * as d3 from 'd3'
import _ from 'lodash'

import { Axis, Brush } from '../'

import style from './style.css'

export default class EpisodeRangeSelector extends Component {
	static defaultProps = {
		width: 960,
		height: 40,
		episodes: [],
		selection: []
	}

	state = {
		scale: () => {},
		debouncedSelect: () => {},
		brushSelection: null
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

		const brushSelection = ! selection.every(_.isNull) ?
			[
				scale(selection[0]) - scale.step()/2 : null,
				scale(selection[1]) + scale.step()/2 : null
			]
			:
			[null, null]

		this.setState({
			scale,
			debouncedSelect,
			brushSelection
		})
	}

	onBrush = ({event}) => {
		if( ! event.sourceEvent ) return
		if( event.sourceEvent.type === 'brush' ) return

		console.log('onBrush', event);

		const { scale, debouncedSelect } = this.state

		const selection = scale.domain()
		.filter(d => event.selection[0] <= scale(d) && event.selection[1] >= scale(d))

		console.log(selection);
		if( selection.length ) {
			debouncedSelect([_.first(selection), _.last(selection)])
		} else {
			debouncedSelect([null, null])
		}
	}

	onBrushEnd = ({event, node}) => {
		console.log('onBrushEnd', event);
		// if( ! event.sourceEvent ) return
		// if( ! event.selection ) {
		// 	this.state.debouncedSelect([null, null])
		// }
	}

	render() {
		const {
			width,
			height,
			episodes,
		} = this.props
		const { scale } = this.state

		if( ! episodes.length ) return null

		return (
			<div>
				<svg
					className={style.episodeSelector}
					width={width}
					height={height}
				>
					<g transform="translate(0, 0)">
						<g>
							{episodes.map(episode =>
								<rect
									x={scale(episode.i)}
									y={0}
									width={1}
									height={height}
									key={episode.i}
								/>
							)}
						</g>
						<Brush
							className={style.brush}
							extent={[[0, 0], [width, height]]}
							handleSize={1}
							onBrush={this.onBrush}
							onBrushEnd={this.onBrushEnd}
							selection={this.state.brushSelection}
						/>
					</g>
				</svg>
			</div>
		)
	}
}
