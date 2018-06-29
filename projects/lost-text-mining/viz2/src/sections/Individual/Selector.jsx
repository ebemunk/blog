import React from 'react'
import Select from 'react-select'

import { toTitleCase } from 'utils'
import Option from 'sections/CharSelector/Option'

const Selector = ({ options, value, onChange, ...otherProps }) => (
  <Select
    options={options.map(opt => ({
      label: toTitleCase(opt),
      value: opt,
    }))}
    onChange={onChange}
    value={value}
    optionComponent={Option}
    clearable={false}
    {...otherProps}
  />
)

import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  connect(state => ({
    options: state.personalities.map(p => p.char_name).sort(),
  })),
)(Selector)
