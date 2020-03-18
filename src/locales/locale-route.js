var localeMap = {
  en: {
    path: 'en',
    locale: 'en-US',
    default: true
  },
  zh: {
    path: 'zh',
    locale: 'zh-CN',
  }
}

var getLocalePathByLocale = function(targetLocale) {
  var result = 'en';
  Object.keys(localeMap).map(function(l) {
    if (localeMap[l].locale === targetLocale) {
      result = localeMap[l].path;
    }
  });

  return result;
}

var getDefaultLocale = function() {
  var result = 'en-US';
  Object.keys(localeMap).map(function(l) {
    if (localeMap[l].default) {
      result = localeMap[l].locale;
    }
  });

  return result;
}

module.exports = {
  localeMap,
  getDefaultLocale,
  getLocalePathByLocale
}