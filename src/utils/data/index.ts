export const getFileIdentifierAttr = (file: File) => {
  return `${file.name}-${file.lastModified}`;
};

export const checkFileExisted = (file: File, fileList: File[]) => {
  return fileList.some(f => {
    const fileIdentifierAttr = getFileIdentifierAttr(file);
    return getFileIdentifierAttr(f) === fileIdentifierAttr;
  });
};
