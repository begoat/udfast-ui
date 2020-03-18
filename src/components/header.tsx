import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

import { useLocale } from '@/locales';
import IntlLink from '@/components/IntlLink';

import headerStyle from './header.module.scss';

console.log('headerStyle', headerStyle);

const Header = () => {
  const { formatMessage } = useLocale();
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 125) {
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
        <div className={headerStyle.title}>
          <h1 className={headerStyle.h1Link}>
            <IntlLink to="/" className={headerStyle.h1Link}>{formatMessage('unfast_h1')}</IntlLink>
          </h1>
          <h4>{formatMessage('unfast_slogan')}</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
