import React from 'react'

import css from './Toggle.css'

const Toggle = ({ onChange, checked, label }) => (
  <label
  // class={css.switch}
  >
    <input type="checkbox" onChange={onChange} checked={checked} />
    {/* <span class={css.slider} /> */}
    {label}
  </label>
)

export default Toggle
