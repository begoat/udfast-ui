export const checkRunOnClient = () => {
  return typeof window !== 'undefined';
};

export const dynamicImportUDFastCore = async () => {
  if (checkRunOnClient()) {
    return import('udfast-core');
  }
};
