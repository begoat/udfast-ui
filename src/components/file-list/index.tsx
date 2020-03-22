import React from 'react';
import { Button } from 'rsuite';
import { ReactSVG } from 'react-svg';
// eslint-disable-next-line
import { globalHistory as history } from '@reach/router'

import { useLocale } from '@/utils/hooks';
import { formatLastModifyDate } from '@/utils/date';

import fileListStyle from './index.module.scss';

export interface CustomFile extends File {
  fileId: string;
  hidden: boolean;
  passwd: string;
}

interface FileListProps {
  fileList: Array<CustomFile>;
}

export default ({
  fileList = [],
}: FileListProps) => {
  const { formatMessage } = useLocale();
  const { location: { origin } } = history;
  if (!fileList.length) {
    return <ReactSVG className={fileListStyle.rsvg} src={`${origin}/baby-boy.svg`} />;
  }

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
