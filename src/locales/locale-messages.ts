import { localeCandidate } from './locale-route';

import en from './en';
import zh from './zh';

export const messages = {
  [localeCandidate.EN_US]: en,
  [localeCandidate.ZH_CN]: zh
};