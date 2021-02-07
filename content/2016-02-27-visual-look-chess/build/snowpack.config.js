// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  // plugins: [['@snowpack/plugin-webpack']],
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
    out: '../../content/2016-02-27-visual-look-chess/build',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2017',
    entrypoints: ['index.ts'],
    treeshake: true,
    splitting: true,
  },
}
