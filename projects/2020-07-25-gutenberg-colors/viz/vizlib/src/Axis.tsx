import React from 'react'
import { min, max, memoize } from 'lodash'
import { useSpring, useSprings, animated } from 'react-spring'

export type Orientation = 'top' | 'right' | 'bottom' | 'left'

const pickOrientation = memoize(
  (orientation: Orientation) => (
    top: any,
    right: any,
    bottom: any,
    left: any,
  ) =>
    ({
      top,
      right,
      bottom,
      left,
    }[orientation]),
)

export type Props = {
  orientation?: Orientation
  /**
   * docs
   */
  scale: any
  ticks?: number[]
  tickFormat?: Function
  tickFontSize?: number
  tickProps?: {}
  markLength?: number
  markProps?: {}
  showDomain?: boolean
  domainProps?: {}
  animate?: boolean
  [key: string]: any
}

export const Axis = ({
  orientation = 'bottom',
  scale,
  ticks = scale.ticks ? scale.ticks() : scale.domain(),
  tickFormat = scale.tickFormat ? scale.tickFormat() : (d: any) => d,
  tickFontSize = 12,
  tickProps = {},
  markLength = 3,
  markProps = {},
  showDomain = false,
  domainProps = {},
  animate = false,
  ...rest
}: Props) => {
  const forOrientation = pickOrientation(orientation)

  const halfTickFontSize = tickFontSize / 2
  const bandwidth = scale.bandwidth?.() ?? 0
  const domain: number[] | string[] = scale.domain()

  let minDomain: number | string, maxDomain: number | string
  if (domain.every((d: any) => typeof d === 'number')) {
    // @ts-ignore
    minDomain = min(domain)
    // @ts-ignore
    maxDomain = max(domain)
  } else {
    minDomain = domain[0]
    maxDomain = domain.slice(-1)[0]
  }

  // @ts-ignore
  const [domainSpring, setDomainSpring, stopDomainSpring] = useSpring(() => ({
    x2: forOrientation(
      scale(minDomain) + bandwidth,
      0,
      scale(minDomain) + bandwidth,
      0,
    ),
    y2: 0,
    immediate: !animate,
  }))

  React.useEffect(() => {
    setDomainSpring({
      x2: forOrientation(
        scale(maxDomain) + bandwidth,
        0,
        scale(maxDomain) + bandwidth,
        0,
      ),
      y2: forOrientation(
        0,
        scale(maxDomain) + bandwidth,
        0,
        scale(maxDomain) + bandwidth,
      ),
    })

    // @ts-ignore
    return () => stopDomainSpring()
  }, [scale, orientation, showDomain])

  //@ts-ignore
  const [ticksSpring, setTicksSpring, stopTicksSpring] = useSprings(
    ticks.length,
    (index: number) => ({
      transform:
        orientation === 'top' || orientation === 'bottom'
          ? `translate(${scale(ticks[index]) + bandwidth / 2},0)`
          : `translate(0,${scale(ticks[index]) + bandwidth / 2})`,
      immediate: !animate,
    }),
  )

  React.useEffect(() => {
    // @ts-ignore
    setTicksSpring(index => ({
      transform:
        orientation === 'top' || orientation === 'bottom'
          ? `translate(${scale(ticks[index]) + bandwidth / 2},0)`
          : `translate(0,${scale(ticks[index]) + bandwidth / 2})`,
    }))

    // @ts-ignore
    return () => stopTicksSpring()
  }, [scale])

  return (
    <g {...rest}>
      {showDomain && (
        <animated.line
          x1={forOrientation(scale(minDomain), 0, scale(minDomain), 0)}
          y1={forOrientation(0, scale(minDomain), 0, scale(minDomain))}
          x2={domainSpring.x2}
          y2={domainSpring.y2}
          style={{
            fill: 'none',
            stroke: 'black',
          }}
          {...domainProps}
        />
      )}
      {ticks.map((tick: number, i: number) => (
        <animated.g transform={ticksSpring[i].transform} key={i}>
          <line
            x1={forOrientation(0, 0, 0, -markLength)}
            y1={forOrientation(-markLength, 0, 0, 0)}
            x2={forOrientation(0, markLength, 0, 0)}
            y2={forOrientation(0, 0, markLength, 0)}
            style={{
              stroke: 'black',
              strokeWidth: 1,
              strokeLinecap: 'square',
              fill: 'none',
            }}
            {...{
              ...(typeof markProps === 'function'
                ? markProps(tick)
                : markProps),
            }}
          />
          <text
            dy={forOrientation(-halfTickFontSize, 0, halfTickFontSize, 0)}
            dx={forOrientation(0, halfTickFontSize, 0, -halfTickFontSize)}
            fontSize={tickFontSize}
            textAnchor={forOrientation('middle', 'start', 'middle', 'end')}
            dominantBaseline={forOrientation(
              'text-after-edge',
              'central',
              'text-before-edge',
              'central',
            )}
            {...{
              ...(typeof tickProps === 'function'
                ? tickProps(tick)
                : tickProps),
            }}
          >
            {tickFormat(tick)}
          </text>
        </animated.g>
      ))}
    </g>
  )
}

export default Axis
