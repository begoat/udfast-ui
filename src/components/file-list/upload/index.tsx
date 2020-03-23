import React, { useCallback } from 'react';
import { Button } from 'rsuite';

import { useLocale } from '@/utils/hooks';

import FileList from '../index';

interface UploadFileListProps {
  fileList: Array<CustomFile>;
}

export default ({
  fileList
}: UploadFileListProps) => {
  const { formatMessage } = useLocale();
  const renderOps = useCallback((file: CustomFile) => {
    return [
      <Button key='encrypt' size='sm'>{file.passwd ? formatMessage('decrypt') : formatMessage('encrypt')}</Button>,
      <Button key='hide' size='sm'>{file.hidden ? formatMessage('hide') : formatMessage('show')}</Button>,
      <Button key='delete' size='sm'>{formatMessage('delete')}</Button>,
      <Button key='details' appearance='primary' size='sm'>{formatMessage('details')}</Button>
    ];
  }, [formatMessage]);

  return (
    <FileList operations={renderOps} fileList={fileList} />
  );
};
