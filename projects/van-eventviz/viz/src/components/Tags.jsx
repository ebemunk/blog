import React from 'react'

import style from './Tags.css'

export function Tags(props) {
  const { tags, filters, toggleTag, toggleAll, toggleNone } = props

  return (
    <div>
      <div>
        <button onClick={() => toggleAll()} children="All" />
        <button onClick={() => toggleNone()} children="None" />
      </div>
      <div className={style.tags}>
        {tags.map(tag => (
          <div key={tag} className={style.tag}>
            <label className={style.label} title={tag}>
              <input
                type="checkbox"
                onClick={() => toggleTag(tag)}
                checked={filters.includes(tag)}
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
    tags: state.tags.all,
    filters: state.tags.filters,
  }),
  {
    toggleTag,
    toggleAll,
    toggleNone,
  },
)(Tags)
