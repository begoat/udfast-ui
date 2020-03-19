export enum localeCandidate {
  EN_US = 'en-US',
  ZH_CN = 'zh-CN'
}

type LocalMap = {
  [locale in localeCandidate]: {
    path: string;
    locale: localeCandidate;
    i18n: string;
    default?: boolean;
  };
};

export const localeMap: LocalMap = {
  [localeCandidate.EN_US]: {
    path: 'en',
    locale: localeCandidate.EN_US,
    i18n: 'en',
    default: true
  },
  [localeCandidate.ZH_CN]: {
    path: 'zh',
    locale: localeCandidate.ZH_CN,
    i18n: 'zh',
  }
};

export const getLocalePathByLocale = (targetLocale: localeCandidate) => {
  return localeMap[targetLocale].path;
};

export const getLocalei18nByLocale = (targetLocale: localeCandidate) => {
  return localeMap[targetLocale].i18n;
};

export const getDefaultLocale = () => {
  let result = localeCandidate.EN_US;
  Object.keys(localeMap).map(l => {
    if (localeMap[l as localeCandidate].default) {
      result = localeMap[l as localeCandidate].locale;
    }
  });

  return result;
};
