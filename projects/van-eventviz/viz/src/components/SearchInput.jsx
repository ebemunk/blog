import React from 'react'
import TextField from 'material-ui/TextField'

export function SearchInput(props) {
  console.log('SearchInput')
  const { value, search } = props

  return (
    <TextField
      label="Search events"
      type="search"
      margin="normal"
      fullWidth
      autoFocus
      onChange={({ target }) => search(target.value)}
      value={value}
    />
  )
}

import { connect } from 'react-redux'

import { search } from '../actions'

export default connect(
  state => ({
    value: state.search.string,
  }),
  {
    search,
  },
)(SearchInput)
