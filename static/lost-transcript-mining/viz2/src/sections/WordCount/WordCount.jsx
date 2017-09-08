import React from 'react'

import {
	BarChart
} from '../../components'

export default function WordCount(props) {
	const { data } = props
	return (
		<div>
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
			/>
		</div>
	)
}
