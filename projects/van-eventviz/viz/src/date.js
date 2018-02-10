import {
  startOfDay,
  endOfDay,
  startOfWeek as startOfWeekSun,
  endOfWeek as endOfWeekSun,
  endOfMonth,
  subDays,
  addDays,
  getMinutes,
  format as fmt,
} from 'date-fns'
import { compose, partialRight } from 'ramda'

const startOfWeek = partialRight(startOfWeekSun, [{ weekStartsOn: 1 }])
const endOfWeek = partialRight(endOfWeekSun, [{ weekStartsOn: 1 }])
const startOfSaturday = compose(
  startOfDay,
  partialRight(subDays, [1]),
  endOfWeek,
)

export const dayClickRange = ({ from, to }) => ({
  from: from ? startOfDay(from) : null,
  to: to ? endOfDay(to) : null,
})

export const todayRange = now => ({
  from: now,
  to: endOfDay(now),
})

export const thisWeekRange = now => ({
  from: now,
  to: endOfWeek(now),
})

export const thisWeekendRange = now => ({
  from: startOfSaturday(now),
  to: endOfWeek(now),
})

export const nextWeekRange = now => {
  const nextWeek = addDays(now, 7)
  return {
    from: startOfWeek(nextWeek),
    to: endOfWeek(nextWeek),
  }
}

export const thisMonthRange = now => ({
  from: now,
  to: endOfMonth(now),
})

export const format = date => {
  if (getMinutes(date) == 0) return fmt(date, 'MMM DD @ ha')
  return fmt(date, 'MMM DD @ h:ma')
}
