import { fromPairs } from 'lodash'

const images = [
  'ANA LUCIA',
  'BEN',
  'BERNARD',
  'BOONE',
  'CHARLIE',
  'CLAIRE',
  'DESMOND',
  'EKO',
  'FARADAY',
  'HURLEY',
  'JACK',
  'JIN',
  'JULIET',
  'KATE',
  'LOCKE',
  'MICHAEL',
  'MILES',
  'RICHARD',
  'ROSE',
  'SAWYER',
  'SAYID',
  'SHANNON',
  'SUN',
  'WALT',
  'WIDMORE',
].map(n => [n, require(`../../images/resized/${n}.png`)])

export default fromPairs(images)
