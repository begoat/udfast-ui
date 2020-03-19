import React from 'react';
import { ReplaceComponentRendererArgs } from 'gatsby';

import LocaleProvider from '@/components/LocaleProvider';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  return (
    <LocaleProvider locale={locale}>
      <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </LocaleProvider>
  );
};

export default NotFoundPage;
