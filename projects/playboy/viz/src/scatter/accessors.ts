import { identity } from 'remeda'

const accessors = stage => {
  switch (stage) {
    case 'start':
      return [d => d.year.toString(), d => d.month.toString(), d => 'pink']
    case 'mateAge':
      return [d => d.date, d => d.mateAge, d => 'pink']
    case 'height':
      return [d => d.date, d => d.height, d => 'pink']
    case 'weight':
      return [d => d.date, d => d.weight, d => 'pink']
    case 'bust':
      return [d => d.date, d => d.measurements?.bust, d => 'pink']
    case 'waist':
      return [d => d.date, d => d.measurements?.waist, d => 'pink']
    case 'hips':
      return [d => d.date, d => d.measurements?.hips, d => 'pink']
    case 'hair':
      return [identity, identity, d => d.hair]
    case 'ethnicity':
      return [identity, identity, d => d.ethnicity]
    case 'breasts':
      return [identity, identity, d => d.breasts]
    case 'theCup':
      return [identity, identity, d => d.theCup]
    default:
      return [identity, identity, identity]
  }
}

export default accessors
