import { identity } from 'remeda'
import { Units } from '../../../store'
import { Breasts, Ethnicity, Hair, Playmate } from '../../data/data'
import { cm2in, kg2lb, PLAYMATE_PINK } from '../../util'
import { PointSteps, Step } from './types'
import { isInStepCategory } from './util'

export type XAccessor = (d: Playmate) => number | string | Playmate | Date
export type YAccessor = (d: Playmate) => number | string | Playmate
export type CAccessor = (d: Playmate) => string

export default function accessors(
  step: Step,
  units: Units,
): [XAccessor, YAccessor, CAccessor] {
  const isMetric = units === 'metric'

  switch (step) {
    case isInStepCategory(step, PointSteps):
      return [
        d => new Date(d.year, 0, 1),
        d => d.month.toString(),
        d => PLAYMATE_PINK,
      ]

    case Step.Age:
      return [d => d.date, d => d.mateAge, d => PLAYMATE_PINK]
    case Step.Height:
      return [
        d => d.date,
        d => (isMetric ? d.heightCM : cm2in(d.heightCM)),
        d => PLAYMATE_PINK,
      ]
    case Step.Weight:
      return [
        d => d.date,
        d => (isMetric ? d.weightKG : kg2lb(d.weightKG)),
        d => PLAYMATE_PINK,
      ]
    case Step.Bust:
      return [
        d => d.date,
        d => (isMetric ? d.bustCM : cm2in(d.bustCM)),
        d => PLAYMATE_PINK,
      ]
    case Step.Waist:
      return [
        d => d.date,
        d => (isMetric ? d.waistCM : cm2in(d.waistCM)),
        d => PLAYMATE_PINK,
      ]
    case Step.Hips:
      return [
        d => d.date,
        d => (isMetric ? d.hipsCM : cm2in(d.hipsCM)),
        d => PLAYMATE_PINK,
      ]

    case Step.Hair:
      return [identity, identity, d => Hair[d.hair]]
    case Step.Enhancements:
      return [identity, identity, d => Breasts[d.breasts]]
    case Step.Ethnicity:
      return [identity, identity, d => Ethnicity[d.ethnicity]]

    default:
      throw Error(`step ${step} is not accounted for!`)
  }
}
