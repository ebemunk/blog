import React from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'
import classnames from 'classnames'

import Axis from 'components/Axis'
import ButtonGroup from 'components/ButtonGroup'
import Labels from 'components/Labels'

import { MAIN_CHARS } from 'utils'

import css from './CharAppearance.css'

export const charColor = d3.scaleOrdinal(d3.schemeSet3)

export default class CharAppearance extends React.Component {
  state = {
    highlighted: 'JACK',
    dataType: 'appearances',
  }

  render() {
    const { data, width, height, padding, episodes } = this.props
    const { dataType, highlighted } = this.state

    const charNames = Object.keys(data.appearances)

    if (!episodes.length || !charNames.length) return null

    const x = d3
      .scaleLinear()
      .domain([0, 113])
      .range([0, width - padding.left - padding.right])

    const yDomain = R.pipe(
      R.map(R.map(d => d.count)),
      R.map(R.reduce(R.max, 0)),
      R.values,
      R.reduce(R.max, 0),
    )(data[dataType])

    const y2 = d3
      .scaleLinear()
      .domain([0, yDomain])
      .range([height - padding.top - padding.bottom, 0])

    const line = d3
      .line()
      .x(d => x(d.x))
      .y(d => y2(d.y))
    // .curve(d3.curveBasis)

    return (
      <div className={css.wrap}>
        <div className={css.center}>
          <div className={css.legend}>
            {MAIN_CHARS.map(charName => (
              <div
                key={charName}
                className={classnames(css.legendItem, {
                  [css.highlighted]: highlighted === charName,
                })}
                onClick={() =>
                  this.setState({
                    highlighted: charName === highlighted ? null : charName,
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
          <Labels
            y0Label={
              {
                appearances: 'Number of scenes appeared in',
                mentions: 'Number of times mentioned by others',
              }[dataType]
            }
            xLabel="Episodes"
          >
            <svg width={width} height={height}>
              <g transform={`translate(${padding.left}, ${padding.top})`}>
                {MAIN_CHARS.map(charName => (
                  <path
                    key={charName}
                    className={classnames(css.line, {
                      [css.highlighted]: highlighted === charName,
                    })}
                    d={line(
                      d3.range(114).map(k => {
                        const val = data[dataType][charName].find(
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
                      stroke:
                        highlighted === charName ? charColor(charName) : 'gray',
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
          </Labels>
          <ButtonGroup
            options={[
              { name: 'Appearances', value: 'appearances' },
              { name: 'Mentions', value: 'mentions' },
            ]}
            onChange={dataType => this.setState({ dataType })}
            selected={dataType}
            style={{ marginTop: '2rem' }}
          />
        </div>
      </div>
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
