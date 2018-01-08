import React from 'react'

import labels from './labels'

import style from './Facet.css'

export default function Facet(props) {
  const { trait_id, height, width, color } = props

  const { low, high, label } = labels[trait_id]

  return (
    <React.Fragment>
      {low && (
        <text dx={-5} dy={height / 2} className={style.low} children={low} />
      )}
      {high && (
        <text
          x={width}
          dx={5}
          dy={height / 2}
          className={style.high}
          children={high}
        />
      )}
      <rect width={width} height={height} className={style.rect} fill={color} />
      <text
        x={width / 2}
        dy={height / 2}
        className={style.label}
        children={label.toUpperCase()}
      />
    </React.Fragment>
  )
}
