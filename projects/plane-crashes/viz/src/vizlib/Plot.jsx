import React from 'react'

export const PlotContext = React.createContext({})

export default class Plot extends React.Component {
  svgRef = React.createRef()

  render() {
    const { children, margin, width, height, ...rest } = this.props

    const chartWidth = width - margin.left - margin.right
    const chartHeight = height - margin.top - margin.bottom

    if (chartWidth <= 0 || chartHeight <= 0) return null

    return (
      <PlotContext.Provider
        value={{
          transform: `translate(${margin.left}, ${margin.top})`,
          chartWidth,
          chartHeight,
          margin,
          getBoundingClientRect: () =>
            this.svgRef.current
              ? this.svgRef.current.getBoundingClientRect()
              : {},
        }}
      >
        <svg width={width} height={height} ref={this.svgRef} {...rest}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <PlotContext.Consumer>
              {context => children(context)}
            </PlotContext.Consumer>
          </g>
        </svg>
      </PlotContext.Provider>
    )
  }
}

Plot.defaultProps = {
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}
