import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'

const pkg = require('./package.json')

export default {
  input: 'src/lambda.js',
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        'stage-0',
        [
          'env',
          {
            targets: {
              node: '6.10'
            },
            modules: false
          }
        ]
      ]
    }),
  ],
  output: [
    {
      file: 'dist/lambda.js',
      format: 'cjs',
      sourcemap: true
    }
  ]
}
