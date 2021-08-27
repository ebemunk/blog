import _ from 'lodash'
import { data } from '../data'

export const STAGES = [
  'start',

  'mateAge',
  'height',
  'weight',
  'bust',
  'waist',
  'hips',

  'hair',
  'ethnicity',
  'breasts',
  'theCup',
] as const

function flattenObject(o, prefix = '', result = {}, keepNull = true) {
  if (
    _.isString(o) ||
    _.isNumber(o) ||
    _.isBoolean(o) ||
    (keepNull && _.isNull(o))
  ) {
    result[prefix] = o
    return result
  }

  if (_.isArray(o) || _.isPlainObject(o)) {
    for (let i in o) {
      let pref = prefix
      if (_.isArray(o)) {
        pref = pref + `[${i}]`
      } else {
        if (_.isEmpty(prefix)) {
          pref = i
        } else {
          pref = prefix + '.' + i
        }
      }
      flattenObject(o[i], pref, result, keepNull)
    }
    return result
  }
  return result
}
const khist = data
  .map(d => flattenObject(d))
  .reduce((acc, obj) => {
    Object.keys(obj).forEach(k => {
      acc[k] = acc[k] ? acc[k] + 1 : 1
    })
    return acc
  }, {})
console.log('histtt', data.length, khist)
