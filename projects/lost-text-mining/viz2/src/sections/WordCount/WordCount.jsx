import React from 'react'
import { format } from 'd3'
import classnames from 'classnames'

import { BarChart, ButtonGroup } from '../../components'
import { seasonColor } from '../../util'

import DataTypeButtons from './DataTypeButtons'
import Title from './Title'
import style from './WordCount.css'

export default class WordCount extends React.Component {
  state = {
    dataType: 'total',
  }

  componentWillMount() {
    this.props.getWordCount()
  }

  render() {
    const { dataType } = this.state

    const data = this.props.data.map(d => ({
      key: `${d.season}-${d.episode}`,
      value: d[dataType],
    }))

    return (
      <React.Fragment>
        <div className={style.center}>
          <ButtonGroup
            options={[
              { name: 'Total', value: 'total' },
              { name: 'Unique', value: 'uniq' },
              { name: 'Density', value: 'density' },
            ]}
            onChange={dataType => this.setState({ dataType })}
            selected={dataType}
          />
        </div>
        <div className={style.center}>
          <Title dataType={dataType} />
          <BarChart
            className={classnames(style.chart,{ [style.midLabels]: data.length < 25})}
            width={900}
            height={300}
            padding={{
              top: 5,
              left: 30,
              right: 0,
              bottom: 30,
            }}
            data={data}
            bandAxisProps={{
              className: style.bandAxis,
              tickSize: 0,
              tickFormat: key => {
                const [season, episode] = key.split('-')
                if (data.length < 25) {
                  return `S${season}-E${episode}`
                }
                if (episode !== '1') return
                return `Season ${season}`
              },
            }}
            linearScaleProps={{
              domain: dataType === 'density' ? [0, 100] : undefined,
            }}
            linearAxisProps={{
              className: style.linearAxis,
              tickFormat: format('.2s'),
            }}
            barStyle={({ key }) => ({
              fill: seasonColor(key.split('-')[0] - 1),
            })}
          />
        </div>
      </React.Fragment>
    )
  }
}
