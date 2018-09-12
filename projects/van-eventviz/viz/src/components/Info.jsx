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
    <InfoWindow
      onCloseClick={closeInfo}
      options={{ maxWidth: window.innerWidth * 0.6 }}
    >
      <div className={style.wrap}>
        <div className={style.head}>
          {event.image && (
            <div className={style.image}>
              <img
                src={
                  Array.isArray(event.images) ? last(event.image) : event.image
                }
              />
            </div>
          )}
          <div
            className={classnames(style.meta, { [style.noimg]: !event.image })}
          >
            <div className={style.title}>
              <a href={event.url} target="_blank" rel="noopener">
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
