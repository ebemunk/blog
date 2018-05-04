import React from 'react'
import { last, equals } from 'ramda'

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import Icon from 'material-ui/Icon'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'

import { formatEventDate } from '../date'
import { decodeHtmlEntity } from '../util'

import style from './List.css'

export class List extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !equals(this.props.events, nextProps.events)
  }

  render() {
    const { events, openInfo } = this.props

    return events.map(event => (
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
        <ExpansionPanelDetails classes={{ root: style.details }}>
          <Button onClick={() => openInfo(event.id)} children="Show on map" />
          {event.description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {decodeHtmlEntity(line)}
              <br />
            </React.Fragment>
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))
  }
}

import { compose } from 'recompose'
import { connect } from 'react-redux'

import { openInfo } from '../actions'
import { searchFilteredEvents } from '../selectors'

export default compose(
  connect(
    state => ({
      events: searchFilteredEvents(state),
    }),
    { openInfo },
  ),
)(List)
