const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // do type check

module.exports = {
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      silent: true,
      formatter: 'codeframe',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
};
