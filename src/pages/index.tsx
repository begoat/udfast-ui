import React from 'react';
import { ReplaceComponentRendererArgs } from 'gatsby';

import SEO from '@/components/seo-helmet';
import Layout from '@/components/layout';
import LocaleProvider from '@/components/locale-provider';
import ErrorBoundary from '@/components/error-boundary';
import FileUploader from '@/components/file-uploader';
import UploaderInfo from '@/components/uploader-info';

import 'rsuite/dist/styles/rsuite-default.css';
// TODO: support dark mode in rsuite by dynamically change script
import './index.scss';

export default ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  return (
    <ErrorBoundary>
      <LocaleProvider locale={locale}>
        <Layout>
          <SEO title="upload-side" />
          <div className='file-uploader'>
            <FileUploader />
          </div>
          <div className='uploader-info'>
            <UploaderInfo peerId="123123123" />
          </div>
          <></>
        </Layout>
      </LocaleProvider>
    </ErrorBoundary>
  );
};
