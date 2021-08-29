import React from 'react'
import { createUseStyles } from 'react-jss'
import { Playmate } from '../types'
import { MONTHS_FULL } from '../util'

const useStyles = createUseStyles({
  click: {
    fontSize: '0.7rem',
    color: 'gray',
    textAlign: 'center',
  },
})

const PlaymateTooltip = ({
  data,
  pinned,
}: {
  data: Playmate
  pinned: boolean
}) => {
  const classes = useStyles()

  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.66)',
        padding: '0.25rem',
        borderRadius: '5px',
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
        {data.name}
      </div>
      <div
        style={{
          fontSize: '0.9rem',
          textAlign: 'center',
        }}
      >
        {MONTHS_FULL[data.month]} {data.year}
      </div>
      {!pinned && <div className={classes.click}>click for more info</div>}
      {pinned && (
        <>
          <div className={classes.click}>click elswhere to close</div>
          <a
            href={`https://google.com/search?tbm=isch&q=${data.name}+playmate`}
            target="_blank"
          >
            google images
          </a>
        </>
      )}
    </div>
  )
}

export default PlaymateTooltip
