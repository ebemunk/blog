import React from 'react'

import Overlay from './Overlay'
import SearchInput from './SearchInput'
import List from './List'

import style from './ListFilter.css'

export default function ListFilter() {
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
        <List />
      </div>
    </Overlay>
  )
}
