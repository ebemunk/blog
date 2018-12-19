module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
        },
        useBuiltIns: 'usage',
      },
    ],
    '@babel/react',
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
  ],
}
