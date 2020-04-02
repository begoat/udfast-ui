export const getFileIdentifierAttr = (file: FileAttr) => {
  return `${file.name}-${file.lastModified}`;
};

const transformFileToFileAttr = (file: File): FileAttr => {
  return {
    name: file.name,
    size: file.size,
    lastModified: file.lastModified,
  };
};

export const checkFileExisted = (file: File, fileList: File[]) => {
  return fileList.some(f => {
    const fileIdentifierAttr = getFileIdentifierAttr(transformFileToFileAttr(file));
    return getFileIdentifierAttr(transformFileToFileAttr(f)) === fileIdentifierAttr;
  });
};

/** https://stackoverflow.com/a/14919494 */
export const fmtFileSize = (bytes: number, si = false) => {
  const thresh = si ? 1000 : 1024;
  if(Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }
  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

  let u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while(Math.abs(bytes) >= thresh && u < units.length - 1);
  return `${bytes.toFixed(1)} ${units[u]}`;
};
