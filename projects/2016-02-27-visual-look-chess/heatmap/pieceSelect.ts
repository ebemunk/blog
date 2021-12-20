import pieceSvg from '../board/pieceSvg'

const pieceSelect = ({ color, onclick, selected }) => selection => {
  selection
    .selectAll('button')
    .data([
      `${color === 'w' ? 'A' : 'a'}`,
      ...Object.keys(pieceSvg).filter(d =>
        color === 'w' ? d.toUpperCase() === d : d.toLowerCase() === d
      ),
    ])
    .join('button')
    .html(d =>
      !['A', 'a'].includes(d)
        ? `<img src=${pieceSvg[d]} width=20 height=20 />`
        : `${color === 'w' ? 'White' : 'Black'} - All`
    )
    .on('click', onclick)
    .attr('class', d => {
      return selected === d ? 'active' : null
    })
}

export default pieceSelect
