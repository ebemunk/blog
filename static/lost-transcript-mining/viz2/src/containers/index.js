import React from 'react'
import { connect } from 'react-redux'

import { getEpisodes } from '../actions'

function faf(props) {
	console.log('prap', props);
	return (
		<div>fsvdvd
			<button onClick={() => props.getEpisodes()}>do</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		hi: state.episodes
	}
}

const mapDispatchToProps = {
	getEpisodes
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(faf)
