import React from 'react';

import { formatFullDate } from '@/utils/date';

import logContainerStyle from './index.module.scss';

interface LogContainerProps {
  logs: Array<DownloadLogEntity>;
}

export const LogContainer = ({
  logs
}: LogContainerProps) => {
  return (
    <div className={logContainerStyle.container}>
      {logs.map(l => (
        <React.Fragment key={l.timestamp}>
          <span>{`${formatFullDate(new Date(l.timestamp))} [${l.logType}] [FileId: ${l.fileId}]`}</span>
          {
            l.logType === 'progress' && (
              <span>{`totalNumOfChunks: ${l.totalNum}; chunk${l.chunkIdx} download ${l.chunkStatus}`}</span>
            )
          }
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default LogContainer;
