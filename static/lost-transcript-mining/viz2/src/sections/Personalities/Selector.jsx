import React from 'react'
import Select from 'react-select'
import '!style-loader!css-loader!react-select/dist/react-select.css'

export function Selector(props) {
  const {
    personalitySelection,
    options,
    selectProfiles,
    addProfileGroup,
    removeProfileGroup
  } = props

  return (
    <React.Fragment>
      {personalitySelection.map((g, i) => (
        <div>
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
    </React.Fragment>
  )
}

import { connect } from 'react-redux'

import { selectProfiles, addProfileGroup, removeProfileGroup } from '../../actions'

export default connect(
  state => ({
    personalitySelection: state.personalitySelection,
    options: state.personalities.map(p => p.char_name)
  }),
  {
    selectProfiles,
    addProfileGroup,
    removeProfileGroup
  }
)(Selector)
