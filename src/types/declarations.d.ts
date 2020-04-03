declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

interface UploadFileEntity {
  fileObj: File;
  fileId: string;
  hidden: boolean;
  passwd: string;
}

interface FileAttr {
  name: string;
  size: number;
  lastModified?: number;
}

interface FileExt {
  fileId: string;
  [key: string]: any;
}

type FileEntity = FileAttr & FileExt;


interface DownloadLogCommonEntity {
  timestamp: number;
  fileId: string;
}

interface DownloadLogProgressEntity extends DownloadLogCommonEntity {
  logType: 'progress';
  chunkIdx: number;
  chunkStatus: 'start' | 'end';
  totalNum: number;
}

interface DownloadLogAccEntity extends DownloadLogCommonEntity {
  logType: 'acc';
}

interface DownloadLogCancelEntity extends DownloadLogCommonEntity {
  logType: 'cancel';
}

interface DownloadLogExceptionEntity extends DownloadLogCommonEntity {
  logType: 'exception';
}

type DownloadLogEntity =
  DownloadLogProgressEntity
  | DownloadLogAccEntity
  | DownloadLogExceptionEntity
  | DownloadLogCancelEntity;
