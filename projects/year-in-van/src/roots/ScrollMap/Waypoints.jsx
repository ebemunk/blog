import React from 'react'
import Waypoint from 'react-waypoint'
import { format } from 'date-fns'

import {
  filterByName,
  dateScale,
  byDate,
  filterByStartHour,
  bySeason,
} from '../../data/events'

const colors3 = ['#0081bd', '#ef69b4', '#ffa600']
const colors4 = ['#0081bd', '#b476cf', '#ff6886', '#ffa600']
const colors5 = ['#0081bd', '#917cd4', '#ef69b4', '#ff716c', '#ffa600']
const colors8 = [
  '#0081bd',
  '#ffa600',
  '#5f80d0',
  '#ff8548',
  '#a079d3',
  '#ff6d77',
  '#d86ec3',
  '#ff66a2',
]

import css from './Waypoints.css'

const WP = props => (
  <React.Fragment>
    {/* <div style={{ border: '1px dashed red' }} /> */}
    <Waypoint bottomOffset="30%" topOffset="20%" {...props} />
  </React.Fragment>
)

const wpData = {
  fourSeasons: [
    { data: bySeason['winter'], color: 'white', label: 'winter' },
    { data: bySeason['spring'], color: '#50d000', label: 'spring' },
    { data: bySeason['summer'], color: '#ff4700', label: 'summer' },
    { data: bySeason['fall'], color: '#ffc800', label: 'fall' },
  ],
  fourSeasonsByName: [
    { data: filterByName('winter'), color: 'white', label: 'winter' },
    { data: filterByName('spring'), color: '#50d000', label: 'spring' },
    { data: filterByName('summer'), color: '#ff4700', label: 'summer' },
    { data: filterByName('fall'), color: '#ffc800', label: 'fall' },
  ],
  cardinalDirections: [
    { data: filterByName('north'), color: colors4[0], label: 'north' },
    { data: filterByName('south'), color: colors4[1], label: 'south' },
    { data: filterByName('east'), color: colors4[2], label: 'east' },
    { data: filterByName('west'), color: colors4[3], label: 'west' },
  ],
  wineBeer: [
    { data: filterByName('wine'), color: '#c50c37', label: 'wine' },
    { data: filterByName('beer'), color: '#ffc800', label: 'beer' },
  ],
  meals: [
    {
      data: filterByName('breakfast'),
      color: colors3[0],
      label: 'breakfast',
    },
    { data: filterByName('lunch'), color: colors3[1], label: 'lunch' },
    {
      data: filterByName('dinner'),
      color: colors3[2],
      label: 'dinner',
    },
  ],
  musicGenres: [
    {
      data: filterByName('flamenco'),
      color: colors4[3],
      label: 'flamenco',
    },
    { data: filterByName('jazz'), color: colors4[2], label: 'jazz' },
    { data: filterByName('pop'), color: colors4[1], label: 'pop' },
    { data: filterByName('blues'), color: colors4[0], label: 'blues' },
  ],
  indigenous: [
    {
      data: filterByName('indigenous'),
      color: colors4[0],
      label: 'indigenous',
    },
  ],
  free: [
    {
      data: filterByName('free'),
      color: colors4[0],
      label: 'free',
    },
  ],
  timeOfDay: [
    {
      data: filterByStartHour(4, 12),
      color: colors5[0],
      label: 'morning',
    },
    {
      data: filterByStartHour(12, 17),
      color: colors5[1],
      label: 'afternoon',
    },
    {
      data: filterByStartHour(17, 21),
      color: colors5[2],
      label: 'evening',
    },
    {
      data: filterByStartHour(21, 24),
      color: colors5[3],
      label: 'night',
    },
    {
      data: filterByStartHour(0, 4),
      color: colors5[4],
      label: 'late night',
    },
  ],
}

class TimerHeatmap extends React.Component {
  state = {
    timer: null,
    progress: 0,
  }

