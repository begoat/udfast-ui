import React, { useCallback } from 'react';
import { Button } from 'rsuite';
import { globalHistory as history } from '@reach/router';
import { navigate, Link, withPrefix } from 'gatsby';

import { localeCandidate, getLocalei18nByLocale, getLocalePathByLocale } from '@/locales';
import { useLocale } from '@/utils/hooks';

const getRealPrefix = () => withPrefix('/udfast-ui') ? 'udfast-ui' : '';

export default () => {
  const { formatMessage, locale } = useLocale();
  const { location: { pathname } } = history;

  const localePath = getLocalePathByLocale(locale);
  const rawSlug = `${getRealPrefix()}${pathname.replace(`${getRealPrefix()}${localePath}/`, '')}`;

  // const handleSwitchLang = useCallback(() => {
  //   const newPathname = locale === localeCandidate.EN_US ? `${getLocalePathByLocale(localeCandidate.ZH_CN)}/${rawSlug}` : rawSlug;
  //   navigate(newPathname);
  // }, [pathname, locale]);

  return (
    <Link to={locale === localeCandidate.EN_US ? `${getLocalePathByLocale(localeCandidate.ZH_CN)}/${rawSlug}` : rawSlug}>
      {formatMessage(getLocalei18nByLocale(locale) as any)}
    </Link>
  );
};
