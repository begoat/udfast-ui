import React from 'react';
import { ReactSVG } from 'react-svg';

import { useLocale } from '@/utils/hooks';
import { formatLastModifyDate } from '@/utils/date';
import { getFileIdentifierAttr, fmtFileSize } from '@/utils/data';
import { prefixImgPath } from '@/utils/location';

import fileListStyle from './index.module.scss';

export interface FileListProps {
  fileList: Array<FileEntity>;
  operations: (file: FileEntity) => JSX.Element[];
  clickHandler?: (file: FileEntity) => void;
}

export default ({
  fileList = [],
  operations,
  clickHandler
}: FileListProps) => {
  const { formatMessage } = useLocale();
  if (!fileList.length) {
    return <ReactSVG className={fileListStyle.rsvg} src={`${prefixImgPath('baby-boy.svg')}`} />;
  }

  return (
    <div className={fileListStyle.container}>
      {
        fileList.map(f => (
          <div className={fileListStyle.entity} key={getFileIdentifierAttr(f)} onClick={() => clickHandler && clickHandler(f)}>
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
