export interface Margin {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

export type StyleFunction = (datum: any) => React.CSSProperties
