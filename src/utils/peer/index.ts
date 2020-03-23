import { checkRunOnClient } from '@/utils/env';

let udfastCore: any;
if (checkRunOnClient()) {
  // eslint-disable-next-line global-require
  udfastCore = require('udfast-core');
}

const retryInterval = 500;

export const initUSidePeer = (): Promise<typeof udfastCore.UController> => {
  return new Promise((resolve, reject) => {
    const initFn = (tryTime = 1) => {
      // FIXME: still trying, and generating too much connections
      if (tryTime > 20) {
        reject();
        return;
      }

      udfastCore.UController.init()
        .then((uController: any) => {
          resolve(uController);
        })
        .catch(() => {
          setTimeout(() => {
            initFn(tryTime + 1);
          }, retryInterval);
        });
    };

    initFn();
  });
};

export const initDSidePeer = (): Promise<typeof udfastCore.DController> => {
  return new Promise((resolve, reject) => {
    const initFn = (tryTime = 1) => {
      // FIXME: still trying, and generating too much connections
      if (tryTime > 20) {
        reject();
        return;
      }

      udfastCore.DController.init()
        .then((uController: any) => {
          resolve(uController);
        })
        .catch(() => {
          setTimeout(() => {
            initFn(tryTime + 1);
          }, retryInterval);
        });
    };

    initFn();
  });
};
