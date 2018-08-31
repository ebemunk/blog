import React from 'react'

import EpisodeRangeSelector from 'components/EpisodeRangeSelector'
import ButtonGroup from 'components/ButtonGroup'
import BarViz from 'viz/BarViz'

import css from './CountPerEpisode.css'

export default class CountPerEpisode extends React.Component {
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
        <div className={css.responsive}>
          <EpisodeRangeSelector width={900} />
          <BarViz
            data={data}
            xLabel="Episodes"
            y0Label={
              {
                num_chars: 'Number of characters',
                num_stagedirections: 'Number of stage directions',
                num_scenes: 'Number of scenes',
              }[dataType]
            }
          />
        </div>
        <div className={css.buttons}>
          <ButtonGroup
            options={[
              { name: 'Characters', value: 'num_chars' },
              { name: 'Stage Directions', value: 'num_stagedirections' },
              { name: 'Scenes', value: 'num_scenes' },
            ]}
            onChange={dataType => this.setState({ dataType })}
            selected={dataType}
          />
        </div>
      </React.Fragment>
    )
  }
}
