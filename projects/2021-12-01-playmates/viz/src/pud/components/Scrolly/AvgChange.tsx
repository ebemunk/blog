import { format } from 'd3'
import React from 'react'
import { TiArrowDownThick, TiArrowUpThick } from 'react-icons/ti'
import { Store } from '../../../store'
import loessData from '../../data/loess.json'
import { formatFeetIn } from '../../util'
import { transformUnits } from './LOESS'
import { Step } from './types'
import { STEP_UNITS } from './util'

const AvgChange = ({ step }: { step: Step }) => {
  const units = Store.useState(state => state.units)
  const ld = loessData.find(
    d =>
      d.key ===
      {
        [Step.Age]: 'mateAge',
        [Step.Height]: 'heightCM',
        [Step.Weight]: 'weightKG',
        [Step.Bust]: 'bustCM',
        [Step.Waist]: 'waistCM',
        [Step.Hips]: 'hipsCM',
      }[step],
  )

  const fitted = ld.loess.fitted.map(transformUnits(step, units))

  const first = fitted[0]
  const last = fitted[fitted.length - 1]

  const diff = last - first
  const pct = format('+.0%')(diff / first)
  const avgFormat = step === 'height' ? formatFeetIn : format('.1f')
  const unitfmt = step === 'height' ? ',' : ` ${STEP_UNITS[units][step]},`

  return (
    <div
      style={{
        maxWidth: '40rem',
        margin: '0 auto',
        marginBottom: '1rem',
      }}
    >
      {pct}
      {diff > 0 ? <TiArrowUpThick /> : <TiArrowDownThick />}
      <span
        style={{
          fontSize: '0.9rem',
          color: 'lightgray',
        }}
      >
        ({avgFormat(diff)}
        {unitfmt} 1954: {avgFormat(first)}
        {unitfmt} 2020: {avgFormat(last)}
        {unitfmt.replace(',', '')})
      </span>
    </div>
  )
}

export default AvgChange
