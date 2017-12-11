import React, { Component } from 'react'
import * as d3 from 'd3'
import classnames from 'classnames'

import {
	BarChart
} from '../../components'

import style from './WordCount.css'

const color = d3.scaleOrdinal(d3.schemeCategory10)
const barStyle = ({ key }) => ({
	fill: color(key.split('-')[0])
})
const ep1Tick = key => {
	const [season, episode] = key.split('-')
	if( episode !== '1' ) return
	return `Season ${season}`
}

export class WordCount extends Component {
	state = {
		dataType: 'total'
	}

	setDataType = dataType => this.setState({ dataType })

	render() {
		const { dataType } = this.state
		const { wordCount } = this.props

		const data = wordCount
		.map(d => ({
			key: `${d.season}-${d.episode}`,
			value: d[dataType]
		}))

		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button
						onClick={() => this.setState({ dataType: 'total' })}
						className={classnames({ active: dataType === 'total' })}
						children="Total"
					/>
					<button
						onClick={() => this.setState({ dataType: 'uniq' })}
						className={classnames({ active: dataType === 'uniq' })}
						children="Unique"
					/>
					<button
						onClick={() => this.setState({ dataType: 'density' })}
						className={classnames({ active: dataType === 'density' })}
						children="Density"
					/>
				</div>
				<div style={{ display: 'flex' }}>
					<div style={{ position: 'relative' }}>
						<div style={{ position: 'absolute', top: '50', left: '35', whiteSpace: 'nowrap', fontSize: '0.85em' }}>
							<span style={{ display: 'block' }}>
								{{
									total: 'Total Words',
									uniq: 'Unique Words',
									density: 'Unique Word Density'
								}[dataType]}
							</span>
							<small style={{ display: 'block' }}>
									{{
										total: 'Count of all words',
										uniq: 'Number of unique words',
										density: 'Percentage of unique words (unique / total)'
									}[dataType]}
								</small>
						</div>
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
							tickFormat: ep1Tick,
						}}
						linearScaleProps={{
							domain: dataType === 'density' ? [0, 100] : undefined,
						}}
						linearAxisProps={{
							className: style.linearAxis,
							tickFormat: d3.format('.2s')
						}}
						barStyle={barStyle}
					/>
				</div>
			</div>
		)
	}
}

import { connect } from 'react-redux'

export default connect(
	(state) => ({
		wordCount: state.wordCount
	}),
	null
)
(WordCount)
