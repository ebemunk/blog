import React from 'react'
import { InfoWindow } from 'react-google-maps'
import { last } from 'ramda'
import classnames from 'classnames'

import { formatEventDate } from '../date'
import { decodeHtmlEntity } from '../util'

import style from './Info.css'

export default function Info(props) {
  const { closeInfo, event } = props
  return (
    <InfoWindow onCloseClick={closeInfo}>
      <div className={style.wrap}>
        <div className={style.head}>
          {event.image && (
            <div className={style.image}>
              <img src={last(event.image)} />
            </div>
          )}
          <div
            className={classnames(style.meta, { [style.noimg]: !event.image })}
          >
            <div className={style.title}>
              <a href={event.url} target="_blank">
                {decodeHtmlEntity(event.name)}
              </a>
            </div>
            <div className={style.date}>
              {formatEventDate(event.startDate, event.endDate)}
            </div>
            <div className={style.address}>
              {event['location.name']} - {event.formatted_address}
            </div>
            <div className={style.tags}>
              {event.tags.map(tag => (
                <span key={tag} className={style.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          {event.description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {decodeHtmlEntity(line)}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </InfoWindow>
  )
}