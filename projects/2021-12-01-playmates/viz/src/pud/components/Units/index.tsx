import clsx from 'clsx'
import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { Store } from '../../../store'

const useStyles = createUseStyles({
  button: {
    border: '1px solid #7cb34b',
    color: 'white',
    padding: '0.25rem',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  active: {
    background: '#7cb34b',
  },
})

const Units = () => {
  const unit = Store.useState(s => s.units)
  const isMetric = unit === 'metric'

  useEffect(() => {
    window.localStorage.setItem('beholder_units', unit)
  }, [unit])

  const classes = useStyles()

  return (
    <p>
      Show units in{' '}
      <button
        className={clsx(classes.button, {
          [classes.active]: !isMetric,
        })}
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
        className={clsx(classes.button, {
          [classes.active]: isMetric,
        })}
        onClick={() =>
          Store.update(s => {
            s.units = 'metric'
          })
        }
      >
        Metric (centimetres, kilograms)
      </button>
      .
    </p>
  )
}

export default Units
