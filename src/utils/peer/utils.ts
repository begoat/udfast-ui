import { dynamicImportUDFastCore } from '@/utils/env';
import { DController, UploadController } from './wrapper';

const retryInterval = 2500;

// FIXME: IT"S THE PROBLEM MAYBE
export const initUSidePeer = async (): Promise<UploadController> => {
  const UDFastCore = await dynamicImportUDFastCore();
  if (!UDFastCore) return Promise.reject(1);
  return new Promise((resolve, reject) => {
    const initFn = (tryTime = 1) => {
      // FIXME: still trying, and generating too much connections
      if (tryTime > 20) {
        reject();
        return;
      }

      UDFastCore.UController.init()
        .then(uController => {
          console.log('promise resolved', uController);
          resolve(uController);
        })
        .catch((e: string) => {
          console.log('reject type:::', e)
          setTimeout(() => {
            initFn(tryTime + 1);
          }, retryInterval);
        });
    };

    initFn();
  });
};

export const initDSidePeer = async (): Promise<DController> => {
  const UDFastCore = await dynamicImportUDFastCore();
  if (!UDFastCore) return Promise.reject(1);
  return new Promise((resolve, reject) => {
    const initFn = (tryTime = 1) => {
      // FIXME: still trying, and generating too much connections
      if (tryTime > 20) {
        reject();
        return;
      }

      UDFastCore.DController.init()
        .then(dController => {
          console.log('download promise resolved', dController);
          resolve(dController);
        })
        .catch(() => {
          console.log('123123')
          setTimeout(() => {
            initFn(tryTime + 1);
          }, retryInterval);
        });
    };

    initFn();
  });
};