  render() {
    const [start, end] = dateScale.invertExtent(Math.floor(this.state.progress))

    return (
      <div className={css.step}>
        <WP
          onEnter={() => {
            const removeTimer = setInterval(() => {
              console.log('interval')
              this.setState({
                progress:
                  this.state.progress > 99 ? 0 : this.state.progress + 1,
              })
              this.props.setHeatmaps([
                {
                  data: byDate[Math.floor(this.state.progress)],
                  color: colors4[3],
                  label: 'live',
                },
              ])
            }, 150)
            this.setState({
              timer: removeTimer,
            })
          }}
          onLeave={() => {
            if (this.state.timer) clearInterval(this.state.timer)
            this.setState({ timer: null })
          }}
        />
        <h4>A Year of Events</h4>
        <p>
          Mapping out all events by start date. Scroll down to go through 2018
          slowly.
        </p>
        <p>
          Showing events that started between:
          <br />
          <em>
            {format(start, 'MMM Do')}-{format(end, 'Do')}
          </em>
        </p>
      </div>
    )
  }
}

const Waypoints = ({ setHeatmaps, setFocus }) => (
  <div
    style={{
      marginTop: 'calc(-20rem - 50vh)',
    }}
  >
    <div className={css.step}>
      <WP
        onEnter={() =>
          setHeatmaps([
            {
              data: filterByName(''),
              color: colors4[0],
              label: 'all',
            },
          ])
        }
      />
      <h4>2018 in Vancouver</h4>
      <p>All events in the data set</p>
    </div>

    <div className={css.step}>
      <WP onEnter={() => setHeatmaps(wpData.fourSeasons)} />
      <h4>Four Seasons of Vancouver</h4>
      <p>
        Events grouped by the season they started in. Springtime is when things
        really start heating up!
      </p>
    </div>

    <div className={css.step}>
      <WP onEnter={() => setHeatmaps(wpData.fourSeasonsByName)} />
      <p>Events where the event name contains the season.</p>
    </div>

    <div className={css.step}>
      <WP
        onEnter={() => {
          setHeatmaps(wpData.fourSeasonsByName)
          setFocus('summer')
        }}
        onLeave={() => setFocus(null)}
      />
      <p>
        Although fewer events start in the summer than in spring, more events
        refer to "Summer" in their name.
      </p>
    </div>

    <div className={css.step}>
      <WP onEnter={() => setHeatmaps(wpData.cardinalDirections)} />
      <h4>Cardinal Directions</h4>
      <p>
        Events where the name contains a cardinal direction. <em>North Van</em>,{' '}
        <em>West-end</em> and <em>East Van</em> definitely show up in event
        names.
      </p>
    </div>

    <div className={css.step}>
      <WP onEnter={() => setHeatmaps(wpData.wineBeer)} />
      <h4>Wine vs Beer</h4>
      <p>
        Events where the name contains "wine" or "beer". Cambie Street seems to
        be the boundary between wine and beer events, a clean split.
      </p>
    </div>

    <div className={css.step}>
      <WP onEnter={() => setHeatmaps(wpData.meals)} />
      <h4>Meals</h4>
      <p>
        Events where the name contains a reference to breakfast, lunch or
        dinner. Gastown and Commercial stand out by the abundance of dinner
        events.
      </p>
    </div>

    <div className={css.step}>
      <WP onEnter={() => setHeatmaps(wpData.musicGenres)} />
      <h4>Music Genres</h4>
      <p>
        Events where the name contains a (select few) music genre. Flamenco is
        overrepresented because of regular events in that same location. Around
        Granville Strip is definitely a hot spot for events.
      </p>
    </div>

    <div className={css.step}>
      <WP onEnter={() => setHeatmaps(wpData.indigenous)} />
      <h4>Indigenous</h4>
      <p>
        Events where the name contains "indigenous". UBC MOA, Stanley Park
        Pavillion and the VPL downtown are good places to check out.
      </p>
    </div>

    <div className={css.step}>
      <WP onEnter={() => setHeatmaps(wpData.free)} />
      <h4>Free Stuff</h4>
      <p>
        Events where the name contains "free". Very concentrated clusters
        indicative of recurring events.
      </p>
    </div>

    <div className={css.step}>
      <WP onEnter={() => setHeatmaps(wpData.timeOfDay)} />
      <h4>Time of Day</h4>
      <p>
        Events grouped by starting hours: <strong>Morning:</strong> 4am-12pm,{' '}
        <strong>Afternoon:</strong>
        12pm-5pm, <strong>Evening:</strong> 5pm-9pm, <strong>Night:</strong>{' '}
        9pm-12am, <strong>Late Night:</strong> 12am-4am. Definitely an evening
        kind of city...
      </p>
    </div>

    <TimerHeatmap setHeatmaps={setHeatmaps} />
  </div>
)

export default Waypoints
