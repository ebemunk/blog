import React, { Component } from 'react'
import * as d3 from 'd3'

import {
	EpisodeBar,
	EpisodeRangeSelector,
	HorizontalBarChart,
	FlashScenes
} from './components'

import style from './App.css'

export class App extends Component {
	componentWillMount() {
		this.props.getEpisodeLengths()
	}

	render() {
		const {
			episodeLengths,
			episodeSelection
		} = this.props

		return (
			<div className={style.app}>
				<h1>bro</h1>
				<EpisodeRangeSelector
				/>
				<FlashScenes />
				{/*<hr />
				<HorizontalBarChart
					width={500}
					height={500}
					padding={{
						top: 30,
						left: 30,
						right: 10,
					}}
				/>
				<hr />
				<EpisodeBar
					data={episodeLengths.filter(d => d.season == 1 && d.episode == 2).map(d => ({
						key: d.scene,
						value: d.chars
					}))}
					classScale={
						d3.scaleQuantize()
						.range(['red', 'yellow', 'green'])
						.domain([0, d3.max(episodeLengths.filter(d => d.season == 1 && d.episode == 2).map(d => d.chars))])
					}
				/>
				<EpisodeBar
					data={[
						{ key: 1, value: 135, class: true},
						{ key: 2, value: 221, class: false},
						{ key: 3, value: 25, class: false},
						{ key: 4, value: 524, class: false},
						{ key: 5, value: 80, class: false},
						{ key: 6, value: 333, class: true},
					]}
					classScale={d3.scaleOrdinal().range(['red', 'yellow']).domain([false, true])}
				/>*/}
			</div>
		)
	}
}

import { connect } from 'react-redux'

import * as actions from './actions'

const mapStateToProps = state => ({
	...state,
})

const mapDispatchToProps = actions

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

