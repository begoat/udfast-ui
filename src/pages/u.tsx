import React, { useState, useEffect, useCallback } from 'react';
import { ReplaceComponentRendererArgs } from 'gatsby';
import { Alert } from 'rsuite';

import SEO from '@/components/seo-helmet';
import Layout from '@/components/layout';
import LocaleProvider from '@/components/locale-provider';
import ErrorBoundary from '@/components/error-boundary';
import FileUploader from '@/components/file-uploader';
import UploaderInfo from '@/components/uploader-info';
import UploadFileList from '@/components/file-list/upload';
import { initUSidePeer, UploadController } from '@/utils/peer';
import { checkFileExisted } from '@/utils/data';

import 'rsuite/dist/styles/rsuite-default.css';
import './u.scss';

export default ({ pathContext }: ReplaceComponentRendererArgs) => {
  const { locale } = pathContext as any;
  const [loading, setLoading] = useState<boolean>(true);
  const [uploadController, setUploadController] = useState<UploadController>();
  const [fileList, setFileList] = useState<UploadFileEntity[]>([]);

  const handleSelectNewFile = useCallback((files: File[]) => {
    setFileList(prevFileList => {
      return files.reduce((accu, curr) => {
        if (checkFileExisted(curr, prevFileList.map(p => p.fileObj))) {
          return accu;
        }

        const fileId = uploadController?.registerFile(curr) || '';
        let uploadFileEntity: UploadFileEntity = {
          fileObj: curr,
          fileId,
          hidden: false,
          passwd: '',
        };
        accu = accu.concat([uploadFileEntity]);
        return accu;
      }, prevFileList);
    });
  }, [uploadController]);

  useEffect(() => {
    setLoading(true);
    initUSidePeer().then(uController => {
      setUploadController(uController);
    }).catch(() => {
      Alert.error('Try Later And Contact Admin');
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <ErrorBoundary>
      <LocaleProvider locale={locale}>
        <Layout titleKey='uploadSide'>
          <SEO titleKey='uploadSide' />
          <div className="body-container">
            <div>
              <div className='file-uploader'>
                <FileUploader loading={loading} handleSelectNewFile={handleSelectNewFile} />
              </div>
              <div className='uploader-info'>
                <UploaderInfo peerId={uploadController?.getMainPeerId() || ''} />
              </div>
            </div>
            <div className='file-list'>
              <UploadFileList fileList={fileList} setFileList={setFileList} />
            </div>
          </div>
        </Layout>
      </LocaleProvider>
    </ErrorBoundary>
  );
};
