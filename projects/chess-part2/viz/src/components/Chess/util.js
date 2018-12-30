export const getFileRank = square => {
  const file = 'abcdefgh'.indexOf(square[0])
  const rank = +square[1]
  return { file, rank }
}

export const getSqCoords = (square, width, midpoint = false) => {
  const { file, rank } = getFileRank(square)
  let x = file * width
  let y = (8 - rank) * width

  if (midpoint) {
    x += width / 2
    y += width / 2
  }

  return [x, y]
}

export const translateSq = (square, width, midpoint = false) => {
  const [x, y] = getSqCoords(square, width, midpoint)
  return `translate(${x}, ${y})`
}

export const squareFromIndex = index => {
  const file = index % 8
  const rank = Math.floor(index / 8)
  const black = (file + rank) % 2 === 1
  const square = `${'abcdefgh'[file]}${8 - rank}`
  return { file, rank, black, square }
}
