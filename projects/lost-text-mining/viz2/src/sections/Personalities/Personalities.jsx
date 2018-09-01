import React from 'react'
import * as d3 from 'd3'

import Toggle from 'components/Toggle'
import dimensions from './dimensions'
import labels from './labels'
import Dimension from './Dimension'

import css from './Personalities.css'

export default class Personalities extends React.Component {
  state = { tooltips: true }

  render() {
    const { width, padding, data } = this.props
    const { tooltips } = this.state

    const x = d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, width - padding.left - padding.right])

    return (
      <React.Fragment>
        <div className={css.toggle}>
          <Toggle
            children="Tooltips"
            onClick={() => this.setState({ tooltips: !tooltips })}
            className={css.all}
            on={tooltips}
          />
        </div>
        <div className={css.dimensions}>
          {dimensions
            .map(dim => ({
              ...dim,
              isNeeds: dim.key === 'needs',
              width: ['needs', 'values', 'big5'].includes(dim.key)
                ? width - 250
                : width,
              padding: ['needs', 'values', 'big5'].includes(dim.key)
                ? { top: 0, left: 0, right: 0, bottom: 0 }
                : padding,
            }))
            .map(dimension => (
              <div
                key={dimension.key}
                className={css.dimension}
                style={{ width }}
              >
                <div className={css.label}>{labels[dimension.key].label}</div>
                <div className={css.dims}>
                  <Dimension
                    x={x}
                    dimension={{
                      ...dimension,
                      facets: dimension.isNeeds
                        ? dimension.facets.slice(0, 6)
                        : dimension.facets,
                    }}
                    data={data}
                    width={dimension.width}
                    padding={dimension.padding}
                    tooltips={tooltips}
                  />
                  {dimension.isNeeds && (
                    <Dimension
                      x={x}
                      dimension={{
                        ...dimension,
                        facets: dimension.facets.slice(6),
                      }}
                      data={data}
                      width={dimension.width}
                      padding={dimension.padding}
                      tooltips={tooltips}
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    )
  }
}

Personalities.defaultProps = {
  width: 400,
  padding: {
    top: 0,
    left: 125,
    right: 125,
    bottom: 0,
  },
}
