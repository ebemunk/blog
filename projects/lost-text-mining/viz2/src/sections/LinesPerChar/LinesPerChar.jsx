import React from 'react'
import classnames from 'classnames'
import * as R from 'ramda'

import { HorizontalBarChart, ButtonGroup, Toggle } from '../../components'
import { toTitleCase } from 'utils'

import style from './LinesPerChar.css'

export default class LinesPerChar extends React.Component {
  state = {
    dataType: 'total',
    showAll: false,
  }

  render() {
    const { data } = this.props
    const { dataType, showAll } = this.state

    const sum = R.sum(data.map(d => d.value))

    return (
      <React.Fragment>
        <div className={style.wrap}>
          <ButtonGroup
            options={[
              { name: 'Total', value: 'total' },
              { name: 'Percentage', value: 'percentage' },
            ]}
            selected={dataType}
            onChange={v => this.setState({ dataType: v })}
          />
          <Toggle
            children={'Show All'}
            onClick={() => this.setState({ showAll: !showAll })}
            className={style.all}
            on={showAll}
          />
        </div>
        <div className={style.chart}>
          <HorizontalBarChart
            data={data
              .map(d => ({
                ...d,
                value:
                  dataType === 'percentage' ? d.value / sum * 100 : d.value,
              }))
              .slice(0, showAll ? -1 : 15)}
            width={500}
            height={25}
            padding={{
              top: 20,
              left: 55,
              right: 10,
              bottom: 10,
            }}
            bandAxisProps={{
              tickFormat: toTitleCase,
            }}
            linearScaleProps={{
              domain: dataType === 'percentage' ? [0, 50] : undefined,
            }}
          />
        </div>
      </React.Fragment>
    )
  }
}
