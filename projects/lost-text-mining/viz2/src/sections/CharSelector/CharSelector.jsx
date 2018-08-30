import React from 'react'
import Select from 'react-select'
import classnames from 'classnames'
import '!style-loader!css-loader!react-select/dist/react-select.css'

import { groupColor, toTitleCase } from 'utils'
// import Value from './Value'
import Option from './Option'

import css from './CharSelector.css'

export default function CharSelector(props) {
  const {
    charSelection,
    options,
    select,
    addGroup,
    removeGroup,
    personalities,
  } = props

  bindGlobal(select, removeGroup, charSelection)

  return (
    <div className={css.wrapper}>
      {charSelection.map((g, i) => (
        <div key={i} className={css.selector}>
          <div
            className={css.color}
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
              select(i, e.map(({ value }) => value))
            }}
            value={g}
            closeOnSelect={false}
            // valueComponent={Value}
            optionComponent={Option}
          />
          <div className={css.removeButton}>
            <button
              className="button"
              onClick={() => removeGroup(i)}
              disabled={charSelection.length === 1}
              children="×"
              title="Remove Group"
            />
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          onClick={addGroup}
          children="Add Group"
          className={classnames('button', css.addButton)}
        />
        <button
          onClick={() =>
            select(
              charSelection.length,
              personalities
                .filter(p => !charSelection[0].includes(p.char_name))
                .map(p => p.char_name),
            )
          }
          children="Add Everyone Else as Group"
          className={classnames('button', css.addButton)}
          disabled={charSelection.length !== 1 || !charSelection[0].length}
        />
      </div>
    </div>
  )
}

function bindGlobal(select, removeGroup, charSelection) {
  function removeAll() {
    for (let i = 0; i < charSelection.length; i++) removeGroup(i)
  }

  window.charSelect_sunjin = e => {
    e.preventDefault()
    removeAll()
    select(0, ['SUN'])
    select(1, ['JIN'])
  }
  window.charSelect_everyone = e => {
    e.preventDefault()
    removeAll()
    select(0, [
      'ANA LUCIA',
      'BEN',
      'BERNARD',
      'BOONE',
      'CHARLIE',
      'CLAIRE',
      'DESMOND',
      'EKO',
      'FARADAY',
      'HURLEY',
      'JACK',
      'JIN',
      'JULIET',
      'KATE',
      'LOCKE',
      'MICHAEL',
      'MILES',
      'RICHARD',
      'ROSE',
      'SAWYER',
      'SAYID',
      'SHANNON',
      'SUN',
      'WALT',
      'WIDMORE',
    ])
  }
  window.charSelect_menWomen = e => {
    e.preventDefault()
    removeAll()
    select(0, [
      'ANA LUCIA',
      'CLAIRE',
      'JULIET',
      'KATE',
      'ROSE',
      'SHANNON',
      'SUN',
    ])
    select(1, [
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
  }
}
