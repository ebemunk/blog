import React from 'react'
import { format } from 'd3'
import classnames from 'classnames'

import BarChart from 'components/BarChart'
import ButtonGroup from 'components/ButtonGroup'
import { seasonColor } from 'utils'

// import Title from './Title'
import css from './Chart.css'

export default class CharPerEpisode extends React.Component {
  state = {
    dataType: 'num_chars',
  }

  render() {
    const { dataType } = this.state

    const data = this.props.data.map(d => ({
      key: `${d.season}-${d.episode}`,
      value: +d[dataType],
    }))

    return (
      <React.Fragment>
        <div className={css.center}>
          <ButtonGroup
            options={[
              { name: 'Characters', value: 'num_chars' },
              { name: 'Acts', value: 'num_acts' },
              { name: 'Scenes', value: 'num_scenes' },
            ]}
            onChange={dataType => this.setState({ dataType })}
            selected={dataType}
          />
        </div>
        <div className={css.center}>
          {/* <Title dataType={dataType} /> */}
          <BarChart
            className={classnames(css.chart, {
              [css.midLabels]: data.length < 25,
            })}
            width={900}
            height={300}
            padding={{
              top: 5,
              left: 30,
              right: 15,
              bottom: 30,
            }}
            data={data}
            interactive
            bandAxisProps={{
              className: css.bandAxis,
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
              className: css.linearAxis,
              tickFormat: x => x,
            }}
            barStyle={({ key }) => ({
              fill: seasonColor(key.split('-')[0] - 1),
            })}
            interactionProps={{
              xTickFormat: key => {
                const [season, episode] = key.split('-')
                return `S${season}-E${episode}`
              },
            }}
          />
        </div>
      </React.Fragment>
    )
  }
}
