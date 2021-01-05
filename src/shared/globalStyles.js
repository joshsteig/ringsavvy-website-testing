import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import './index.scss';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  
  html, body {
    overflow-x: hidden;
    width: 100vw;
  }
  
  html {
    font-size: 16px;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
  
  a {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  
  p {
    margin: 0 0 1em;
  }
  
  figure {
    margin: 0;
    width: 100%;
  }
  
  p,
  ul,
  ol {
    color: ${({ theme }) => theme.global.colors.grey};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {   
    font-family: ${({ theme }) => theme.global.fonts.serif};
    color: ${({ theme }) => theme.global.colors.black};
    font-weight: bold;
    line-height: 1.2;
    margin : 0 0 24px;
  }

  h1 {
    font-size: ${({ theme }) => theme.global.fontSizes.xxl}
  }

  h2 {
    font-size: ${({ theme }) => theme.global.fontSizes.xxl}
  }

  h3 {
    font-size: ${({ theme }) => theme.global.fontSizes.xl}
  }

  h4 {
    font-size: ${({ theme }) => theme.global.fontSizes.lg}
  }

  @media ${({ theme }) => theme.global.mediaQueries.sm} {
    h1 {
      font-size: ${({ theme }) => theme.global.fontSizes.xxl}
    }

    h2 {
      font-size: ${({ theme }) => theme.global.fontSizes.xl}
    }

    h3 {
      font-size: ${({ theme }) => theme.global.fontSizes.lg}
    }

    h4 {
      font-size: ${({ theme }) => theme.global.fontSizes.md}
    }
  }
`;
