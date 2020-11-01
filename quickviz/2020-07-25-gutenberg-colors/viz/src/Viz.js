import React from 'react'

import { FlexPlot, Path, usePlotContext, Plot } from '@xmatters/vizlib'
import { scaleLinear } from 'd3-scale'
import { arc as d3arc, pie as d3pie } from 'd3-shape'

import data from './data.json'

const bookPointColors = {
  2: ['ivory'],
  3: ['snow'],
  4: ['silver'],
  9: ['linen'],
}

const PointOut = ({ arc, d }) => {
  return null

  const [x, y] = arc.centroid(d)

  const fuk = Math.atan2(y, x)

  const anchor = rad => {
    if (rad % Math.PI === 0) return 'start'
    if (rad % (Math.PI / 2) === 0) return 'start'
    if (rad < Math.PI / 2) return 'middle'
    if (rad < Math.PI) return 'end'
    return 'start'
  }

  return (
    <>
      <line
        x1={x}
        y1={y}
        x2={150 * Math.cos(fuk)}
        y2={150 * Math.sin(fuk)}
        style={{ stroke: 'white' }}
        markerEnd="url(#end)"
      />
      <text
        x={170 * Math.cos(fuk)}
        y={170 * Math.sin(fuk)}
        textAnchor={anchor(fuk)}
        style={{ fill: 'white', fontSize: '12px', dominantBaseline: 'central' }}
      >
        {d.data.color}
      </text>
    </>
  )
}

const Pie = ({ book }) => {
  const { chartHeight } = usePlotContext()

  const arc = d3arc()
    .innerRadius(chartHeight / 8 - 10)
    .outerRadius(chartHeight / 4 - 10)
    .cornerRadius(10)
    .padAngle(0.03)

  const data = Object.keys(book.colormap)
    .filter(key => book.colormap[key].length > 0)
    .map(key => ({
      color: key.replace(/\s/gi, ''),
      count: book.colormap[key].length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)

  const pie = d3pie().value(d => d.count)(data)

  return (
    <g>
      {pie.map(d => (
        <React.Fragment key={d.data.color}>
          <path
            d={arc(d)}
            style={{
              fill: d.data.color,
            }}
          >
            <title>{d.data.color}</title>
          </path>
          {bookPointColors[book.pos]?.includes(d.data.color) && (
            <PointOut arc={arc} d={d} />
          )}
        </React.Fragment>
      ))}
    </g>
  )
}

export const Viz1 = ({ book, ...rest }) => {
  const { chartHeight, chartWidth } = usePlotContext()

  const sX = scaleLinear()
    .domain([0, book.length])
    .range([0, 2 * Math.PI])

  const arc = d3arc()
    .innerRadius(chartHeight / 4)
    .outerRadius(chartHeight / 2)

  // console.log(
  //   book.title,
  //   Object.keys(book.colormap)
  //     .filter(key => book.colormap[key].length > 0)
  //     .flatMap(key =>
  //       book.colormap[key].map(d => ({
  //         index: d,
  //         key: key.replace(/\s/gi, ''),
  //       })),
  //     ).length,
  // )

  return (
    <>
      <defs>
        <filter id="glow">
          <feGaussianBlur
            className="blur"
            result="coloredBlur"
            stdDeviation={4}
          ></feGaussianBlur>
          <feMerge>
            <feMergeNode in="coloredBlur"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <g
        transform={`translate(${chartWidth / 2}, ${chartHeight / 2})`}
        {...rest}
      >
        <path
          d={arc({
            startAngle: 0,
            endAngle: Math.PI * 2,
          })}
          style={{
            fill: '#3f3f3f',
          }}
        />
        <g>
          {Object.keys(book.colormap)
            .filter(key => book.colormap[key].length > 0)
            .flatMap(key =>
              book.colormap[key].map(d => ({
                index: d,
                key: key.replace(/\s/gi, ''),
              })),
            )
            .map(d => (
              <path
                key={d.index}
                d={arc({
                  startAngle: sX(d.index),
                  // endAngle: sX(d.index + d.key.length),
                  endAngle: sX(d.index) + Math.PI / 360,
                })}
                style={{
                  fill: d.key,
                  stroke: d.key,
                  // strokeWidth: 2,
                  // filter: 'url(#glow)',
                  opacity: 0.7,
                }}
              />
            ))}
        </g>
        <Pie book={book} />
      </g>
    </>
  )
}

const Viz = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {data.map((d, i) => (
        <div
          key={d.title}
          style={{
            width: '460px',
            marginBottom: '60px',
            // marginRight: '80px',
            // marginLeft: '80px',
          }}
        >
          <Plot
            margin={{
              top: 10,
              bottom: 10,
              right: 80,
              left: 80,
            }}
            style={{
              shapeRendering: 'geometricPrecision',
            }}
            height={300}
            width={460}
          >
            <Viz1 book={d} />
          </Plot>
          <div
            style={{
              fontSize: '30px',
              fontFamily: '"Goudy Bookletter 1911"',
              fontWeight: 600,
              color: '#fff',
              // opacity: 0.7,
              textDecoration: 'underline',
              textAlign: 'center',
            }}
          >
            {i + 1}. {d.title}
          </div>
          <div
            style={{
              fontSize: '16px',
              fontFamily: '"Roboto Condensed"',
              fontWeight: 300,
              color: '#fff',
              textAlign: 'center',
              // opacity: 0.7,
            }}
          >
            {d.author}
          </div>
          <div
            style={{
              fontSize: '15px',
              fontFamily: '"Goudy Bookletter 1911"',
              fontWeight: 300,
              color: '#fff',
              textAlign: 'center',
              maxWidth: '400px',
              marginLeft: '30px',
              marginTop: '1rem',
              // opacity: 0.7,
            }}
          >
            {d.firstSentence.split('\n').map(function (item, key) {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Viz
