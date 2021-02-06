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
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2017',
    entrypoints: ['index.ts'],
  },
}
