import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';

import { useLocale } from '@/locales/index';
import { getDefaultLocale, getLocalePathByLocale } from '@/locales/locale-route';

const LocalizedLink = ({ to, ref, ...props }: GatsbyLinkProps<any>) => {
  const { locale } = useLocale();
  // FIXME: error boundary and analytics should be generated when visit 404 page
  // build error because of alias
  const isDefault = getDefaultLocale() === locale;
  const path = isDefault ? to : `/${getLocalePathByLocale(locale)}${to}`;
  return <Link {...props} to={path} />;
};

export default LocalizedLink;
