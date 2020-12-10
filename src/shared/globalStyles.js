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
    line-height: 1.65;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  p {
    margin: 0 0 1em;
  }

  p,
  ul,
  ol {
    color: ${(props) => props.theme.global.colors.grey};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {   
    font-family: ${(props) => props.theme.global.fonts.serif};
    color: ${(props) => props.theme.global.colors.black};
    font-weight: bold;
    line-height: 1.2;
    margin : 0 0 24px;
  }

  h1 {
    font-size: ${(props) => props.theme.global.fontSizes.xxl}
  }

  h2 {
    font-size: ${(props) => props.theme.global.fontSizes.xxl}
  }

  h3 {
    font-size: ${(props) => props.theme.global.fontSizes.lg}
  }

  h4 {
    font-size: ${(props) => props.theme.global.fontSizes.md}
  }

  @media ${(props) => props.theme.global.mediaQueries.sm} {
    h1 {
      font-size: ${(props) => props.theme.global.fontSizes.xxl}
    }

    h2 {
      font-size: ${(props) => props.theme.global.fontSizes.xl}
    }

    h3 {
      font-size: ${(props) => props.theme.global.fontSizes.lg}
    }

    h4 {
      font-size: ${(props) => props.theme.global.fontSizes.md}
    }
  }
  
  figure {
    margin: 0;
  }
  
  img {
    display: block;
    width: 100%;
  }

  button {
    background : transparent;
    border: none;
    outline : none;
    cursor : pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  /**
   * article grid
   */
  .article-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 5vmin;
  }
`;
