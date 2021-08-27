declare module 'loess'

export interface Playmate {
  age: number
  born: string
  breasts?: string
  cup: string
  date: Date
  ethnicity: string
  eye?: string
  hair: string
  height: number
  mateAge: number
  measurements: {
    bust: number
    waist: number
    hips: number
  }
  month: number
  name: string
  tatoos?: boolean
  theCup: string
  weight: number
  year: number
}

interface PlaymateCircle {
  cx: number
  cy: number
  fill: string
  datum: Playmate
}
