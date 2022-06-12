import { Step } from './types'

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const MONTHS_FULL = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const STEP_UNITS = {
  metric: {
    [Step.Explainer]: '',
    [Step.Marilyn]: '',
    [Step.NoIssue]: '',
    [Step.JenniferJackson]: '',
    [Step.InesRau]: '',
    [Step.MarshaElle]: '',
    [Step.OtherFirsts]: '',
    [Step.Hefner]: '',
    [Step.Age]: 'years',
    [Step.Height]: 'cm',
    [Step.Weight]: 'kg',
    [Step.Bust]: 'cm',
    [Step.Waist]: 'cm',
    [Step.Hips]: 'cm',
  },
  imperial: {
    [Step.Explainer]: '',
    [Step.Marilyn]: '',
    [Step.NoIssue]: '',
    [Step.JenniferJackson]: '',
    [Step.InesRau]: '',
    [Step.MarshaElle]: '',
    [Step.OtherFirsts]: '',
    [Step.Hefner]: '',
    [Step.Age]: 'years',
    [Step.Height]: 'ft.in.',
    [Step.Weight]: 'lbs',
    [Step.Bust]: 'in',
    [Step.Waist]: 'in',
    [Step.Hips]: 'in',
  },
}

export const isInStepCategory = (step: Step, category: Step[]) =>
  category.includes(step) ? step : undefined
