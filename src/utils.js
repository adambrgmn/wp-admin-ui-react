import { css } from 'styled-components';

/**
 * Use media to apply responsive styles
 * Usage:
 *  ${media.tablet`width: 50%;`};
 */
const media = {
  tablet: (...args) => css`
    @media (max-width: 782px) {
      ${css(...args)};
    }
  `,
};

export { media };
