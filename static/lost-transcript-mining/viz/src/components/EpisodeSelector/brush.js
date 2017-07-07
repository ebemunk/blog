import * as d3 from 'd3'
import _ from 'lodash'
import R from 'ramda'

export function onBrush() {
	const {
		x,
		seasonEpisodes,
		$style,
		selectEpisodes
	} = this

	if( ! d3.event.sourceEvent ) return
	if( d3.event.sourceEvent.type === 'brush' ) return

	const d0 = d3.event.selection.map(x.invert)
	const d1 = d0.map(d3.timeDay.round)

	if( d1[0] >= d1[1] ) {
		d1[0] = d3.timeDay.floor(d0[0])
		d1[1] = d3.timeDay.offset(d1[0])
	}

	const selected = d1
	.map(d => d.getTime())
	.map(d => {
		const episode = seasonEpisodes.find(ep => ep.date === d)
		return _.get(episode, 'i')
	})

	if( selected[0] === 0 && selected[1] === undefined ) {
		selectEpisodes([undefined, undefined])
		d3.select(`.${$style.brush}`).call(d3.event.target.move, null)
	} else {
		selectEpisodes(selected)
		d3.select(`.${$style.brush}`).call(d3.event.target.move, d1.map(x))
	}
}

export function onBrushEnd() {
	const {
		selectEpisodes,
	} = this

	if( ! d3.event.sourceEvent ) return
	if( ! d3.event.selection ) {
		selectEpisodes([undefined, undefined])
	}
}
