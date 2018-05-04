import React from 'react'

import Overlay from './Overlay'
import SearchInput from './SearchInput'
import Listt from './Listt'

import style from './List.css'

export default function List(props) {
  const { events, searchString, search } = props

  return (
    <Overlay
      name="list"
      style={{ width: '25rem', right: '0' }}
      className={style.wrap}
    >
      <div className={style.input}>
        <SearchInput />
      </div>
      <div>
        <Listt />
      </div>
    </Overlay>
  )
}
