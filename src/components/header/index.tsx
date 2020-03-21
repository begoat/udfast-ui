import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import { Button } from 'rsuite';

import { useLocale } from '@/utils/hooks';
import IntlLink from '@/components/intl-link';

import headerStyle from './index.module.scss';

console.log('headerStyle', headerStyle);
const Header = () => {
  const { formatMessage } = useLocale();
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`
  );

  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.headerContainer}>
        <Img fixed={data.file.childImageSharp.fixed} />
        <div className={headerStyle.infoContainer}>
          <div className={headerStyle.title}>
            <h1 className={headerStyle.h1Link}>
              <IntlLink to="/" className={headerStyle.h1Link}>{formatMessage('unfast_h1')}</IntlLink>
            </h1>
            <h4>{formatMessage('unfast_slogan')}</h4>
          </div>
          <div className={headerStyle.info}>
            <div className={headerStyle.btnSet}>
              <Button appearance='primary'>{formatMessage('seekHelp')}</Button>
              <Button appearance='primary'>{formatMessage('shareSite')}</Button>
            </div>
            <div className={headerStyle.imgSet}>
              <img className={headerStyle.projectStatus} src='https://github.com/begoat/rtc-apps/workflows/Node.js%20CI/badge.svg?branch=v2' alt='NodeJS CI' />
              <img className={headerStyle.projectStatus} src='https://img.shields.io/github/stars/rsuite/rsuite?style=social' alt='github starts' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
