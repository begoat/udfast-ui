import React, { useCallback } from 'react';
import { Button, Alert } from 'rsuite';

import { useLocale } from '@/utils/hooks';

import FileList from '../index';

interface DownloadFileListProps {
  fileList: Array<FileEntity>;
  startDownload: (fileId: string) => void;
  setSelectedDownloadId: React.Dispatch<React.SetStateAction<string>>;
}

export default ({
  fileList,
  startDownload,
  setSelectedDownloadId
}: DownloadFileListProps) => {
  const { formatMessage } = useLocale();
  const renderOps = useCallback((file: FileEntity) => {
    const handleDownload = () => {
      const { fileId } = file;
      startDownload(fileId);
    };

    const handlePreview = () => {
      const { fileId } = file;
      console.log('fileId', fileId);
      Alert.warning(formatMessage('fnNotSupport'));
    };

    return [
      <Button key='preview' size='sm' onClick={handlePreview}>{formatMessage('preview')}</Button>,
      <Button key='download' appearance='primary' size='sm' onClick={handleDownload}>{formatMessage('download')}</Button>
    ];
  }, [formatMessage, startDownload]);

  const handleClick = useCallback((file: FileEntity) => {
    const lastDownloadId = (file.downloadRecords || []).slice().pop() || '';
    setSelectedDownloadId(lastDownloadId);
  }, [setSelectedDownloadId]);

  return (
    <FileList operations={renderOps} fileList={fileList} clickHandler={handleClick} />
  );
};
