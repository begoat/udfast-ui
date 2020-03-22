import React from 'react';
import { Button } from 'rsuite';

import { useLocale } from '@/utils/hooks';
import { formatLastModifyDate } from '@/utils/date';

import fileListStyle from './index.module.scss';

export interface CustomFile extends File {
  fileId: string;
  hidden: boolean;
  passwd: string;
}

interface FileListProps {
  fileList?: Array<CustomFile>;
}

export default ({
  fileList = [
    {
      name: '12313',
      size: 123,
      fileId: 'dmeo',
      lastModified: 1584845614139,
    },
    {
      name: 'sda,akdlas',
      size: 12322,
      fileId: 'dmeo222',
      lastModified: 1584845614139,
    },
  ] as Array<CustomFile>,
}: FileListProps) => {
  const { formatMessage } = useLocale();
  return (
    <div className={fileListStyle.container}>
      {
        fileList.map(f => (
          <div className={fileListStyle.entity} key={`${f.name}-${f.lastModified}`}>
            <div className={fileListStyle.top}>
              <span>{formatMessage('fileName')}:{f.name}</span>
              <span>{formatMessage('fileSize')}:{f.size}</span>
            </div>
            <div className={fileListStyle.top}>
              <span>{formatMessage('lastMTime')}:{formatLastModifyDate(new Date(f.lastModified))}</span>
              <span>{formatMessage('fileId')}:{f.fileId}</span>
            </div>
            <div className={fileListStyle.bottom}>
              <Button size='sm'>{f.passwd ? formatMessage('decrypt') : formatMessage('encrypt')}</Button>
              <Button size='sm'>{f.hidden ? formatMessage('hide') : formatMessage('show')}</Button>
              <Button size='sm'>{formatMessage('delete')}</Button>
              <Button appearance='primary' size='sm'>{formatMessage('details')}</Button>
            </div>
          </div>
        ))
      }
    </div>
  );
};
