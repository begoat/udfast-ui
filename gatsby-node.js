/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const customConfig = require('./webpack.custom.js');
exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {
  if (stage !== 'develop') {
    return;
  }

  actions.setWebpackConfig(customConfig);
}
