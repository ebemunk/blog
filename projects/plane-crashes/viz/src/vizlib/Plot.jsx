import React from 'react'

export const PlotContext = React.createContext({})

export default class Plot extends React.Component {
  render() {
    const { children, margin, width, height } = this.props

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
        }}
      >
        <svg width={width} height={height}>
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
