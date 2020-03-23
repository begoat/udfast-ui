import React, { useState } from 'react';
import { ReplaceComponentRendererArgs } from 'gatsby';

import SEO from '@/components/seo-helmet';
import Layout from '@/components/layout';
import LocaleProvider from '@/components/locale-provider';
import ErrorBoundary from '@/components/error-boundary';
import DownloadFilelist from '@/components/file-list/download';

import 'rsuite/dist/styles/rsuite-default.css';
import './d.scss';

export default ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  const [fileList, setFileList] = useState([]);
  return (
    <ErrorBoundary>
      <LocaleProvider locale={locale}>
        <Layout titleKey='downloadSide'>
          <SEO titleKey='downloadSide' />
          <div className="body-container">
            <div className='file-list'>
              <DownloadFilelist fileList={fileList} />
            </div>
          </div>
        </Layout>
      </LocaleProvider>
    </ErrorBoundary>
  );
};
