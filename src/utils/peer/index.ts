import { UController } from 'udfast-core';

const retryInterval = 500;

export const initPeer = (): Promise<UController> => {
  return new Promise((resolve, reject) => {
    const initFn = (tryTime = 1) => {
      // FIXME: still trying, and generating too much connections
      if (tryTime > 20) {
        reject();
        return;
      }

      UController.init()
        .then((uController) => {
          resolve(uController);
        })
        .catch(() => {
          setTimeout(() => {
            initFn(tryTime + 1);
          }, retryInterval);
        });
    }

    initFn();
  });
};
