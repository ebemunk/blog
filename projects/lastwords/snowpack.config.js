// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
    hmr: true,
  },
  buildOptions: {
    /* ... */
    clean: true,
  },
  plugins: [['snowpack-plugin-url-loader']],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2017',
    entrypoints: ['./index.ts'],
    treeshake: true,
    splitting: true,
  },
  exclude: [
    '**/node_modules/**/*',
    'data/lastStatements/**',
    'data/stays/**',
    'data/dr_executed_offenders.html',
  ],
}
