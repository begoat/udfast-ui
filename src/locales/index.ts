import { useIntl } from 'react-intl';

import en from './en';
import zh from './zh';

export enum localeCandidate {
  EN_US = 'en-US',
  ZH_CN = 'zh-CN'
}

export default {
  [localeCandidate.EN_US]: en,
  [localeCandidate.ZH_CN]: zh
};


export const useLocale = () => {
  const { formatMessage, ...rest } = useIntl();
  const fmtMsg = (localeKey: string, values?: Record<string, any>) => {
    return formatMessage({ id: localeKey }, values);
  };

  return {
    formatMessage: fmtMsg,
    ...rest
  };
};
