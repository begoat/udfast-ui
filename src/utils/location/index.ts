import { withPrefix } from 'gatsby';

import { globalHistory as history } from '@reach/router';

export const getRealPrefix = () => {
  const { location: { pathname } } = history;
  return pathname.startsWith('/udfast-ui') ? '/udfast-ui/' : '/';
};

// withPrefix enable a manually constructed path add prefix automatically in production mode
export const withPrefixPath = (path: string) => withPrefix(`/udfast-core${path}`);

export const prefixImgPath = (resourceFileName: string) => {
  const { location: { origin } } = history;
  return `${origin}${getRealPrefix()}${resourceFileName}`;
};
