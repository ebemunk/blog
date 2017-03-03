<template>
	<div>
		<button @click="dataplz">Hit me!</button>
		<!-- <BarChart :data="charLines" :height="750" :width="400"> -->
		<EpisodeSelector />
	</div>
</template>

<script>
import _ from 'lodash'

import {
	BarChart,
	EpisodeSelector,
} from './components'

import dataJson from './data.json'

export default {
	name: 'app',
	components: {
		// BarChart
		EpisodeSelector
	},
	data: () => {
		return {
			charLines: dataJson.total_lines
		}
	},
	methods: {
		dataplz() {
		}
	}
}
</script>
