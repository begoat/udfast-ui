import { StorageKeyForTheme } from '@/config';
import { CustomSubscription } from '@/utils/subscriber';

import { getLStorage, setLStorage } from '../local-storage';
import { checkRunOnClient } from '../env';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
};

const themeSubscribe = new CustomSubscription();

export const registerThemeChangeCb = (cb: (theme: Theme) => void) => {
  return themeSubscribe.registerCbs((args: any) => {
    cb && cb(args[0]);
  });
};

const getThemeFromStorage = () => {
  return getLStorage(StorageKeyForTheme);
};

export const getTheme = () => {
  return (getThemeFromStorage() || Theme.LIGHT) as Theme;
};

export const setTheme = (theme: Theme) => {
  document.body.className = theme;
  setLStorage(StorageKeyForTheme, theme);
  themeSubscribe.tiggerCbs(theme);
};

/**
 * If no stored item in localStorage, use color scheme in system preference/
 * otherwise use user's choice
 */
const setupEvtListener = () => {
  if (!checkRunOnClient()) {
    return;
  }

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const setThemeByMatchMedia = (e: MediaQueryListEvent | MediaQueryList) => {
    setTheme(e.matches ? Theme.DARK : Theme.LIGHT);
  };

  darkQuery.addListener(e => {
    setThemeByMatchMedia(e);
  });

  if (!getThemeFromStorage()) {
    setThemeByMatchMedia(darkQuery);
  }
};
setupEvtListener();
