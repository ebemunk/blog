import React from 'react'

import css from './Toggle.css'

const Toggle = ({ onChange, checked, label, ...props }) => (
  <label
    // class={css.switch}
    {...props}
  >
    <input type="checkbox" onChange={onChange} checked={checked} />
    {/* <span class={css.slider} /> */}
    {label}
  </label>
)

export default Toggle
