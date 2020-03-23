/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { getTheme } from '@/utils/multi-theme';
import { useLocale } from '@/utils/hooks';
import { en } from '@/locales';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<any>;
  titleKey: keyof typeof en;
}

function SEO({ description = '', lang = 'en', meta = [], titleKey }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const { formatMessage } = useLocale();
  const metaDescription = description || site.siteMetadata.description;
  const title = formatMessage(titleKey);

  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      bodyAttributes={{class: getTheme()}}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
        }
      ].concat(meta)}
    />
  );
}

export default SEO;
