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
