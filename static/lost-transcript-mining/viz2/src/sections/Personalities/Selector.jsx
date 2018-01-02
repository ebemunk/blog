import React from 'react'
import Select from 'react-select'
import '!style-loader!css-loader!react-select/dist/react-select.css'

import { groupColor } from '../../util'

export function Selector(props) {
  const {
    personalitySelection,
    options,
    selectProfiles,
    addProfileGroup,
    removeProfileGroup
  } = props

  return (
    <div style={{ display: 'flex' }}>
      {personalitySelection.map((g, i) => (
        <div key={i} style={{
          width: '200px',
          padding: '1em'
        }}>
          <div
            style={{
              width: '1em',
              height: '1em',
              backgroundColor: groupColor(i)
            }}
          />
          <Select
            options={options.map(o => ({
              label: o,
              value: o,
            }))}
            multi
            clearable={false}
            onChange={e => {
              selectProfiles(i, e)
            }}
            value={g}
          />
          <button onClick={() => removeProfileGroup(i)}>Remove</button>
        </div>
      ))}
      <button onClick={addProfileGroup}>Add Group</button>
    </div>
  )
}

import { connect } from 'react-redux'

import { selectProfiles, addProfileGroup, removeProfileGroup } from '../../actions'

export default connect(
  state => ({
    personalitySelection: state.personalitySelection,
    options: state.personalities.map(p => p.char_name).sort()
  }),
  {
    selectProfiles,
    addProfileGroup,
    removeProfileGroup
  }
)(Selector)
