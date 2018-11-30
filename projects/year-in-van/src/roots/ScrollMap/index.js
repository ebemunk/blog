import React, { PureComponent } from 'react'

import Mapbox from './Mapbox'
import Waypoints from './Waypoints'
import Legend from './Legend'
import Bars from './Bars'

const getFocusKey = heatmaps => heatmaps.map(hm => hm.label).join(',')

class MainApp extends PureComponent {
  state = {
    heatmaps: [],
    focus: {},
  }

  render() {
    const { heatmaps, focus } = this.state
    const focusKey = getFocusKey(heatmaps)

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
                this.setState(state => ({
                  focus: {
                    ...state.focus,
                    [focusKey]: f === state.focus[focusKey] ? null : f,
                  },
                }))
              }}
              focus={focus[focusKey]}
            />
            <Mapbox heatmaps={heatmaps} focus={focus[focusKey]} />
            {heatmaps.length > 1 && <Bars heatmaps={heatmaps} />}
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
