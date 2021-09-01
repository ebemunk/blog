import React, { useState, useEffect } from 'react'
import { Store } from '../store'

const Units = () => {
  const unit = Store.useState(s => s.units)

  useEffect(() => {
    window.localStorage.setItem('beholder_units', unit)
  }, [unit])

  return (
    <div>
      Show units in{' '}
      <button
        onClick={() =>
          Store.update(s => {
            s.units = 'imperial'
          })
        }
      >
        Imperial (feet, inches, pounds)
      </button>{' '}
      or{' '}
      <button
        onClick={() =>
          Store.update(s => {
            s.units = 'metric'
          })
        }
      >
        Metric (centimetres, kilograms)
      </button>
    </div>
  )
}

export default Units
