import React from 'react';

import ThemeToggle from '../theme-toggle';
import LangSwitch from '../lang-switch';
import navbarStyle from './index.module.scss';

interface NavbarProps {
  title: string;
}

// TODO: https://github.com/KyleAMathews/typography.js
export default ({ title }: NavbarProps) => {
  return (
    <div className={navbarStyle.navWrapper}>
      <div className={navbarStyle.contentContainer}>
        <div>{title}</div>
        <div className={navbarStyle.setting}>
          <LangSwitch />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
