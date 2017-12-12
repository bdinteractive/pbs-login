const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  plugins: [
    new CopyWebpackPlugin([
      { from: 'node_modules/open-iconic/README.md', to: 'dist/README.md' }
      // { from: 'from/file.txt' },
      // { from: 'node_modules/open-iconic/svg/**/*', to: '/images/open-iconic' }
    ])
  ]
};
