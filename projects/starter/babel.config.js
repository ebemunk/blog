module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: '> 0.25%, not dead',
        useBuiltIns: 'usage',
      },
    ],
    '@babel/react',
  ],
  plugins: ['react-hot-loader/babel'],
}
