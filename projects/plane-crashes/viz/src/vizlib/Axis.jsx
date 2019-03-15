import React from 'react'
import { useSprings, animated } from 'react-spring'

const translateX = x => `translate(${x + 0.5}, 0)`
const translateY = y => `translate(0, ${y + 0.5})`
const number = scale => d => +scale(d)
export const center = scale => {
  let offset = Math.max(0, scale.bandwidth() - 1) / 2
  if (scale.round()) offset = Math.round(offset)
  return d => +scale(d) + offset
}

const Axis = ({
  orientation,
  scale,
  tickArguments = [],
  tickSizeInner = 6,
  tickSizeOuter = 6,
  tickPadding = 3,
  tickValues = null,
  tickFormat = null,
  title,
  ...props
}) => {
  const topOrBottom = orientation === 'top' || orientation === 'bottom'
  const leftOrRight = orientation === 'left' || orientation === 'right'

  const k = orientation === 'top' || orientation === 'left' ? -1 : 1
  const transform = topOrBottom ? translateX : translateY
  const position = (scale.bandwidth ? center : number)(scale.copy())
  const x = leftOrRight ? 'x' : 'y'
  const spacing = Math.max(tickSizeInner, 0) + tickPadding
  const format =
    tickFormat == null
      ? scale.tickFormat
        ? scale.tickFormat.apply(scale, tickArguments)
        : x => x
      : tickFormat

  const range = scale.range()
  const range0 = +range[0] + 0.5
  const range1 = +range[range.length - 1] + 0.5

  const ticks =
    tickValues == null
      ? scale.ticks
        ? scale.ticks.apply(scale, tickArguments)
        : scale.domain()
      : tickValues

  const springs = useSprings(
    ticks.length,
    ticks.map(d => ({
      opacity: 1,
      transform: transform(position(d)),
    })),
  )

  return (
    <g
      fill="none"
      fontSize={10}
      fontFamily="sans-serif"
      textAnchor={
        orientation === 'right'
          ? 'start'
          : orientation === 'left'
          ? 'end'
          : 'middle'
      }
      {...props}
    >
      <path
        className="domain"
        stroke="currentColor"
        d={
          leftOrRight
            ? tickSizeOuter
              ? `M${k * tickSizeOuter},${range0}H0.5V${range1}H${k *
                  tickSizeOuter}`
              : `M05,${range0}V${range1}`
            : tickSizeOuter
            ? `M${range0},${k * tickSizeOuter}V0.5H${range1}V${k *
                tickSizeOuter}`
            : `M${range0},0.5H${range1}`
        }
      />
      {title && (
        <text
          x={
            topOrBottom
              ? range1
              : orientation === 'left'
              ? tickSizeOuter
              : -tickSizeOuter
          }
          y={topOrBottom ? -tickSizeOuter : 0}
          fill="currentColor"
          textAnchor={
            topOrBottom ? 'end' : orientation === 'right' ? 'end' : 'start'
          }
          alignmentBaseline={leftOrRight ? 'hanging' : 'baseline'}
          style={{ fontSize: '0.75rem' }}
        >
          {title}
        </text>
      )}
      {ticks.map((tick, i) => (
        <animated.g
          key={tick}
          className="tick"
          opacity={springs[i].opacity}
          transform={springs[i].transform}
        >
          <animated.line
            stroke="currentColor"
            {...{
              [`${x}2`]: k * tickSizeInner,
            }}
          />
          <animated.text
            fill="currentColor"
            dy={
              orientation === 'top'
                ? '0em'
                : orientation === 'bottom'
                ? '0.71em'
                : '0.32em'
            }
            {...{
              [x]: k * spacing,
            }}
          >
            {format(tick)}
          </animated.text>
        </animated.g>
      ))}
      {/* {ticks.map(tick => (
        <Spring
          native
          key={tick}
          to={{ opacity: 1, transform: transform(position(tick)) }}
          from={{ opacity: 0, transform: 'translate(0, 0)' }}
        >
          {spring => (
            <animated.g
              className="tick"
              opacity={spring.opacity}
              transform={spring.transform}
            >
              <animated.line
                stroke="currentColor"
                {...{
                  [`${x}2`]: k * tickSizeInner,
                }}
              />
              <animated.text
                fill="currentColor"
                dy={
                  orientation === 'top'
                    ? '0em'
                    : orientation === 'bottom'
                    ? '0.71em'
                    : '0.32em'
                }
                {...{
                  [x]: k * spacing,
                }}
              >
                {format(tick)}
              </animated.text>
            </animated.g>
          )}
        </Spring>
      ))} */}
    </g>
  )
}

import { compose, pure } from 'recompose'

export default compose(pure)(Axis)
