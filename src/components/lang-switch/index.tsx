import React from 'react';
import { globalHistory as history } from '@reach/router';
import { Link } from 'gatsby';

import { localeCandidate, getLocalei18nByLocale, getLocalePathByLocale } from '@/locales';
import { useLocale } from '@/utils/hooks';
import { getRealPrefix } from '@/utils/location';

export default () => {
  const { formatMessage, locale } = useLocale();
  const { location: { pathname } } = history;
  const localePath = getLocalePathByLocale(locale);
  const rawSlug = `${pathname.replace(`${getRealPrefix()}${localePath}`, '')}`;

  return (
    <Link
      to={
        locale === localeCandidate.EN_US
          ? `${getLocalePathByLocale(localeCandidate.ZH_CN)}/${rawSlug}`
          : `${getLocalePathByLocale(localeCandidate.EN_US)}/${rawSlug}`
      }
    >
      {formatMessage(getLocalei18nByLocale(locale) as any)}
    </Link>
  );
};
