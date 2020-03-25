import React, { useCallback } from 'react';
import { Button } from 'rsuite';

import { useLocale } from '@/utils/hooks';

import FileList from '../index';

interface DownloadFileListProps {
  fileList: Array<FileEntity>;
}

export default ({
  fileList
}: DownloadFileListProps) => {
  const { formatMessage } = useLocale();
  const renderOps = useCallback(() => {
    return [
      <Button key='preview' size='sm'>{formatMessage('preview')}</Button>,
      <Button key='download' appearance='primary' size='sm'>{formatMessage('download')}</Button>
    ];
  }, [formatMessage]);

  return (
    <FileList operations={renderOps} fileList={fileList} />
  );
};
