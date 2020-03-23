import React from 'react';
import { ReplaceComponentRendererArgs } from 'gatsby';

import SEO from '@/components/seo-helmet';
import Layout from '@/components/layout';
import LocaleProvider from '@/components/locale-provider';
import ErrorBoundary from '@/components/error-boundary';


export default ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  return (
    <ErrorBoundary>
      <LocaleProvider locale={locale}>
        <Layout titleKey='downloadSide'>
          <SEO titleKey='downloadSide' />
          <></>
        </Layout>
      </LocaleProvider>
    </ErrorBoundary>
  );
};
