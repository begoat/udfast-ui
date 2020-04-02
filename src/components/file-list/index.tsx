import React from 'react';
import { ReactSVG } from 'react-svg';
import { globalHistory as history } from '@reach/router';

import { useLocale } from '@/utils/hooks';
import { formatLastModifyDate } from '@/utils/date';
import { getFileIdentifierAttr, fmtFileSize } from '@/utils/data';

import fileListStyle from './index.module.scss';

export interface FileListProps {
  fileList: Array<FileEntity>;
  operations: (file: FileEntity) => JSX.Element[];
}

export default ({
  fileList = [],
  operations
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
          <div className={fileListStyle.entity} key={getFileIdentifierAttr(f)}>
            <div className={fileListStyle.top}>
              <span>{formatMessage('fileName')}:{f.name}</span>
              <span>{formatMessage('fileSize')}:{fmtFileSize(f.size)}</span>
            </div>
            <div className={fileListStyle.top}>
              {
                f.lastModified && (
                  <span>{formatMessage('lastMTime')}:{f.lastModified && formatLastModifyDate(new Date(f.lastModified))}</span>
                )
              }
              <span>{formatMessage('fileId')}:{f.fileId}</span>
            </div>
            <div className={fileListStyle.bottom}>
              {operations(f)}
            </div>
          </div>
        ))
      }
    </div>
  );
};
