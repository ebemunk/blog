import React from 'react'

export function Tags(props) {
  const { tags, selected, toggleTag, toggleAll, toggleNone } = props

  return (
    <div>
      <div>
        <a onClick={() => toggleAll(tags)}>All</a>
        <a onClick={() => toggleNone()}>None</a>
      </div>
      <div>
        {tags.map(tag => (
          <div key={tag}>
            <label>
              <input
                type="checkbox"
                onClick={() => toggleTag(tag)}
                checked={selected.includes(tag)}
              />
              {tag}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

import { connect } from 'react-redux'
import { toggleTag, toggleAll, toggleNone } from '../actions'

export default connect(
  state => ({
    tags: state.tags,
    selected: state.selectedTags,
  }),
  {
    toggleTag,
    toggleAll,
    toggleNone,
  },
)(Tags)
