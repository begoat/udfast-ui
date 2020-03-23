import React, { useState, useEffect, useCallback } from 'react';
import { ReplaceComponentRendererArgs } from 'gatsby';
import { Alert } from 'rsuite';
import { globalHistory as history } from '@reach/router';
import * as queryString from 'query-string';

import SEO from '@/components/seo-helmet';
import Layout from '@/components/layout';
import LocaleProvider from '@/components/locale-provider';
import ErrorBoundary from '@/components/error-boundary';
import DownloadFilelist from '@/components/file-list/download';
import { initDSidePeer } from '@/utils/peer';
import { checkRunOnClient } from '@/utils/env';

import 'rsuite/dist/styles/rsuite-default.css';
import './d.scss';

let udfastCore: any;
if (checkRunOnClient()) {
  // eslint-disable-next-line global-require
  udfastCore = require('udfast-core');
}

export default ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  const { location: { search } } = history;
  const peerId: string = queryString.parse(search).peerId as any;
  const [loading, setLoading] = useState<boolean>(true);
  const [downloadController, setDownloadController] = useState<typeof udfastCore.DController>();
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    setLoading(true);
    initDSidePeer().then(dController => {
      setDownloadController(dController);
    }).catch(() => {
      Alert.error('Try Later And Contact Admin');
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  const getFileList = useCallback((dController: typeof udfastCore.DController) => {
    if (peerId) {
      dController.getFileList(peerId)
        .then((file: any) => {
          console.log('file!!!', file);
        });
    }
  }, [peerId]);

  useEffect(() => {
    if (downloadController) {
      getFileList(downloadController);
    }
  }, [downloadController]);

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
