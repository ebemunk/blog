import React from 'react'
import { InfoWindow } from 'react-google-maps'

import { format } from '../date'

import style from './Info.css'

export default function Info(props) {
  const { closeInfo, event } = props
  return (
    <InfoWindow onCloseClick={closeInfo}>
      <div className={style.wrap}>
        <div>
          <span className={style.title}>{event.name}</span>
          <span className={style.date}>{format(event.startDate)}</span>
        </div>
        <div>
          {event.description.split('\n').map((e, i) => (
            <React.Fragment key={i}>
              {e}
              <br />
            </React.Fragment>
          ))}
        </div>
        <div>{event.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </div>
    </InfoWindow>
  )
}
