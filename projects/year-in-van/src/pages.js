import differenceInHours from 'date-fns/difference_in_hours'

import events from './events.csv'

const byName = name => d => d.name.match(new RegExp(`${name}`, 'ig'))

const byDiffHours = d =>
  differenceInHours(new Date(d.startdate), new Date(d.enddate)) < 4

const evtz = events.filter(byDiffHours).filter(d => d.startdate === d.enddate)

const byStartHour = ([start, end]) => d => {
  const hour = new Date(d.startdate).getHours()
  return hour >= start && hour < end
}

export default [
  [
    { data: events.filter(byName('summer')), color: 'red', label: 'Summer' },
    { data: events.filter(byName('fall')), color: 'yellow', label: 'Fall' },
    { data: events.filter(byName('winter')), color: 'white', label: 'Winter' },
    { data: events.filter(byName('spring')), color: 'green', label: 'Spring' },
  ],
  [
    { data: events.filter(byName('east')), color: 'red', label: 'East' },
    { data: events.filter(byName('west')), color: 'yellow', label: 'West' },
    { data: events.filter(byName('north')), color: 'white', label: 'North' },
    { data: events.filter(byName('south')), color: 'green', label: 'South' },
  ],
  [
    { data: events.filter(byName('wine')), color: 'red', label: 'Wine' },
    { data: events.filter(byName('beer')), color: 'yellow', label: 'Beer' },
  ],
  [
    { data: events.filter(byName('love')), color: 'red', label: 'Love' },
    { data: events.filter(byName('family')), color: 'yellow', label: 'Family' },
  ],
  [
    {
      data: evtz.filter(byStartHour([4, 12])),
      color: 'yellow',
      label: 'Morning',
    },
    {
      data: evtz.filter(byStartHour([12, 17])),
      color: 'green',
      label: 'Afternoon',
    },
    {
      data: evtz.filter(byStartHour([17, 21])),
      color: 'blue',
      label: 'Evening',
    },
    {
      data: evtz.filter(byStartHour([21, 24])),
      color: 'white',
      label: 'Night',
    },
    {
      data: evtz.filter(byStartHour([0, 4])),
      color: 'red',
      label: 'Late Night',
    },
  ],
  [
    {
      data: events.filter(byName('breakfast')),
      color: 'yellow',
      label: 'breakfast',
    },
    { data: events.filter(byName('lunch')), color: 'green', label: 'lunch' },
    { data: events.filter(byName('dinner')), color: 'red', label: 'Dinner' },
  ],
  [
    {
      data: events.filter(byName('indigenous')),
      color: 'red',
      label: 'Indigenous',
    },
  ],
  [{ data: events.filter(byName('free')), color: 'red', label: 'Free' }],
  [
    {
      data: events.filter(byName('flamenco')),
      color: 'red',
      label: 'flamenco',
    },
    { data: events.filter(byName('jazz')), color: 'yellow', label: 'jazz' },
    { data: events.filter(byName('pop')), color: 'white', label: 'pop' },
    { data: events.filter(byName('blues')), color: 'green', label: 'blues' },
    { data: events.filter(byName('rock')), color: 'green', label: 'rock' },
  ],
  [{ data: events.filter(byName('live')), color: 'red', label: 'live' }],
  [{ data: events, color: 'red', label: 'all' }],
]
