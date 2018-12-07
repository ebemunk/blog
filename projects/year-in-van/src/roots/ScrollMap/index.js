import React, { PureComponent } from 'react'

import Mapbox from './Mapbox'
import Waypoints from './Waypoints'
import Legend from './Legend'
import Bars from './Bars'

import { filterByName } from '../../data/events'
import { colorScale } from './colors'

const getFocusKey = heatmaps => heatmaps.map(hm => hm.label).join(',')

const getCustomData = (names, scale) =>
  names.map(name => ({
    label: name,
    data: filterByName(name),
    color: scale(name),
  }))

class MainApp extends PureComponent {
  state = {
    heatmaps: [],
    focus: {},
    custom: false,
    customKeys: [],
  }

  componentDidMount() {
    const decoded = decodeURIComponent(window.location.hash)
    const shareableUrl = decoded.match(/list=([a-z, ]+)/)
    if (!shareableUrl || !shareableUrl[1]) return
    this.setState(
      { custom: true, customKeys: shareableUrl[1].split(',') },
      () => {
        setTimeout(() => {
          document.getElementById('custom-heatmap').scrollIntoView()
          window.scrollBy(0, -320)
        }, 500)
      },
    )
  }

  render() {
    const { heatmaps, focus, custom, customKeys } = this.state
    const focusKey = custom ? 'custom' : getFocusKey(heatmaps)
    const scale = colorScale()
    const hmz = custom ? getCustomData(customKeys, scale) : heatmaps

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
              keys={hmz}
              onClick={f => {
                this.setState(state => ({
                  focus: {
                    ...state.focus,
                    [focusKey]: f === state.focus[focusKey] ? null : f,
                  },
                }))
              }}
              focus={focus[focusKey]}
              addCustom={name => {
                if (customKeys.indexOf(name) > -1) return

                this.setState(state => ({
                  customKeys: [...state.customKeys, name],
                }))
              }}
              removeCustom={name => {
                this.setState(state => {
                  const i = state.customKeys.indexOf(name)
                  const arr = [...state.customKeys]
                  arr.splice(i, 1)
                  return {
                    customKeys: arr,
                  }
                })
              }}
              custom={custom}
            />
            <Mapbox heatmaps={hmz} focus={focus[focusKey]} />
            {hmz.length > 1 && <Bars heatmaps={hmz} />}
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
            setHeatmaps={hm => this.setState({ heatmaps: hm })}
            setFocus={f => this.setState({ focus: f })}
            setCustom={c => this.setState({ custom: c })}
            setCustomKeys={k => this.setState({ customKeys: k })}
            customKeys={customKeys}
          />
        </div>
      </div>
    )
  }
}

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(hot(module))(MainApp)
