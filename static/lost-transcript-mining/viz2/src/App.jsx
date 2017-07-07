import React from 'react'

import Container from './containers'
import { EpisodeRangeSelector } from './components'

export function App(props) {
	return (
		<div>
			<h1>haiv</h1>
			<EpisodeRangeSelector
			/>
			<div>
			</div>
		</div>
	)
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

