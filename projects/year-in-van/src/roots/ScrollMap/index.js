import React, { PureComponent } from 'react'

import Mapbox from './Mapbox'
import Waypoints from './Waypoints'
import Legend from './Legend'

import cloneDeep from 'lodash/cloneDeep'

class MainApp extends PureComponent {
  state = {
    heatmaps: [],
    focus: null,
  }

  render() {
    const { heatmaps, focus } = this.state

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: '0',
          }}
        >
          <div style={{ position: 'relative' }}>
            <Legend
              keys={heatmaps}
              onClick={f => {
                this.setState({ focus: f === focus ? null : f })
              }}
              focus={focus}
            />
            <Mapbox heatmaps={heatmaps} focus={focus} />
          </div>
        </div>
        <div
          style={{
            zIndex: 2,
            alignSelf: 'flex-start',
            pointerEvents: 'none',
          }}
        >
          <Waypoints
            setHeatmaps={hm => {
              this.setState({ heatmaps: hm })
            }}
            setFocus={f => this.setState({ focus: f })}
          />
        </div>
      </div>
    )
  }
}

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(hot(module))(MainApp)
