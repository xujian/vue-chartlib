const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.less$/,
    exclude: /node_modules/,
    loaders: ['style-loader', 'css-loader', 'less-loader']
  }, {
    test: /\.(ts|tsx)$/,
    use: [{
      loader: require.resolve('awesome-typescript-loader'),
      options: { parser: 'typescript' },
    }]
  // }, {
  //   test: /\.stories\.jsx?$/,
  //   loaders: [require.resolve('storybook-addon-chartlib/loader')],
  //   enforce: 'pre',
  });
  config.resolve.alias['@'] = path.resolve(__dirname,
  '../src')
  config.resolve.alias['vue$'] = path.resolve(__dirname,
  '../../designer/node_modules/vue/dist/vue.esm.js')
  config.resolve.extensions.push('.ts', '.tsx');
  // Return the altered config
  return config;
};
