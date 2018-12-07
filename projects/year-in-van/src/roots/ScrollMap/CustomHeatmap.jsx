import React from 'react'

import { dateScale, byDate } from '../../data/events'
import Waypoint from './Waypoint'
import { colors4 } from './colors'

import css from './Waypoints.css'

const CustomPresetLink = ({ array, setCustomKeys }) => (
  <a
    href=""
    onClick={e => {
      e.preventDefault()
      e.stopPropagation()
      setCustomKeys(array)
    }}
  >
    {array.join(', ')}
  </a>
)

class CustomHeatmap extends React.Component {
  state = {}

  render() {
    const {} = this.state
    const { setCustom, setHeatmaps, setCustomKeys, customKeys } = this.props

    return (
      <div
        className={css.step}
        style={{ pointerEvents: 'all' }}
        id="custom-heatmap"
      >
        <Waypoint
          onEnter={() => {
            setCustom(true)
            // setHeatmaps([])
          }}
          onLeave={({ currentPosition, previousPosition }) => {
            if (previousPosition === 'inside' && currentPosition === 'below') {
              setCustom(false)
            }
          }}
        />
        <h4>Now it's your turn</h4>
        <p>
          Explore events by name, add and remove as you want. Try:{' '}
          <CustomPresetLink
            array={['ubc', 'sfu']}
            setCustomKeys={setCustomKeys}
          />
          , or{' '}
          <CustomPresetLink
            array={['duo', 'trio', 'quartet']}
            setCustomKeys={setCustomKeys}
          />
          , or{' '}
          <CustomPresetLink
            array={['theatre', 'cinema']}
            setCustomKeys={setCustomKeys}
          />
          .
        </p>
        <p style={{ marginTop: '1rem' }}>
          You can use the following URL to share this custom heatmap.
          <input
            value={encodeURI(
              window.location.href.replace(window.location.hash, '') +
                '#list=' +
                customKeys.join(','),
            )}
            readOnly
            style={{}}
            onClick={e => e.target.select()}
          />
        </p>
      </div>
    )
  }
}

export default CustomHeatmap
