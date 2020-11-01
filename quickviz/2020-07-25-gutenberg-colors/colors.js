const fs = require('fs/promises')
const path = require('path')

const firstSentences = require('./firstSentences')

// console.log('fi', firstSentences)

const colors = [
  'alice blue',
  'antique white',
  'aqua',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  'black',
  'blanched almond',
  'blue',
  'blue violet',
  'brown',
  'burly wood',
  'cadet blue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflower blue',
  'cornsilk',
  'crimson',
  'cyan',
  'dark blue',
  'dark cyan',
  'dark golden rod',
  'dark gray',
  'dark grey',
  'dark green',
  'dark khaki',
  'dark magenta',
  'dark olive green',
  'dark orange',
  'dark orchid',
  'dark red',
  'dark salmon',
  'dark sea green',
  'dark slate blue',
  'dark slate gray',
  'dark slate grey',
  'dark turquoise',
  'dark violet',
  'deep pink',
  'deep sky blue',
  'dim gray',
  'dim grey',
  'dodger blue',
  'fire brick',
  'floral white',
  'forest green',
  'fuchsia',
  'gainsboro',
  'ghost white',
  'gold',
  'golden rod',
  'gray',
  'grey',
  'green',
  'green yellow',
  'honey dew',
  'hot pink',
  'indian red',
  'indigo',
  'ivory',
  'khaki',
  'lavender',
  'lavender blush',
  'lawn green',
  'lemon chiffon',
  'light blue',
  'light coral',
  'light cyan',
  'light golden rod yellow',
  'light gray',
  'light grey',
  'light green',
  'light pink',
  'light salmon',
  'light sea green',
  'light sky blue',
  'light slate gray',
  'light slate grey',
  'light steel blue',
  'light yellow',
  'lime',
  'lime green',
  'linen',
  'magenta',
  'maroon',
  'medium aqua marine',
  'medium blue',
  'medium orchid',
  'medium purple',
  'medium sea green',
  'medium slate blue',
  'medium spring green',
  'medium turquoise',
  'medium violet red',
  'midnight blue',
  'mint cream',
  'misty rose',
  'moccasin',
  'navajo white',
  'navy',
  'old lace',
  'olive',
  'olive drab',
  'orange',
  'orange red',
  'orchid',
  'pale golden rod',
  'pale green',
  'pale turquoise',
  'pale violet red',
  'papaya whip',
  'peach puff',
  'peru',
  'pink',
  'plum',
  'powder blue',
  'purple',
  'rebecca purple',
  'red',
  'rosy brown',
  'royal blue',
  'saddle brown',
  'salmon',
  'sandy brown',
  'sea green',
  'sea shell',
  'sienna',
  'silver',
  'sky blue',
  'slate blue',
  'slate gray',
  'slate grey',
  'snow',
  'spring green',
  'steel blue',
  'tan',
  'teal',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  'white',
  'white smoke',
  'yellow',
  'yellow green',
].sort((a, b) => b.length - a.length)

// console.log('colors', colors)

const readBook = async path => {
  let book = await fs.readFile(path, { encoding: 'utf-8' })

  const colormap = colors.reduce(
    (acc, color) => ({
      ...acc,
      [color]: [],
    }),
    {},
  )
  const matchIndexes = []

  colors.forEach(color => {
    const regex = new RegExp(`\\b${color}\\b`, 'gi')

    let match
    while ((match = regex.exec(book)) !== null) {
      if (matchIndexes.indexOf(match.index) > -1) return

      colormap[color].push(match.index)
      for (let i = 0; i <= color.length; i++) {
        matchIndexes.push(match.index + i)
      }
    }
  })

  let [pre, author, title] = path.split(' | ')
  title = title.replace('.txt', '')
  const pa = pre.split('/')
  const pos = +pa[pa.length - 1]

  // console.log('tea', title)

  return {
    title,
    author,
    length: book.length,
    pos,
    firstSentence: firstSentences[pos],
    colormap,
  }
}

const run = async () => {
  const files = await fs.readdir(path.resolve(__dirname, './books'))

  const colormaps = await Promise.allSettled(
    files.map(file => readBook(path.resolve(__dirname, './books', file))),
  )

  await fs.writeFile(
    'data.json',
    JSON.stringify(
      colormaps
        .filter(p => p.status === 'fulfilled')
        .map(p => p.value)
        .sort((a, b) => a.pos - b.pos),
      null,
      2,
    ),
  )
}

run()

module.exports = {
  readBook,
}
