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
    removeProfileGroup,
  } = props

  return (
    <div className={style.wrapper}>
      {personalitySelection.map((g, i) => (
        <div key={i} className={style.selector}>
          <div
            className={style.color}
            style={{
              backgroundColor: groupColor(i),
              borderColor: groupColor(i),
            }}
          />
          <Select
            options={options.map(opt => ({
              label: toTitleCase(opt),
              value: opt,
            }))}
            multi
            onChange={e => {
              selectProfiles(i, e.map(({ value }) => value))
            }}
            value={g}
            closeOnSelect={false}
          />
          <div className={style.removeButton}>
            <button
              onClick={() => removeProfileGroup(i)}
              disabled={personalitySelection.length === 1}
              children="×"
              title="Remove Group"
            />
          </div>
        </div>
      ))}
      <div>
        <button
          onClick={addProfileGroup}
          children="Add Group"
        />
        {/* <button
          onClick={() => {
            selectProfiles(0, [
              'ANA LUCIA',
              'CLAIRE',
              'JULIET',
              'KATE',
              'ROSE',
              'SHANNON',
              'SUN',
            ])
            selectProfiles(1, [
              'BEN',
              'BERNARD',
              'BOONE',
              'CHARLIE',
              'DESMOND',
              'EKO',
              'FARADAY',
              'HURLEY',
              'JACK',
              'JIN',
              'LOCKE',
              'MICHAEL',
              'MILES',
              'RICHARD',
              'SAWYER',
              'SAYID',
              'WALT',
              'WIDMORE',
            ])
          }}
          children="men vs women"
        /> */}
      </div>
    </div>
  )
}

import { connect } from 'react-redux'

import {
  selectProfiles,
  addProfileGroup,
  removeProfileGroup,
} from '../../actions'

export default connect(
  state => ({
    personalitySelection: state.personalitySelection,
    options: state.personalities.map(p => p.char_name).sort(),
  }),
  {
    selectProfiles,
    addProfileGroup,
    removeProfileGroup,
  },
)(Selector)
