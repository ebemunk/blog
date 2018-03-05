import React from 'react'
import classnames from 'classnames'
import { last } from 'ramda'

import TextField from 'material-ui/TextField'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import Icon from 'material-ui/Icon'
import Avatar from 'material-ui/Avatar'

import Overlay from './Overlay'
import { filteredEvents } from '../selectors'
import { formatEventDate } from '../date'
import { decodeHtmlEntity } from '../util'

import style from './List.css'

export function List(props) {
  const { events } = props

  return (
    <Overlay
      name="list"
      style={{ width: '25rem', right: '0' }}
      className={style.wrap}
    >
      <div className={style.input}>
        <TextField
          label="Search events"
          type="search"
          margin="normal"
          fullWidth
          autoFocus
        />
      </div>
      <div>
        {events.map(event => (
          <ExpansionPanel key={event.id}>
            <ExpansionPanelSummary
              expandIcon={<Icon children="keyboard_arrow_down" />}
              classes={{ content: style.summary }}
            >
              <Avatar
                className={style.image}
                alt={event.name}
                src={event.image ? last(event.image) : null}
                children={!event.image ? <Icon children="event_note" /> : null}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>{event.name}</div>
                <div className={style.date}>
                  {formatEventDate(event.startDate, event.endDate)}
                </div>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {event.description.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {decodeHtmlEntity(line)}
                  <br />
                </React.Fragment>
              ))}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    </Overlay>
  )
}

import { compose } from 'recompose'
import { connect } from 'react-redux'

export default compose(
  connect(state => ({
    events: filteredEvents(state),
  })),
)(List)
