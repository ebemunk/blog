import { identity } from 'remeda'
import { PLAYMATE_PINK } from '../util'

const accessors = (stage, units) => {
  const isMetric = units === 'metric'

  switch (stage) {
    case 'start':
      return [
        d => d.year.toString(),
        d => d.month.toString(),
        d => PLAYMATE_PINK,
      ]
    case 'mateAge':
      return [d => d.date, d => d.mateAge, d => PLAYMATE_PINK]
    case 'height':
      return [
        d => d.date,
        d => (isMetric ? d.heightCM : d.heightIN),
        d => PLAYMATE_PINK,
      ]
    case 'weight':
      return [
        d => d.date,
        d => (isMetric ? d.weightKG : d.weightLB),
        d => PLAYMATE_PINK,
      ]
    case 'bust':
      return [
        d => d.date,
        d => (isMetric ? d.bustCM : d.bustIN),
        d => PLAYMATE_PINK,
      ]
    case 'waist':
      return [
        d => d.date,
        d => (isMetric ? d.waistCM : d.waistIN),
        d => PLAYMATE_PINK,
      ]
    case 'hips':
      return [
        d => d.date,
        d => (isMetric ? d.hipsCM : d.hipsIN),
        d => PLAYMATE_PINK,
      ]
    case 'hair':
      return [identity, identity, d => d.hair]
    case 'ethnicity':
      return [identity, identity, d => d.ethnicity]
    case 'breasts':
      return [identity, identity, d => d.breasts]
    case 'cup':
      return [identity, identity, d => d.cup]
    default:
      return [identity, identity, identity]
  }
}

export default accessors
