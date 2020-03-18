// See: https://www.gatsbyjs.org/docs/node-apis/
const customConfig = require('./webpack.custom.js');
const locales = require('./src/locales/locale-route.js');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage !== 'develop') {
    return;
  }

  actions.setWebpackConfig(customConfig);
}

// https://www.gatsbyjs.org/docs/creating-and-modifying-pages/
// https://medium.com/significa/i18n-with-gatsby-528607b4da81
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  return new Promise(resolve => {
    deletePage(page);
    Object.keys(locales.localeMap).map(lang => {
      const { locale: currentLocale, path: currentLocalePath } = locales.localeMap[lang];
      const localizedPath = locales.getDefaultLocale() === currentLocale ? page.path : currentLocalePath + page.path;
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