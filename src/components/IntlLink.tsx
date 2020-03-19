import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';

import { localeCandidate, getDefaultLocale, getLocalePathByLocale } from '@/locales';
import { useLocale } from '@/utils/hooks';

export const getLocaledPathByPathAndLocale = (targetLocale: localeCandidate, to: string) => {
  const isDefault = getDefaultLocale() === targetLocale;
  return isDefault ? to : `/${getLocalePathByLocale(targetLocale)}${to}`;
};

const LocalizedLink = ({ to, ref, ...props }: GatsbyLinkProps<any>) => {
  const { locale } = useLocale();
  const path = getLocaledPathByPathAndLocale(locale as localeCandidate, to);
  return <Link {...props} to={path} />;
};

export default LocalizedLink;
