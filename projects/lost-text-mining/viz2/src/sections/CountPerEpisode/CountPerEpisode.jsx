import React from 'react'

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
        <div className={css.center}>
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
        <BarViz
          data={data}
          xLabel="Episodes"
          y0Label={
            {
              num_chars: 'Number of Characters',
              num_stagedirections: 'Number of Stage Directions',
              num_scenes: 'Number of Scenes',
            }[dataType]
          }
        />
      </React.Fragment>
    )
  }
}
