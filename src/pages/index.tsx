import React from 'react';
import { Redirect } from '@reach/router';
import { ReplaceComponentRendererArgs } from 'gatsby';

import { getRealPrefix } from '@/utils/location';
import { getLocalePathByLocale } from '@/locales';

export default ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  const localePath = getLocalePathByLocale(locale);
  console.log('localePath', localePath, locale);
  return (
    <Redirect noThrow to={`${getRealPrefix()}${localePath === '' ? localePath : `${localePath}/`}u`} />
  );
};
