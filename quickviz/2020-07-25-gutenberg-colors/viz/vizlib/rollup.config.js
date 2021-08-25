import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import visualizer from 'rollup-plugin-visualizer'

import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
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
      resolve(),
      commonjs(),
      typescript(),
      // terser(),
      visualizer({
        filename: './dist/stats.html',
        sourcemap: true,
      }),
    ],
  },
]
