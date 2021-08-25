import range from 'lodash/range'

/**
 * y = sin x
 */
export const sin = ({
  from,
  to,
  samples,
}: {
  from: number
  to: number
  samples: number
}) => {
  return range(from, to, (to - from) / samples).map(x => [x, Math.sin(x)])
}

/**
 * y = cos x
 */
export const cos = ({
  from,
  to,
  samples,
}: {
  from: number
  to: number
  samples: number
}) => {
  return range(from, to, (to - from) / samples).map(x => [x, Math.cos(x)])
}

/**
 * y = tan x
 */
export const tan = ({
  from,
  to,
  samples,
}: {
  from: number
  to: number
  samples: number
}) => {
  return range(from, to, (to - from) / samples).map(x => [x, Math.tan(x)])
}
