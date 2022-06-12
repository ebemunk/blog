import csv from './data.csv'

export enum Hair {
  Blond,
  Black,
  Brown,
  Red,
}

export enum Breasts {
  Natural,
  Enhanced,
}

export enum Ethnicity {
  White,
  Black,
  Asian,
  Latina,
}

export interface Playmate {
  name: string
  heightCM: number
  weightKG: number
  bustCM: number
  waistCM: number
  hipsCM: number
  hair: Hair
  breasts: Breasts
  ethnicity: Ethnicity
  born: Date
  month: number
  year: number
  mateAge: number
  first?: string
  date: Date
  avgDist: number
}

const data: Playmate[] = (csv as unknown as Playmate[]).map(d => ({
  ...d,
  heightCM: +d.heightCM,
  weightKG: +d.weightKG,
  bustCM: +d.bustCM,
  waistCM: +d.waistCM,
  hipsCM: +d.hipsCM,
  month: +d.month,
  year: +d.year,
  mateAge: +d.mateAge,
  born: new Date(+d.born),
  hair: +d.hair,
  breasts: +d.breasts,
  ethnicity: +d.ethnicity,
  date: new Date(+d.year, +d.month, 1),
  avgDist: +d.avgDist,
}))

export { data }
