import React, { useState, useEffect, useCallback } from 'react';
import { ReplaceComponentRendererArgs } from 'gatsby';
import { Alert, Loader } from 'rsuite';
import { globalHistory as history } from '@reach/router';
import * as queryString from 'query-string';

import SEO from '@/components/seo-helmet';
import Layout from '@/components/layout';
import LocaleProvider from '@/components/locale-provider';
import ErrorBoundary from '@/components/error-boundary';
import DownloadFilelist from '@/components/file-list/download';
import { initDSidePeer, DController, CbType } from '@/utils/peer';
import { generateDownloadId } from '@/utils/random';

import 'rsuite/dist/styles/rsuite-default.css';
import './d.scss';

export default ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  const { location: { search } } = history;
  const peerId: string = queryString.parse(search).peerId as any;
  const [loading, setLoading] = useState<boolean>(true);
  const [downloadController, setDownloadController] = useState<DController>();
  const [fileList, setFileList] = useState<Array<FileEntity>>([]);

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

  const getFileList = useCallback((dController: DController) => {
    if (peerId) {
      dController.getFileList(peerId)
        .then(file => {
          setFileList(file.map(f => ({
            fileId: f.fileId,
            name: f.fileName,
            size: f.fileSize,
          })));
        });
    }
  }, [peerId]);

  const registerAcc = useCallback((downloadId: string) => {
    console.log('downloadId', downloadId, 'downloadACC');
  }, []);

  const registerProgress = useCallback((downloadId: string, chunkIdx: number, totalNumOfChunks: number, type: 'start' | 'download') => {
    console.log('downloadId', downloadId, 'downloading', chunkIdx, totalNumOfChunks, type);
  }, []);

  const startDownload = useCallback((fileId: string) => {
    const downloadId = generateDownloadId();
    // eslint-disable-next-line no-unused-expressions
    downloadController?.initDownload(downloadId, peerId, fileId)
      .then(() => {
        downloadController?.registerCbOnDownloadId(downloadId, () => {
          registerAcc(downloadId);
        }, CbType.ACC);
        downloadController?.registerCbOnDownloadId(downloadId, (chunkIdx: number, totalNumOfChunks: number, type: 'start' | 'download') => {
          registerProgress(downloadId, chunkIdx, totalNumOfChunks, type);
        }, CbType.PROGRESS);
        downloadController.startDownloadFile(downloadId);
      });
  }, [downloadController, peerId, registerAcc]);

  useEffect(() => {
    if (downloadController) {
      getFileList(downloadController);
    }
  }, [downloadController, getFileList]);

  return (
    <ErrorBoundary>
      <LocaleProvider locale={locale}>
        <Layout titleKey='downloadSide'>
          <SEO titleKey='downloadSide' />
          <div className="body-container">
            <div className='file-list'>
              {
                loading ? (
                  <Loader />
                ) : (
                  <DownloadFilelist fileList={fileList} startDownload={startDownload} />
                )
              }
            </div>
          </div>
        </Layout>
      </LocaleProvider>
    </ErrorBoundary>
  );
};
