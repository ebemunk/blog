import React from 'react'
import Select from 'react-select'
import '!style-loader!css-loader!react-select/dist/react-select.css'

import { groupColor, toTitleCase } from '../../util'

import style from './Selector.css'

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
        <div
          key={i}
          className={style.selector}
        >
          <div
            className={style.color}
            style={{
              backgroundColor: groupColor(i),
              borderColor: groupColor(i)
            }}
          />
          <Select
            options={options.map(opt => ({
              label: toTitleCase(opt),
              value: opt,
            }))}
            multi
            onChange={e => {
              selectProfiles(i, e)
            }}
            value={g}
            closeOnSelect={false}
            clearable={false}
          />
          <button
            onClick={() => removeProfileGroup(i)}
            disabled={personalitySelection.length === 1}
            >Remove</button>
        </div>
      ))}
      <div>
        <button
          disabled={! personalitySelection[personalitySelection.length - 1].length}
          onClick={addProfileGroup}
          children="Add Group"
        />
      </div>
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
