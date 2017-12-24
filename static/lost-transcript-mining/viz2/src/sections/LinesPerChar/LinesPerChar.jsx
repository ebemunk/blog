import React from 'react'
import classnames from 'classnames'
import * as R from 'ramda'

import { HorizontalBarChart } from '../../components'

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export default class LinesPerChar extends React.Component {
	state = {
		dataType: 'total'
  }

  render() {
    const { data } = this.props
    const { dataType } = this.state

    const sum = R.sum(data.map(d => d.value))

    return (
      <React.Fragment>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button
						onClick={() => this.setState({ dataType: 'total' })}
						className={classnames({ active: dataType === 'total' })}
						children="Total"
					/>
					<button
						onClick={() => this.setState({ dataType: 'percentage' })}
						className={classnames({ active: dataType === 'percentage' })}
						children="Percentage"
					/>
				</div>
        <div style={{
          maxHeight: '600px',
          overflowY: 'scroll',
          width: '500px'
        }}>
          <HorizontalBarChart
            data={data.map(d => ({
              ...d,
              value: dataType === 'percentage' ? d.value/sum*100 : d.value
            }))}
            width={500}
            height={25}
            padding={{
              top: 20,
              left: 50,
              right: 10,
              bottom: 10,
            }}
            bandAxisProps={{
              tickFormat: toTitleCase
            }}
						linearScaleProps={{
							domain: dataType === 'percentage' ? [0, 100] : undefined,
						}}
          />
        </div>
      </React.Fragment>
    )
  }
}
