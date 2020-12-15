import { createGlobalStyle } from 'styled-components';

export const GlobalPostStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    margin: 1.125em 0 0.8em;
  }

  h1 {
    font-size: ${({ theme }) => theme.post.fontSizes.xxl}
  }

  h2 {
    font-size: ${({ theme }) => theme.post.fontSizes.xl}
  }

  h3 {
    font-size: ${({ theme }) => theme.post.fontSizes.lg}
  }

  h4 {
    font-size: ${({ theme }) => theme.post.fontSizes.md}
  }

  p,
  ul,
  ol {
    font-size: ${({ theme }) => theme.post.fontSizes.base};
  }

  ul, ol {
    margin: 1.25em 0;
  }

  ul > li,
  ol > li {
    margin: 0 0 .666666em
  }

  @media ${({ theme }) => theme.global.mediaQueries.sm} {
    h1 {
      font-size: ${({ theme }) => theme.post.fontSizes.xl}
    }

    h2 {
      font-size: ${({ theme }) => theme.post.fontSizes.xl}
    }

    h3 {
      font-size: ${({ theme }) => theme.post.fontSizes.lg}
    }

    h4 {
      font-size: ${({ theme }) => theme.post.fontSizes.md}
    }
  }
`;
