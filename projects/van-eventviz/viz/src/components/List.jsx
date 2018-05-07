import React from 'react'
import { last, equals } from 'ramda'
import {
  List as RVList,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized'

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

const cache = new CellMeasurerCache({})

export class List extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !equals(this.props.events, nextProps.events)
  }

  render() {
    const { events, openInfo } = this.props

    if (!events || !events.length) return null

    return (
      <AutoSizer>
        {({ height, width }) => (
          <RVList
            ref={e => (this.list = e)}
            width={width}
            height={height}
            rowCount={events.length}
            rowHeight={cache.rowHeight}
            rowRenderer={({ index, key, style: rowStyle, parent }) => {
              const event = events[index]
              return (
                <CellMeasurer
                  cache={cache}
                  columnIndex={0}
                  key={key}
                  parent={parent}
                  rowIndex={index}
                >
                  {({ measure }) => (
                    <ExpansionPanel
                      key={event.id}
                      style={rowStyle}
                      onChange={() => {
                        // console.log(
                        //   'gaga',
                        //   this.list.recomputeRowHeights,
                        //   index,
                        // )

                        setTimeout(() => {
                          measure()
                          //   this.list.forceUpdateGrid(),
                          //     console.log('dre', this.list.forceUpdateGrid)
                        }, 550)
                        // console.log('done')
                      }}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<Icon children="keyboard_arrow_down" />}
                        classes={{ content: style.summary }}
                      >
                        <Avatar
                          className={style.image}
                          alt={event.name}
                          src={event.image ? last(event.image) : null}
                          children={
                            !event.image ? <Icon children="event_note" /> : null
                          }
                        />
                        <div
                          style={{ display: 'flex', flexDirection: 'column' }}
                        >
                          <div>{event.name}</div>
                          <div className={style.date}>
                            {formatEventDate(event.startDate, event.endDate)}
                          </div>
                        </div>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails classes={{ root: style.details }}>
                        <Button onClick={() => openInfo(event.id)}>
                          <Icon children="place" /> Show on map
                        </Button>
                        {event.description.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {decodeHtmlEntity(line)}
                            <br />
                          </React.Fragment>
                        ))}
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  )}
                </CellMeasurer>
              )
            }}
          />
        )}
      </AutoSizer>
    )
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
