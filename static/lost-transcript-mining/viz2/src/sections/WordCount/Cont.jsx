import React, { Component } from 'react'

import WordCount from './WordCount'

export class Co extends Component {
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
				<div>
					<button onClick={() => this.setDataType('total')}>Total</button>
					<button onClick={() => this.setDataType('uniq')}>Unique</button>
					<button onClick={() => this.setDataType('density')}>Density</button>
				</div>
				<div>
					<WordCount
						data={data}
						linearScale={{
							domain: dataType === 'density' ? [0, 100] : {},
						}}
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
(Co)
