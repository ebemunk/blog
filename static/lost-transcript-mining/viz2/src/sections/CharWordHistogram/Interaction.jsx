import React from 'react'

import style from './CharWordHistogram.css'

const halfway = d => d.x1 - (d.x1 - d.x0) / 2

export default class Interaction extends React.Component {
  state = {
    visible: false,
    data: {
      bin: null,
      pctChars: null,
      pctWords: null,
    }
  }

  render() {
    const { polygons, scales, derivedData, width, height } = this.props
    const { visible, data } = this.state

    return (
      <g
        onMouseLeave={() => this.setState({ visible: false })}
      >
        {polygons.map((p, i) =>
          <path
            key={p}
            d={`M${p.join('L')}Z`}
            fill="transparent"
            onMouseEnter={() => this.setState({
              data: {
                bin: (scales.x(p.data.x0) + scales.x(p.data.x1)) / 2,
                pctChars: scales.y2(derivedData.cumChars[i].y),
                pctWords: scales.y2(derivedData.cumWords[i].y),
              },
              visible: true
            })}
          />
        )}
        {visible &&
          <g>
            <line
              x1={data.bin}
              y1={data.pctChars}
              x2={width + 6}
              y2={data.pctChars}
              className={style.pctCharsLine}
            />
            <line
              x1={data.bin}
              y1={data.pctWords}
              x2={width + 6}
              y2={data.pctWords}
              className={style.pctWordsLine}
            />
            <line
              x1={data.bin}
              y1={height}
              x2={data.bin}
              y2={data.pctChars}
              className={style.binsLine}
            />
          </g>
        }
      </g>
    )
  }
}
