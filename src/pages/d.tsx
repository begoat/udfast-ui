import React, { useState, useEffect } from 'react';
import { ReplaceComponentRendererArgs } from 'gatsby';
import { DController } from 'udfast-core';
import { Alert } from 'rsuite';

import SEO from '@/components/seo-helmet';
import Layout from '@/components/layout';
import LocaleProvider from '@/components/locale-provider';
import ErrorBoundary from '@/components/error-boundary';
import DownloadFilelist from '@/components/file-list/download';
import { initDSidePeer } from '@/utils/peer';

import 'rsuite/dist/styles/rsuite-default.css';
import './d.scss';

export default ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  const [loading, setLoading] = useState<boolean>(true);
  const [downloadController, setDownloadController] = useState<DController>();
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    setLoading(true);
    initDSidePeer().then(dController => {
      setDownloadController(dController);
      // dController.getFileList();
    }).catch(() => {
      Alert.error('Try Later And Contact Admin');
    }).finally(() => {
      setLoading(false);
    });
  }, []);

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
