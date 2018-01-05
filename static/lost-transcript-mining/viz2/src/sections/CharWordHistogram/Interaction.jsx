import React from 'react'

import style from './CharWordHistogram.css'

const halfway = d => d.x1 - (d.x1 - d.x0) / 2

export default class Interaction extends React.Component {
  state = {
    visible: false,
    scaled: {
      bin: null,
      pctChars: null,
      pctWords: null,
      numChars: null,
    },
    data: {
      pctChars: null,
      pctWords: null,
    }
  }

  render() {
    const { polygons, scales, derivedData, width, height } = this.props
    const { visible, scaled, data } = this.state

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
              scaled: {
                bin: (scales.x(p.data.x0) + scales.x(p.data.x1)) / 2,
                pctChars: scales.y2(derivedData.cumChars[i].y),
                pctWords: scales.y2(derivedData.cumWords[i].y),
                numChars: scales.y1(p.data.length),
              },
              data: {
                bin: p.data.x1,
                pctChars: derivedData.cumChars[i].y,
                pctWords: derivedData.cumWords[i].y,
                numChars: p.data.length,
              },
              visible: true
            })}
          />
        )}
        {visible &&
          <g>
            <line
              x1={scaled.bin}
              y1={scaled.pctChars}
              x2={width + 6}
              y2={scaled.pctChars}
              className={style.pctCharsLine}
            />
            <text
              children={Math.round(data.pctChars)}
              className={style.pctCharsVal}
              x={width}
              y={scaled.pctChars}
              dx={8}
            />

            <line
              x1={scaled.bin}
              y1={scaled.pctWords}
              x2={width + 6}
              y2={scaled.pctWords}
              className={style.pctWordsLine}
            />
            <text
              children={Math.round(data.pctWords)}
              className={style.pctWordsVal}
              x={width}
              y={scaled.pctWords}
              dx={8}
            />

            <line
              x1={scaled.bin}
              y1={height}
              x2={scaled.bin}
              y2={scaled.pctChars}
              className={style.binsLine}
            />
            <text
              children={Math.round(data.bin)}
              className={style.words}
              x={scaled.bin}
              y={height + 6}
              dy={8}
            />

            <line
              x1={-6}
              y1={scaled.numChars}
              x2={scaled.bin}
              y2={scaled.numChars}
              className={style.numCharsLine}
            />
            <text
              children={data.numChars}
              className={style.numCharsVal}
              x={-6}
              y={scaled.numChars}
            />
          </g>
        }
      </g>
    )
  }
}
