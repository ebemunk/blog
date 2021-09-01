import { identity } from 'remeda'

const accessors = (stage, units) => {
  const isMetric = units === 'metric'

  switch (stage) {
    case 'start':
      return [d => d.year.toString(), d => d.month.toString(), d => 'pink']
    case 'mateAge':
      return [d => d.date, d => d.mateAge, d => 'pink']
    case 'height':
      return [
        d => d.date,
        d => (isMetric ? d.heightCM : d.heightIN),
        d => 'pink',
      ]
    case 'weight':
      return [
        d => d.date,
        d => (isMetric ? d.weightKG : d.weightLB),
        d => 'pink',
      ]
    case 'bust':
      return [d => d.date, d => (isMetric ? d.bustCM : d.bustIN), d => 'pink']
    case 'waist':
      return [d => d.date, d => (isMetric ? d.waistCM : d.waistIN), d => 'pink']
    case 'hips':
      return [d => d.date, d => (isMetric ? d.hipsCM : d.hipsIN), d => 'pink']
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
