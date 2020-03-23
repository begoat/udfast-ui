import React, { useCallback } from 'react';
import { Button } from 'rsuite';
import { globalHistory as history } from '@reach/router';
import { navigate } from 'gatsby';

import { localeCandidate, getLocalei18nByLocale, getLocalePathByLocale } from '@/locales';
import { useLocale } from '@/utils/hooks';

export default () => {
  const { formatMessage, locale } = useLocale();
  const { location: { pathname } } = history;

  const handleSwitchLang = useCallback(() => {
    const localePath = getLocalePathByLocale(locale);
    const rawSlug = pathname.replace(`${localePath}/`, '');
    const newPathname = locale === localeCandidate.EN_US ? `${getLocalePathByLocale(localeCandidate.ZH_CN)}/${rawSlug}` : rawSlug;
    navigate(newPathname);
  }, [pathname, locale]);

  return (
    <Button onClick={handleSwitchLang}>{formatMessage(getLocalei18nByLocale(locale) as any)}</Button>
  );
};
