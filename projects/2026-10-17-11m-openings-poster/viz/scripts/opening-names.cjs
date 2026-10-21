// Regenerates src/data/opening-names-2m.json: SAN path ("e4 c5 Nf3") -> ECO name.
// Names come from the 2016 project's ecos.json, keyed by FEN board (first field),
// which was built from niklasf/eco by projects/2016-02-27-visual-look-chess/eco.js.
// chess.js is not a dependency of this workbench; run with it installed elsewhere:
//   npm i --prefix /tmp/chessjs-tool chess.js@0.13.4
//   CHESSJS=/tmp/chessjs-tool/node_modules/chess.js node scripts/opening-names.cjs \
//     src/data/openings-2m.json ../../2016-02-27-visual-look-chess/ecos.json src/data/opening-names-2m.json
const fs = require('fs')
const { Chess } = require(process.env.CHESSJS || 'chess.js')
const [tree, ecos, out] = process.argv.slice(2).map((p, i) => i < 2 ? JSON.parse(fs.readFileSync(p)) : p)
const result = {}
let nodes = 0, hits = 0
function walk(n, path) {
  for (const c of n.children || []) {
    const p = [...path, c.san]
    const chess = new Chess()
    for (const m of p) if (!chess.move(m)) throw new Error('bad move ' + p.join(' '))
    const name = ecos[chess.fen().split(' ')[0]]
    nodes++
    if (name) { result[p.join(' ')] = name; hits++ }
    walk(c, p)
  }
}
walk(tree, [])
fs.writeFileSync(out, JSON.stringify(result, null, 1) + '\n')
console.log({ nodes, hits })
