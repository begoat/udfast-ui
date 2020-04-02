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
