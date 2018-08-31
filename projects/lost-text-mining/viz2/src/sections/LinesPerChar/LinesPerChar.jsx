import React from 'react'
import * as R from 'ramda'
import { format } from 'd3'

import HorizontalBarChart from 'components/HorizontalBarChart'
import ButtonGroup from 'components/ButtonGroup'
import Toggle from 'components/Toggle'
import Labels from 'components/Labels'
import EpisodeRangeSelector from 'components/EpisodeRangeSelector'
import { toTitleCase } from 'utils'

import style from './LinesPerChar.css'

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
        <div className={style.chart}>
          <EpisodeRangeSelector width={700} />
          <Labels
            y0Label="Characters"
            x1Label={
              { total: 'Number of lines', percentage: 'Percentage of lines' }[
                dataType
              ]
            }
          >
            <HorizontalBarChart
              data={data
                .map(d => ({
                  ...d,
                  value:
                    dataType === 'percentage' ? d.value / sum * 100 : d.value,
                }))
                .slice(0, 15)}
              width={500}
              height={20}
              padding={{
                top: 20,
                left: 75,
                right: 15,
                bottom: 10,
              }}
              bandAxisProps={{
                tickFormat: toTitleCase,
              }}
              linearAxisProps={{
                tickFormat: x =>
                  dataType === 'percentage' ? format('.2s')(x) : format(',')(x),
              }}
              linearScaleProps={{
                domain: dataType === 'percentage' ? [0, 50] : undefined,
              }}
            />
          </Labels>
        </div>
        <div className={style.buttons}>
          <ButtonGroup
            options={[
              { name: 'Total', value: 'total' },
              { name: 'Percentage', value: 'percentage' },
            ]}
            selected={dataType}
            onChange={v => this.setState({ dataType: v })}
          />
        </div>
      </React.Fragment>
    )
  }
}
