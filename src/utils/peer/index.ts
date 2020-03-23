import { UController, DController } from 'udfast-core';

const retryInterval = 500;

export const initUSidePeer = (): Promise<UController> => {
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

export const initDSidePeer = (): Promise<DController> => {
  return new Promise((resolve, reject) => {
    const initFn = (tryTime = 1) => {
      // FIXME: still trying, and generating too much connections
      if (tryTime > 20) {
        reject();
        return;
      }

      DController.init()
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
