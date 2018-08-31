import React from 'react'
import { format } from 'd3'

import EpisodeRangeSelector from 'components/EpisodeRangeSelector'
import ButtonGroup from 'components/ButtonGroup'
import BarViz from 'viz/BarViz'

import css from './WordCount.css'

export default class WordCount extends React.Component {
  state = {
    dataType: 'total',
  }

  render() {
    const { dataType } = this.state

    const data = this.props.data.map(d => ({
      key: `${d.season}-${d.episode}`,
      value: d[dataType],
    }))

    return (
      <React.Fragment>
        <div className={css.responsive}>
          <EpisodeRangeSelector width={900} />
          <BarViz
            data={data}
            xLabel="Episodes"
            y0Label={
              {
                total: 'Number of words',
                uniq: 'Number of unique words',
                density: 'Percentage of unique words',
              }[dataType]
            }
            linearScaleProps={{
              domain: dataType === 'density' ? [0, 100] : undefined,
            }}
            linearAxisProps={{
              tickFormat: format('.2s'),
            }}
          />
        </div>
        <div className={css.buttons}>
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
      </React.Fragment>
    )
  }
}
