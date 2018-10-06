import React from 'react'
import { extent, scaleLinear } from 'd3'

const Square = ({ width, data, black }) => (
  <div
    style={{
      width,
      height: width,
      backgroundColor: black ? 'black' : 'white',
      position: 'relative',
    }}
  >
    <div
      style={{
        width: data,
        height: data,
        backgroundColor: 'steelblue',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  </div>
)

const ChessBoard = ({ width, data }) => {
  const scale = scaleLinear()
    .range([0, width / 8])
    .domain(extent(data))

  return (
    <div
      style={{
        width,
        height: width,
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {data.map((d, i) => {
        const x = i % 8
        const y = Math.floor(i / 8)
        const black = (x + y) % 2 === 1
        return <Square data={scale(d)} black={black} width={width / 8} />
      })}
    </div>
  )
}
export default ChessBoard
