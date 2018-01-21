import React from 'react'
import classnames from 'classnames'
import * as R from 'ramda'

import { HorizontalBarChart, ButtonGroup } from '../../components'
import { toTitleCase } from '../../util'

export default class LinesPerChar extends React.Component {
  state = {
    dataType: 'total',
  }

  render() {
    const { data } = this.props
    const { dataType } = this.state

    const sum = R.sum(data.map(d => d.value))

    return (
      <React.Fragment>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonGroup
            options={[
              { name: 'Total', value: 'total' },
              { name: 'Percentage', value: 'percentage' },
            ]}
            selected={dataType}
            onChange={v => this.setState({ dataType: v })}
          />
        </div>
        <div
          style={{
            height: '400px',
            overflowY: 'scroll',
            width: '500px',
          }}
        >
          <HorizontalBarChart
            data={data.map(d => ({
              ...d,
              value: dataType === 'percentage' ? d.value / sum * 100 : d.value,
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
              tickFormat: toTitleCase,
            }}
            linearScaleProps={{
              domain: dataType === 'percentage' ? [0, 14] : undefined,
            }}
          />
        </div>
      </React.Fragment>
    )
  }
}
