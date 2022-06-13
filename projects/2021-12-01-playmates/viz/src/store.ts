import { Store as psStore } from 'pullstate'

export type Units = 'imperial' | 'metric'

export const Store = new psStore<{
  units: Units
}>({
  units: 'imperial',
})

export function useIsMetric() {
  const units = Store.useState(s => s.units)
  return units === 'metric'
}
