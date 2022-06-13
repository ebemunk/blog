import React from 'react'
import { useIsMetric } from '../../../store'
import { Breasts, Ethnicity, Hair, Playmate } from '../../data/data'
import { cm2in, formatFeetIn, kg2lb } from '../../util'
import { MONTHS_FULL } from '../Scrolly/util'
import TooltipHistogram from './TooltipHistogram'

export default function PlaymateTooltip({
  data,
  pinned,
}: {
  data: Playmate
  pinned: boolean
}) {
  const isMetric = useIsMetric

  const hide = [
    'Diane Hunter',
    'Elizabeth Ann Roberts',
    'Nancy Crawford',
    'Teddi Smith',
    'Donna Michelle',
    'Patti Reynolds',
    'Gina Goldberg',
  ].includes(data.name)

  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.75)',
        padding: '0.25rem',
        borderRadius: '5px',
        maxWidth: '14rem',
        maxHeight: '70vh',
        overflowY: 'auto',
      }}
      data-playmatetooltip
    >
      <div
        style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          fontWeight: 600,
        }}
      >
        {hide ? 'N/A' : data.name}
      </div>
      <div
        style={{
          fontSize: '0.9rem',
          textAlign: 'center',
        }}
      >
        {MONTHS_FULL[data.month]} {data.year}
      </div>
      {data.first && (
        <div
          style={{
            fontSize: '0.8rem',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          {data.first}
        </div>
      )}
      {!pinned && (
        <div
          style={{
            fontSize: '0.7rem',
            textAlign: 'center',
          }}
        >
          click for more info
        </div>
      )}

      {pinned && (
        <>
          <div
            style={{
              fontSize: '0.7rem',
              textAlign: 'center',
            }}
          >
            click elsewhere to close
          </div>
          <div
            style={{
              padding: '0.25rem',
              fontSize: '0.9rem',
            }}
          >
            <Info label="Age" value={data.mateAge} />

            <Info label="Ethnicity" value={Ethnicity[data.ethnicity]} />
            <Info label="Hair" value={Hair[data.hair]} />
            <Info label="Breasts" value={Breasts[data.breasts]} />

            <Info
              label="Height"
              value={
                isMetric ? data.heightCM : formatFeetIn(cm2in(data.heightCM))
              }
              units={isMetric ? 'cm' : ''}
            />
            <TooltipHistogram pm={data} hkey="heightCM" />
            <Info
              label="Weight"
              value={isMetric ? data.weightKG : kg2lb(data.weightKG).toFixed(0)}
              units={isMetric ? 'kg' : 'lb'}
            />
            <TooltipHistogram pm={data} hkey="weightKG" />

            <Info
              label="Bust"
              value={isMetric ? data.bustCM : cm2in(data.bustCM).toFixed(0)}
              units={isMetric ? 'cm' : 'in'}
            />
            <TooltipHistogram pm={data} hkey="bustCM" />
            <Info
              label="Waist"
              value={isMetric ? data.waistCM : cm2in(data.waistCM).toFixed(0)}
              units={isMetric ? 'cm' : 'in'}
            />
            <TooltipHistogram pm={data} hkey="waistCM" />
            <Info
              label="Hips"
              value={isMetric ? data.hipsCM : cm2in(data.hipsCM).toFixed(0)}
              units={isMetric ? 'cm' : 'in'}
            />
            <TooltipHistogram pm={data} hkey="hipsCM" />
          </div>
        </>
      )}
    </div>
  )
}

function Info({
  label,
  value,
  units = '',
}: {
  label: string
  value: string | number
  units?: string
}) {
  return (
    <div>
      <strong>{label}: </strong>
      <span>
        {value} {units}
      </span>
    </div>
  )
}
