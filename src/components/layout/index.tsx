import React from 'react';

import { checkRunOnClient } from '@/utils/env';
import { useLocale } from '@/utils/hooks';
import { en } from '@/locales';

import Header from '../header';
import Navbar from '../navbar';
import layoutStyle from './index.module.scss';

if (checkRunOnClient()) {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const VConsole = require('vconsole');
  // eslint-disable-next-line no-new
  new VConsole();
}

interface LayoutProps {
  titleKey: keyof typeof en;
  children?: Array<React.ReactChild>;
}

const Layout = ({ children, titleKey }: LayoutProps) => {
  const { formatMessage } = useLocale();
  return (
    <>
      <Header />
      <Navbar title={formatMessage(titleKey)} />
      <div className={layoutStyle.main}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
