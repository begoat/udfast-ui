import React, { useCallback, useMemo } from 'react';
import { Button, Alert } from 'rsuite';

import { useLocale } from '@/utils/hooks';

import FileList from '../index';

interface UploadFileListProps {
  fileList: Array<UploadFileEntity>;
  setFileList: React.Dispatch<React.SetStateAction<UploadFileEntity[]>>;
}

export default ({
  fileList,
  setFileList,
}: UploadFileListProps) => {
  const { formatMessage } = useLocale();
  const renderOps = useCallback((file: FileEntity) => {
    const showNotSupport = () => {
      console.log('fileId', file.fileId);
      Alert.warning(formatMessage('fnNotSupport'));
    };

    const handleEncrypt = () => {
      showNotSupport();
    };

    const handleHide = () => {
      console.log('fileId', file.fileId);
      setFileList(f => f.map(ff => ff.fileId === file.fileId ? { ...ff, hidden: !ff.hidden } : ff));
    };

    const handleDelete = () => { // TODO: unregister that file, should notify the download side
      console.log('fileId', file.fileId);
      setFileList(f => f.filter(ff => ff.fileId !== file.fileId));
    };

    const handleDetail = () => {
      showNotSupport();
    };

    return [
      <Button key='encrypt' size='sm' onClick={handleEncrypt}>{file.passwd ? formatMessage('decrypt') : formatMessage('encrypt')}</Button>,
      <Button key='hide' size='sm' onClick={handleHide}>{file.hidden ? formatMessage('hide') : formatMessage('show')}</Button>,
      <Button key='delete' size='sm' onClick={handleDelete}>{formatMessage('delete')}</Button>,
      <Button key='details' appearance='primary' size='sm' onClick={handleDetail}>{formatMessage('details')}</Button>
    ];
  }, [formatMessage, setFileList]);

  const fileInfoList: FileEntity[] = useMemo(() => {
    return fileList.map(f => ({
      fileId: f.fileId,
      name: f.fileObj.name,
      size: f.fileObj.size,
      lastModified: f.fileObj.lastModified
    }));
  }, [fileList]);

  return (
    <FileList operations={renderOps} fileList={fileInfoList} />
  );
};
