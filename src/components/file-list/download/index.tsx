import React, { useCallback } from 'react';
import { Button } from 'rsuite';

import { useLocale } from '@/utils/hooks';

import FileList from '../index';

interface DownloadFileListProps {
  fileList: Array<FileEntity>;
  startDownload: (fileId: string) => void;
}

export default ({
  fileList,
  startDownload
}: DownloadFileListProps) => {
  const { formatMessage } = useLocale();
  const renderOps = useCallback((file: FileEntity) => {
    const handleDownload = () => {
      const { fileId } = file;
      startDownload(fileId);
    };

    return [
      <Button key='preview' size='sm'>{formatMessage('preview')}</Button>,
      <Button key='download' appearance='primary' size='sm' onClick={handleDownload}>{formatMessage('download')}</Button>
    ];
  }, [formatMessage, startDownload]);

  return (
    <FileList operations={renderOps} fileList={fileList} />
  );
};
