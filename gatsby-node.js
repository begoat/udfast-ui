// https://www.gatsbyjs.org/docs/node-apis/
require("@babel/register")({
  cwd: __dirname,
  extensions: ['.ts'],
  presets: ["@babel/env", "@babel/typescript"],
});
const customConfig = require('./webpack.custom.js');
const locales = require('./src/locales/locale-route.ts');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig(customConfig);
}

// https://www.gatsbyjs.org/docs/creating-and-modifying-pages/
// https://medium.com/significa/i18n-with-gatsby-528607b4da81
// https://www.gatsbyjs.org/docs/creating-a-local-plugin/
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage, createRedirect } = actions;
  return new Promise(resolve => {
    deletePage(page);
    // https://github.com/gatsbyjs/gatsby/issues/18665
    createRedirect({ fromPath: '/', toPath: '/u', isPermanent: true, redirectInBrowser: true });
    Object.keys(locales.localeMap).map(lang => {
      const { locale: currentLocale, path: currentLocalePath } = locales.localeMap[lang];
      const localizedPath = `${locales.getDefaultLocale() === currentLocale ? '' : currentLocalePath}${page.path}`;
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: currentLocale
        }
      });
    });

    resolve();
  })
};