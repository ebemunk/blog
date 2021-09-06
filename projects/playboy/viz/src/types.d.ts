declare module 'loess'

export interface Playmate {
  born: string
  breasts?: string
  cup: string
  date: Date
  ethnicity: string
  hair: string
  heightCM: number
  heightIN: number
  mateAge: number
  bustCM: number
  bustIN: number
  waistCM: number
  waistIN: number
  hipsCM: number
  hipsIN: number
  month: number
  name: string
  weightKG: number
  weightLB: number
  year: number
  first?: string
  babepediaUrl?: string
  mypmatesUrl?: string
  country: string
  state: string
  town: string
}

interface PlaymateCircle {
  cx: number
  cy: number
  fill: string
  datum: Playmate
}
