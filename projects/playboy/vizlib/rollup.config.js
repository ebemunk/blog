import resolve from '@rollup/plugin-node-resolve'
import swc from 'rollup-plugin-swc'
// import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import visualizer from 'rollup-plugin-visualizer'

import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies),
    output: [
      { file: pkg.module, format: 'es', sourcemap: true },
      {
        file: pkg.main,
        format: 'umd',
        sourcemap: true,
        name: 'vizlib',
      },
    ],
    plugins: [
      resolve({
        extensions: ['.ts', '.tsx'],
      }),
      // commonjs(),
      swc({
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2021',
          loose: true,
        },
      }),
      // terser(),
      visualizer({
        filename: './dist/stats.html',
        sourcemap: true,
      }),
    ],
  },
]
