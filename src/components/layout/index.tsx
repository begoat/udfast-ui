import React from 'react';
import VConsole from 'vconsole';

import Header from '../header';
import Navbar from '../navbar';

import './index.css';

interface LayoutProps {
  children?: Array<React.ReactChild>;
}

// eslint-disable-next-line no-new
new VConsole();
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
