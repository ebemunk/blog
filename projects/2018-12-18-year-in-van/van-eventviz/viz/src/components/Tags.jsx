import React from 'react'
import Button from 'material-ui/Button'

import * as pins from '../img'

import style from './Tags.css'

export function Tags(props) {
  const { tags, filters, toggleTag, toggleAll, toggleNone } = props

  return (
    <div>
      <div className={style.buttons}>
        <Button mini onClick={() => toggleAll()} children="All" />
        <Button mini onClick={() => toggleNone()} children="None" />
      </div>
      <div className={style.tags}>
        {tags.map(tag => (
          <div key={tag} className={style.tag}>
            <label className={style.label} title={tag}>
              <div>
                <input
                  type="checkbox"
                  onChange={() => toggleTag(tag)}
                  checked={filters.includes(tag)}
                />
                <img
                  className={style.img}
                  src={
                    pins[
                      tag
                        .replace('/', '')
                        .replace("'", '')
                        .replace(/\s+/g, '')
                        .replace('&', '')
                    ]
                  }
                />
                {tag}
              </div>
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
