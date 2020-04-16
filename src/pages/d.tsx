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
import LogContainer from '@/components/log-container';
import { initDSidePeer, DController, CbType } from '@/utils/peer';
import { generateDownloadId } from '@/utils/random';
import { getCurrTimestamp } from '@/utils/date';

import 'rsuite/dist/styles/rsuite-default.css';
import './d.scss';

export default ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  const { location: { search } } = history;
  const peerId: string = queryString.parse(search).peerId as any;
  const [loading, setLoading] = useState<boolean>(true);
  const [downloadController, setDownloadController] = useState<DController>();
  const [fileList, setFileList] = useState<Array<FileEntity>>([]);
  const [logs, setLogs] = useState<{ [downloadId: string]: Array<DownloadLogEntity> }>({});
  const [selectedDownloadId, setSelectedDownloadId] = useState('');

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
      Alert.info('requesting file list');
      dController.getFileList(peerId)
        .then(file => {
          Alert.success('file list resp received acc');
          setFileList(file.map(f => ({
            fileId: f.fileId,
            name: f.fileName,
            size: f.fileSize,
          })));
        })
        .catch(() => {
          Alert.error('get file list failed');
        });
    }
  }, [peerId]);

  const registerAcc = useCallback((downloadId: string, fileId: string) => {
    Alert.success('download file Acc');
    setLogs(prevLogs => ({
      ...prevLogs,
      [downloadId]: (prevLogs[downloadId] || []).concat([{ logType: 'acc', timestamp: getCurrTimestamp(), fileId }])
    }));
    console.log('downloadId', downloadId, 'downloadACC');
  }, []);

  const registerProgress = useCallback((downloadId: string, fileId: string, chunkIdx: number, totalNumOfChunks: number, type: 'start' | 'end') => {
    setLogs(prevLogs => ({
      ...prevLogs,
      [downloadId]: (prevLogs[downloadId] || []).concat([
        { logType: 'progress', timestamp: getCurrTimestamp(), chunkIdx, chunkStatus: type, totalNum: totalNumOfChunks, fileId }
      ])
    }));
    console.log('downloadId', downloadId, 'downloading', chunkIdx, totalNumOfChunks, type);
  }, []);

  const startDownload = useCallback((fileId: string) => {
    const downloadId = generateDownloadId();
    Alert.info(`start downloading File ${fileId}`);
    // eslint-disable-next-line no-unused-expressions
    downloadController?.initDownload(downloadId, peerId, fileId)
      .then(() => {
        Alert.success('download worker ready, let\'s go');
        setFileList(prevList => prevList.map(p => {
          if (p.fileId === fileId) {
            return {
              ...p,
              downloadRecords: (p.downloadRecords || []).concat([downloadId])
            };
          }

          return p;
        }));
        downloadController?.registerCbOnDownloadId(downloadId, () => {
          registerAcc(downloadId, fileId);
        }, CbType.ACC);
        downloadController?.registerCbOnDownloadId(downloadId, (chunkIdx: number, totalNumOfChunks: number, type: 'start' | 'end') => {
          registerProgress(downloadId, fileId, chunkIdx, totalNumOfChunks, type);
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
                  <DownloadFilelist fileList={fileList} setSelectedDownloadId={setSelectedDownloadId} startDownload={startDownload} />
                )
              }
            </div>
            <div className='2'>
              {
                loading ? (
                  <Loader />
                ) : (
                  <LogContainer logs={logs[selectedDownloadId] || []} />
                )
              }
            </div>
          </div>
        </Layout>
      </LocaleProvider>
    </ErrorBoundary>
  );
};
