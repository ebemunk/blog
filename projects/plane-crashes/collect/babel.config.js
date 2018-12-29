module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: { node: true },
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: [],
}
