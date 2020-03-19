import { useIntl } from 'react-intl';

import { localeCandidate, en } from '@/locales';

export const useLocale = () => {
  const { formatMessage, locale, ...rest } = useIntl();
  const fmtMsg = (localeKey: keyof typeof en, values?: Record<string, any>) => {
    return formatMessage({ id: localeKey }, values);
  };

  return {
    formatMessage: fmtMsg,
    locale: locale as localeCandidate,
    ...rest
  };
};
