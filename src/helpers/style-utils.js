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
export const effects = {
  boxShadow: css`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  `
}