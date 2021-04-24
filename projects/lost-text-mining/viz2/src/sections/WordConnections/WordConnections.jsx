import React from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'

import { seasonColor } from 'utils'

import css from './WordConnections.css'

const groups = [
  ['the monster', 'the others', 'dharma', 'oceanic'],
  ['island'],
  ['hell', 'heaven'],
  ['north', 'south', 'east', 'west'],
  ['love', 'hate'],
  ['kill', 'die'],
  ['friend', 'enemy'],
  ['father', 'mother'],
]

export default class WordConnections extends React.Component {
  state = {
    selected: groups.reduce((acc, cur) => [...acc, ...cur], []).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: true,
      }),
      {},
    ),
    group: 0,
  }

  render() {
    const { data, episodes, width } = this.props

    if (!episodes.length || !data['the monster']) return null

    const pie = d3
      .pie()
      .value(d => d.length)
      .sort(null)
    const arc = d3
      .arc()
      .innerRadius(width / 2 - 50)
      .outerRadius(width / 2 - 25)
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
      .range([3, 10])

    const seasonAngles = R.pipe(
      R.groupBy(d => d.data.season),
      R.map(v => {
        return [R.head(v).startAngle + 0.2, R.last(v).endAngle - 0.2]
      }),
    )(arcs)

    const words = groups[this.state.group]

    return (
      <div className={css.wrap}>
        <div className={css.legend}>
          {words.map(key => (
            <div
              className={css.word}
              key={key}
              style={{
                color: wordColor(key),
                opacity: this.state.selected[key] ? 1 : 0.2,
              }}
              onClick={() =>
                this.setState({
                  selected: {
                    ...this.state.selected,
                    [key]: this.state.selected[key] ? false : true,
                  },
                })
              }
            >
              {key}
            </div>
          ))}
          <div
            className={css.arrow}
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translate(0, -50%)',
            }}
            onClick={() => {
              const nextIndex =
                this.state.group === 0
                  ? groups.length - 1
                  : this.state.group - 1

              this.setState({
                group: nextIndex,
              })
            }}
          >
            ‹
          </div>
          <div
            className={css.arrow}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translate(0, -50%)',
            }}
            onClick={() => {
              const nextIndex =
                this.state.group === groups.length - 1
                  ? 0
                  : this.state.group + 1

              this.setState({
                group: nextIndex,
              })
            }}
          >
            ›
          </div>
        </div>
        <svg width={width} height={width}>
          <g transform={`translate(${width / 2}, ${width / 2})`}>
            {/* <circle cx={0} cy={0} r={width/2-25} id="curve" /> */}
            <path d={d3.arc()({
              startAngle: 0,
              endAngle: Math.PI*2,
              outerRadius: width/2-25
            })} fill="none" id="curve" />
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
              {words.filter(d => this.state.selected[d]).map((key, index) =>
                data[key].map(d => {
                  const numSelected = words.filter(d => this.state.selected[d])
                    .length

                  const targetArc = arcs.find(
                    dd =>
                      dd.data.season === d.season &&
                      dd.data.episode === d.episode,
                  )
                  const targetAngleScale = d3
                    .scaleLinear()
                    .domain([0, numSelected])
                    .range([targetArc.startAngle, targetArc.endAngle])
                  const angle =
                    (targetAngleScale(index) + targetAngleScale(index + 1)) / 2

                  const sourceAngleScale = d3
                    .scaleLinear()
                    .domain([0, numSelected])
                    .range(seasonAngles[d.season])

                  const sourceAngle =
                    (sourceAngleScale(index) + sourceAngleScale(index + 1)) / 2

                  return (
                    <path
                      key={`${d.season}-${d.episode}-${d.word}`}
                      d={link({
                        source: {
                          angle: sourceAngle,
                          radius: 50,
                          // radius: 100 + index*25
                        },
                        target: {
                          angle,
                          radius: width / 2 - 50,
                        },
                      })}
                      className={css.link}
                      style={{
                        stroke: wordColor(d.word),
                        strokeWidth: linkThickness(d.count),
                        strokeOpacity: 0.6
                      }}
                    />
                  )
                }),
              )}
            </g>
            <g>
              {Object.entries(seasonAngles).map(([season, angles]) => (
                <text
                  key={season}
                  x={2}
                  dy={-5}
                  y={-width/2+25}
                  transform={`rotate(${(angles[0]-0.2) * (180/Math.PI)})`}
                  fill={seasonColor(season-1)}
                  // textAnchor="middle"
                >
                  <textPath xlinkHref="#curve">
                    Season {season} →
                  </textPath>
                </text>
              ))}
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

WordConnections.defaultProps = {
  width: 800,
}
