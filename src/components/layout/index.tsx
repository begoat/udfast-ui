import React from 'react';

import { checkRunOnClient } from '@/utils/env';

import Header from '../header';
import Navbar from '../navbar';
import './index.css';

if (checkRunOnClient()) {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const VConsole = require('vconsole');
  // eslint-disable-next-line no-new
  new VConsole();
}

interface LayoutProps {
  children?: Array<React.ReactChild>;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1280,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
