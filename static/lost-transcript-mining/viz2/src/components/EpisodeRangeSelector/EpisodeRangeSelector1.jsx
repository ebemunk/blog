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
		domainIndex: {},
		scale: () => {},
		debouncedSelect: () => {},
		brushSelection: null
	}

	componentWillMount() {
		this.props.getEpisodes()
	}

	componentWillReceiveProps({episodes, width, selectEpisodes, selection}) {
		const domainIndex = episodes
			.reduce((prev, cur, i) => ({
				...prev,
				[new Date(0, 0, i).getTime()]: i
			}), {})
		const scale = d3.scaleTime()
			.domain([
				new Date(0, 0, 0),
				// length-1 to unfuck
				new Date(0, 0, episodes.length)
			])
			.rangeRound([0, width])
		const debouncedSelect = _.debounce(selectEpisodes, 250)

		this.setState({
			domainIndex,
			scale,
			debouncedSelect,
			brushSelection: selection.map(d => scale(new Date(0, 0, d)))
		})
	}

	onBrush = ({event, node}) => {
		if( ! event.sourceEvent ) return
		if( event.sourceEvent.type === 'brush' ) return

		const { domainIndex, scale, debouncedSelect } = this.state

		const d0 = event.selection.map(scale.invert)
		const d1 = d0.map(d3.timeDay.round)

		if( d1[0] >= d1[1] ) {
			d1[0] = d3.timeDay.floor(d0[0])
			d1[1] = d3.timeDay.offset(d1[0])
		}

		const selected = d1.map(d => domainIndex[d.getTime()])

		if( selected[1] === undefined ) selected[1] = 113
		console.log(selected);

		if( selected[0] === 0 && selected[1] === 113 ) {
			debouncedSelect([null, null])
		} else {
			debouncedSelect(selected)
		}
	}

	onBrushEnd = ({event, node}) => {
		const { debouncedSelect } = this.state

		if( ! event.sourceEvent ) return
		if( ! event.selection ) {
			debouncedSelect([null, null])
		}
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
						<Axis
							className={style.seasonAxis}
							orientation="bottom"
							scale={scale}
							tickSize={-25}
							tickFormat={(d, i) => `Season ${i+1}`}
							tickValues={
								episodes
									.filter(d => d.episode === 1)
									.map(d => d.date)
							}
							transform="translate(0, 25)"
						/>
						<Axis
							className={style.episodeAxis}
							orientation="bottom"
							scale={scale}
							tickSize={-15}
							tickFormat={() => null}
							ticks={d3.timeDay}
							transform="translate(0, 22)"
						/>
						<Brush
							className={style.brush}
							extent={[[0, 0], [width, 25]]}
							handleSize={4}
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
