import React from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'

import { seasonColor } from 'utils'

import css from './WordConnections.css'

export default class WordConnections extends React.Component {
  render() {
    const { data, episodes, width } = this.props

    if (!episodes.length || !data['the monster']) return null

    const pie = d3
      .pie()
      .value(d => d.length)
      .sort(null)
    const arc = d3
      .arc()
      .innerRadius(width / 2 - 25)
      .outerRadius(width / 2)
    const link = d3
      .linkRadial()
      .angle(d => d.angle)
      .radius(d => d.radius)

    const arcs = pie(episodes)

    const wordColor = d3.scaleOrdinal(d3.schemeCategory10)
    const linkThickness = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(
          Object.keys(data).reduce((acc, key) => {
            return acc.concat(data[key])
          }, []),
          d => d.count,
        ),
      ])
      .range([1, 3])

    console.log('arcs', arcs)
    console.log('data', data['the monster'])

    const seasonAngles = R.pipe(
      R.groupBy(d => d.data.season),
      R.map(v => {
        return [R.head(v).startAngle, R.last(v).endAngle]
      }),
    )(arcs)

    console.log('seasonAngles', seasonAngles)

    return (
      <div className={css.wrap}>
        <svg width={width} height={width}>
          <g transform={`translate(${width / 2}, ${width / 2})`}>
            <g className={css.axis}>
              {arcs.map(d => (
                <path
                  key={`${d.data.season}-${d.data.episode}`}
                  d={arc(d)}
                  className={css.arc}
                  style={{
                    fill: seasonColor(d.data.season - 1),
                  }}
                />
              ))}
            </g>
            <g className={css.links}>
              {Object.keys(data)
                //.filter(d => d !== 'island')
                .filter(d => d === 'oceanic')
                .map((key, index) =>
                  data[key].map(d => {
                    const targetArc = arcs.find(
                      dd =>
                        dd.data.season === d.season &&
                        dd.data.episode === d.episode,
                    )
                    const angle =
                      (targetArc.startAngle + targetArc.endAngle) / 2
                    const pi = Math.PI

                    let sourceAngle = 0
                    if (angle > 0 && angle < pi / 2) {
                      sourceAngle = pi / 4
                    } else if (angle > pi / 2 && angle < pi) {
                      sourceAngle = (pi / 2 + pi) / 2
                    } else if (angle > pi && angle < 3 * pi / 2) {
                      sourceAngle = (pi + 3 * pi / 2) / 2
                    } else if (angle > 3 * pi / 2 && angle < 2 * pi) {
                      sourceAngle = (3 * pi / 2 + 2 * pi) / 2
                    } else {
                      return null
                    }

                    return (
                      <path
                        key={`${d.season}-${d.episode}-${d.word}`}
                        d={link({
                          source: {
                            angle: sourceAngle + index * 0.1,
                            radius: 100,
                          },
                          target: {
                            angle,
                            radius: width / 2 - 25,
                          },
                        })}
                        className={css.link}
                        style={{
                          stroke: wordColor(d.word),
                          strokeWidth: linkThickness(d.count),
                        }}
                      />
                    )
                  }),
                )}
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

WordConnections.defaultProps = {
  width: 600,
}
