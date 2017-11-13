import React, { Component } from 'react'

import WordCount from './WordCount'

export class Co extends Component {
	state = {
		dataType: 'words'
	}

	setDataType = val => this.setState({
		dataType: val
	})

	render() {
		const { dataType } = this.state
		const { episodeLengths } = this.props

		const data = episodeLengths
		.map(d => ({
			key: `${d.season}-${d.episode}`,
			value: d[dataType]
		}))

		return (
			<div>
				<div>
					<button onClick={() => this.setDataType('words')}>Words</button>
					<button onClick={() => this.setDataType('chars')}>Unique Words</button>
					<button>Unique Word Density</button>
				</div>
				<div>
					<WordCount data={data} />
				</div>
			</div>
		)
	}
}

import { connect } from 'react-redux'

export default connect(
	(state) => ({
		episodeLengths: state.episodeLengths
	}),
	null
)
(Co)
