import React from 'react';
import { ReplaceComponentRendererArgs } from 'gatsby';

import SEO from '@/components/seo';
import Layout from '@/components/layout';
import LocaleProvider from '@/components/LocaleProvider';

import './index.scss';

export default ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  return (
    <LocaleProvider locale={locale}>
      <Layout>
        <SEO title="upload-side" />
        <></>
      </Layout>
    </LocaleProvider>
  );
};
