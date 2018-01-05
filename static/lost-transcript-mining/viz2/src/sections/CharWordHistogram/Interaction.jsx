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
      numChars: null,
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
                numChars: scales.y1(p.data.length)
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
            <text
              children={Math.round(data.pctChars)}
              className={style.pctCharsVal}
              x={width + 6}
              y={data.pctChars}
            />

            <line
              x1={data.bin}
              y1={data.pctWords}
              x2={width + 6}
              y2={data.pctWords}
              className={style.pctWordsLine}
            />
            <text
              children={Math.round(data.pctWords)}
              className={style.pctWordsVal}
              x={width + 6}
              y={data.pctWords}
            />

            <line
              x1={data.bin}
              y1={height}
              x2={data.bin}
              y2={data.pctChars}
              className={style.binsLine}
            />
            <text
              children={Math.round(data.bin)}
              className={style.binVal}
              x={data.bin}
              y={height + 6}
            />

            <line
              x1={-6}
              y1={data.numChars}
              x2={data.bin}
              y2={data.numChars}
              className={style.numCharsLine}
            />
            {/* <text
              children={Math.round(data.numChars)}
              className={style.numCharsVal}
              x={data.bin}
              y={data.numChars}
            /> */}
          </g>
        }
      </g>
    )
  }
}
