import { checkRunOnClient } from '../env';

export const setLStorage = (key: string, value: string) => {
  if (checkRunOnClient()) {
    localStorage.setItem(key, value);
    return true;
  }
};

export const getLStorage = (key: string) => {
  if (checkRunOnClient()) {
    return localStorage.getItem(key);
  }
};
