import React from 'react'

export const PlotContext = React.createContext({})

export default class Plot extends React.Component {
  render() {
    const { children, margin, width, height } = this.props

    return (
      <PlotContext.Provider
        value={{
          transform: `translate(${margin.left}, ${margin.top})`,
          chartWidth: width - margin.left - margin.right,
          chartHeight: height - margin.top - margin.bottom,
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
