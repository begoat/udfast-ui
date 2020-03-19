import React from 'react';

import ThemeToggle from '../theme-toggle';
import LangSwitch from '../lang-switch';
import navbarStyle from './index.module.scss';

// TODO: https://github.com/KyleAMathews/typography.js
export default () => {
  return (
    <div className={navbarStyle.navWrapper}>
      <div className={navbarStyle.contentContainer}>
        <div>PLACEHOLDER</div>
        <div className={navbarStyle.setting}>
          <LangSwitch />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
