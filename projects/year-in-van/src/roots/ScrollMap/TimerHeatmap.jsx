import React from 'react'
import { format } from 'date-fns'

import { dateScale, byDate } from '../../data/events'
import Waypoint from './Waypoint'
import { colors4 } from './colors'

import css from './Waypoints.css'
import ButtonGroup from '../../components/ButtonGroup'

class TimerHeatmap extends React.Component {
  state = {
    interval: null,
    progress: 0,
    timeout: 150,
  }

  setup = () => {
    const { interval, timeout } = this.state
    if (interval) clearInterval(interval)

    this.setState({
      interval: setInterval(() => {
        this.setState(
          state => ({
            progress: state.progress >= 99 ? 0 : state.progress + 1,
          }),
          () => {
            this.props.setHeatmaps([
              {
                data: byDate[Math.floor(this.state.progress)],
                color: colors4[3],
                label: 'live',
              },
            ])
          },
        )
      }, timeout),
    })
  }

  render() {
    const { interval, progress, timeout } = this.state
    const [start, end] = dateScale.invertExtent(Math.floor(progress))

    return (
      <div className={css.step}>
        <Waypoint
          onEnter={this.setup}
          onLeave={() => {
            if (interval) clearInterval(interval)
            this.setState({ interval: null })
          }}
        />
        <h4>A Year of Events</h4>
        <p>
          Mapping out all events by start date. Scroll down to go through 2018
          slowly.
        </p>
        <p>
          Showing events that started between:
          <br />
          <em>
            {format(start, 'MMM Do')}-{format(end, 'Do')}
          </em>
        </p>
        {/* <p style={{ display: 'inline-block', marginRight: '1rem' }}>Speed:</p>
        <ButtonGroup
          options={[
            { name: 'Slow', value: 450 },
            { name: 'Normal', value: 300 },
            { name: 'Fast', value: 150 },
          ]}
          onChange={val => {
            this.setState(
              {
                timeout: val,
              },
              () => {
                this.setup()
              },
            )
          }}
          selected={timeout}
          style={{ display: 'inline-block', pointerEvents: 'all' }}
        /> */}
      </div>
    )
  }
}

export default TimerHeatmap
