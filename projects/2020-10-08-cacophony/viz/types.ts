export type Margin = {
  top: number
  right: number
  bottom: number
  left: number
}

export interface ChartOptions {
  width?: number
  height?: number
  margin?: Partial<Margin>
}
