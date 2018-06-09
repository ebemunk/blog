import React from 'react'

const style = {}

export default function CharCooccurrence(props) {
  const {
    data: { nodes, links },
  } = props

  return (
    <div>
      <svg height={500} width="960">
        <g className={style.nodes}>{nodes.map(node => <circle r={1} />)}</g>
      </svg>
    </div>
  )
}
