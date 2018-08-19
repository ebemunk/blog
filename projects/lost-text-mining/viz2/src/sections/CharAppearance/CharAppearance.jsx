import React from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'
import classnames from 'classnames'

import Axis from 'components/Axis'

import css from './CharAppearance.css'

export const charColor = d3.scaleOrdinal(d3.schemeCategory10)

export default class CharAppearance extends React.Component {
  state = {
    selected: 'JACK',
  }

  render() {
    const { data, width, height, padding, episodes } = this.props

    const charNames = Object.keys(data)

    if (!episodes.length || !charNames.length) return null

    const x = d3
      .scaleLinear()
      .domain([0, 113])
      .range([0, width - padding.left - padding.right])

    const y2 = d3
      .scaleLinear()
      .domain([0, 25])
      .range([height - padding.top - padding.bottom, 0])

    const line = d3
      .line()
      .x(d => x(d.x))
      .y(d => y2(d.y))
      .curve(d3.curveBasis)

    return (
      <React.Fragment>
        <div className={css.legend}>
          {charNames.map(charName => (
            <div
              key={charName}
              className={classnames(css.legendItem, {
                [css.active]: this.state.selected === charName,
              })}
              onClick={() =>
                this.setState({
                  selected: charName === this.state.selected ? null : charName,
                })
              }
            >
              <div
                style={{
                  width: '2rem',
                  height: '3px',
                  backgroundColor: charColor(charName),
                  marginRight: '5px',
                }}
              />
              {charName}
            </div>
          ))}
        </div>
        <svg width={width} height={height}>
          <g transform={`translate(${padding.left}, ${padding.top})`}>
            {Object.keys(data).map(charName => (
              <path
                key={charName}
                className={classnames(css.line, {
                  [css.selected]: this.state.selected === charName,
                })}
                d={line(
                  d3.range(114).map(k => {
                    const val = data[charName].find(
                      vals =>
                        vals.season === episodes[k].season &&
                        vals.episode === episodes[k].episode,
                    )
                    return {
                      x: k,
                      y: val ? val.count : 0,
                    }
                  }),
                )}
                style={{
                  stroke: charColor(charName),
                  strokeWidth: 2,
                }}
              />
            ))}
            <Axis
              scale={x}
              orientation="bottom"
              transform={`translate(0, ${height -
                padding.top -
                padding.bottom})`}
              tickValues={[0, 24, 47, 69, 82, 98]}
              tickFormat={(d, i) => `Season ${i + 1}`}
              className={css.xAxis}
            />
            <Axis scale={y2} orientation="left" />
          </g>
        </svg>
      </React.Fragment>
    )
  }
}

CharAppearance.defaultProps = {
  padding: {
    top: 20,
    bottom: 25,
    left: 30,
    right: 30,
  },
  width: 800,
  height: 400,
}
