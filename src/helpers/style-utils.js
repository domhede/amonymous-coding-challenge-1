import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
    @media (max-width: 769px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 768px) and (max-width: 769px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 769px) {
      ${css(...args)}
    }
  `,
};