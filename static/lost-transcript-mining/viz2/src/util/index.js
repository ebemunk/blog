import * as d3 from 'd3'

export const seasonColor = d3.scaleOrdinal(d3.schemeCategory10)

export const SEASONS = [
	[0, 23],
	[24, 46],
	[47, 68],
	[69, 81],
	[82, 97],
	[98, 113]
]
