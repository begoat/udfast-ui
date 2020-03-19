import React from 'react';
import { IntlProvider } from 'react-intl';

import { messages, localeCandidate } from '@/locales/index';
import { getDefaultLocale } from '@/locales/locale-route';

interface LocaleProps {
  children?: React.ReactChild;
  locale?: localeCandidate;
}

const LocaleProvider = ({ children, locale = getDefaultLocale() as localeCandidate }: LocaleProps) => {
  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default LocaleProvider;
