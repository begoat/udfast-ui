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
    // FIXME: don't use this form of redirect! just create an index.html and return a <Redirect /> is fine.
    // createRedirect({ fromPath: '/', toPath: '/u', isPermanent: true, redirectInBrowser: true });
    createRedirect({ fromPath: '/zh', toPath: '/zh/zh', isPermanent: true, redirectInBrowser: true });
    createRedirect({ fromPath: '/zh/', toPath: '/zh/zh', isPermanent: true, redirectInBrowser: true });
    Object.keys(locales.localeMap).map(lang => {
      const { locale: currentLocale, path: currentLocalePath } = locales.localeMap[lang];
      const localizedPath = `${currentLocalePath}${page.path}`;
      if (localizedPath === '/zh') { // FIXME: don't know why it will generate /zh/zh /zh at the same time
        resolve();
        return;
      }

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