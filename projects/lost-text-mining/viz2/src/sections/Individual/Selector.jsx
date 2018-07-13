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

import * as R from 'ramda'
const sortByNameCaseInsensitive = R.sortBy(
  R.compose(R.toLower, R.prop('char_name')),
)

export default compose(
  hot(module),
  connect(state => ({
    options: sortByNameCaseInsensitive(state.personalities).map(
      p => p.char_name,
    ),
    // .sort(),
  })),
)(Selector)
