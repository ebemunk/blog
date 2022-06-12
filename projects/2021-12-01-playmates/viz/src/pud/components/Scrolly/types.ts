import { Playmate } from '../../data/data'
import { Paragraph, Quote, Title } from '../../type'

export enum Step {
  Explainer = 'explainer',
  Marilyn = 'marilyn',
  NoIssue = 'noissue',
  SameGirlMultipleIssues = 'sameGirlMultipleIssues',
  Twins = 'twins',
  China = 'chine',
  JenniferJackson = 'jenniferjackson',
  Karen = 'karen',
  InesRau = 'inesrau',
  MarshaElle = 'marshaelle',
  OtherFirsts = 'otherfirsts',
  Hefner = 'hefner',

  Age = 'age',
  Height = 'height',
  Weight = 'weight',
  Bust = 'bust',
  Waist = 'waist',
  Hips = 'hips',

  Hair = 'hair',
  Enhancements = 'enhancements',
  Ethnicity = 'ethnicity',
}

export const PointSteps = [
  Step.Explainer,
  Step.Marilyn,
  Step.NoIssue,
  Step.SameGirlMultipleIssues,
  Step.Twins,
  Step.China,
  Step.JenniferJackson,
  Step.Karen,
  Step.InesRau,
  Step.MarshaElle,
  Step.OtherFirsts,
  Step.Hefner,
]

export const ScatterSteps = [
  Step.Age,
  Step.Height,
  Step.Weight,
  Step.Bust,
  Step.Waist,
  Step.Hips,
]

export const GroupingSteps = [Step.Hair, Step.Enhancements, Step.Ethnicity]

export interface Section {
  type: Step
  value: (Paragraph | Title | Quote)[]
}

export interface PlaymateCircle {
  cx: number
  cy: number
  fill: string
  datum: Playmate
}
