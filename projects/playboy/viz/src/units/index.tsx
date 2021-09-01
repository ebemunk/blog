import React, { useState, useEffect } from 'react'

const Units = () => {
  const [unit, setUnit] = useState('metric')

  useEffect(() => {
    window.localStorage.setItem('beholder_units', unit)
  }, [unit])

  return (
    <div>
      Show units in{' '}
      <button onClick={() => setUnit('imperial')}>
        Imperial (feet, inches, pounds)
      </button>{' '}
      or{' '}
      <button onClick={() => setUnit('metric')}>
        Metric (centimetres, kilograms)
      </button>
    </div>
  )
}

export default Units
