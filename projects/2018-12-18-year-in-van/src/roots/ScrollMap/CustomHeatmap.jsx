import React from 'react'

import Waypoint from './Waypoint'

import css from './Waypoints.css'
import inputcss from '../../components/Input.css'

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
  state = {
    active: false,
  }

  render() {
    const { active } = this.state
    const { setCustom, setHeatmaps, setCustomKeys, customKeys } = this.props

    return (
      <div
        className={css.step}
        style={{
          pointerEvents: 'all',
          opacity: active ? 1 : 0.2,
          marginBottom: '45vh',
        }}
        id="custom-heatmap"
      >
        <Waypoint
          onEnter={() => {
            setCustom(true)
            // setHeatmaps([])
            this.setState({ active: true })
          }}
          onLeave={({ currentPosition, previousPosition }) => {
            if (previousPosition === 'inside' && currentPosition === 'below') {
              setCustom(false)
            }
            this.setState({ active: false })
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
        {customKeys.length > 0 && (
          <p style={{ marginTop: '1rem' }}>
            You can use the following URL to share this custom heatmap.
            <input
              value={encodeURI(
                window.location.href.replace(window.location.hash, '') +
                  '#list=' +
                  customKeys.join(','),
              )}
              readOnly
              onClick={e => e.target.select()}
              className={inputcss.input}
            />
          </p>
        )}
      </div>
    )
  }
}

export default CustomHeatmap
