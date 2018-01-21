import React from 'react'
import classnames from 'classnames'

export default function DataTypeButtons({ dataType, onChange }) {
  return (
    <React.Fragment>
      <button
        onClick={() => onChange('total')}
        className={classnames({ active: dataType === 'total' })}
        children="Total"
      />
      <button
        onClick={() => onChange('uniq')}
        className={classnames({ active: dataType === 'uniq' })}
        children="Unique"
      />
      <button
        onClick={() => onChange('density')}
        className={classnames({ active: dataType === 'density' })}
        children="Density"
      />
    </React.Fragment>
  )
}
