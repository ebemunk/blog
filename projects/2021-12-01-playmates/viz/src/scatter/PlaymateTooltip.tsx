import { format } from 'd3'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Store } from '../store'
import { Playmate } from '../types'
import { MONTHS_FULL } from '../util'
import PlaymateHist from './PlaymateHist'
import { formatFeetIn, STAGES, STAGE_UNITS } from './util'

import Google from './google.png'
import Mypmates from './mypmates.png'
import Babepedia from './babepedia.png'

const useStyles = createUseStyles({
  click: {
    fontSize: '0.7rem',
    color: 'gray',
    textAlign: 'center',
  },
  first: {
    fontSize: '0.8rem',
    color: 'lightgray',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  img: {
    width: '24px',
    height: '24px',
  },
})

const formatVal = format('.0f')

const PlaymateTooltip = ({
  data,
  pinned,
}: {
  data: Playmate
  pinned: boolean
}) => {
  const classes = useStyles()
  const units = Store.useState(s => s.units)
  const isMetric = units === 'metric'

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
      {data.first && <div className={classes.first}>{data.first}</div>}
      {!pinned && <div className={classes.click}>click for more info</div>}
      {pinned && (
        <>
          <div className={classes.click}>click elswhere to close</div>
          <div
            style={{
              padding: '0.25rem',
              fontSize: '0.9rem',
            }}
          >
            <IfExists label="Age" value={data.mateAge} />
            <IfExists
              label="Birthplace"
              value={[data.town, data.state, data.country]
                .filter(Boolean)
                .join(', ')}
            />
            <IfExists
              label="Ethnicity"
              value={data.ethnicity.replace('Latin', 'Latino')}
            />
            <IfExists label="Hair" value={data.hair} />
            <IfExists
              label="Breasts"
              value={data.breasts
                ?.replace('Real/Natural', 'Natural')
                ?.replace('Fake/Enhanced', 'Enhanced')}
            />
            <IfExists label="Cup" value={data.cup} />
            <IfExists
              label="Height"
              value={isMetric ? data.heightCM : formatFeetIn(data.heightIN)}
              units={isMetric ? STAGE_UNITS[units].height : null}
            />
            <PlaymateHist pm={data} hkey="heightCM" />
            <IfExists
              label="Weight"
              value={isMetric ? data.weightKG : formatVal(data.weightLB)}
              units={STAGE_UNITS[units].weight}
            />
            <PlaymateHist pm={data} hkey="weightKG" />
            <IfExists
              label="Bust"
              value={isMetric ? formatVal(data.bustCM) : formatVal(data.bustIN)}
              units={STAGE_UNITS[units].bust}
            />
            <PlaymateHist pm={data} hkey="bustCM" />
            <IfExists
              label="Waist"
              value={
                isMetric ? formatVal(data.waistCM) : formatVal(data.waistIN)
              }
              units={STAGE_UNITS[units].waist}
            />
            <PlaymateHist pm={data} hkey="waistCM" />
            <IfExists
              label="Hips"
              value={isMetric ? formatVal(data.hipsCM) : formatVal(data.hipsIN)}
              units={STAGE_UNITS[units].hips}
            />
            <PlaymateHist pm={data} hkey="hipsCM" />
            {!hide && (
              <>
                <div
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  Links
                </div>
                <div
                  style={{
                    marginTop: '0.5rem',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <a
                    href={`https://google.com/search?tbm=isch&q=${data.name}+playmate`}
                    target="_blank"
                  >
                    <img src={Google} className={classes.img} />
                  </a>
                  {data.mypmatesUrl && (
                    <>
                      <a href={data.mypmatesUrl} target="_blank">
                        <img src={Mypmates} className={classes.img} />
                      </a>
                    </>
                  )}
                  {data.babepediaUrl && (
                    <>
                      <a href={data.babepediaUrl} target="_blank">
                        <img src={Babepedia} className={classes.img} />
                      </a>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function IfExists({
  label,
  value,
  units,
}: {
  label: string
  value: string | number
  units?: string
}) {
  if (!value) return null
  return (
    <div>
      <strong>{label}:</strong>{' '}
      <span>
        {value} {units}
      </span>
    </div>
  )
}

export default PlaymateTooltip
