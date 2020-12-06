import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Open Sans';
    src: url(../fonts/OpenSans-Regular.woff) format('woff') font-weight-normal,
        url(../fonts/OpenSans-Bold.woff) format('woff') font-weight-bold,
        url(../fonts/OpenSans-Italic.woff) format('woff') font-italic;
  }

  @font-face {
    font-family: 'Merriweather';
    src: url(../fonts/Merriweather-Bold.woff) format('woff') font-weight-bold,
  }

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
    font-family: 'Merriweather', serif;
    font-weight: bold;
    line-height: 1.2;
    margin : 0;
  }

  h1 {
    font-size: ${(props) => props.theme.post.fontSizes.xxl}
  }

  h2 {
    font-size: ${(props) => props.theme.post.fontSizes.xxl}
  }

  h3 {
    font-size: ${(props) => props.theme.post.fontSizes.lg}
  }

  h4 {
    font-size: ${(props) => props.theme.post.fontSizes.md}
  }

  @media ${(props) => props.theme.global.mediaQueries.sm} {
    h1 {
      font-size: ${(props) => props.theme.post.fontSizes.xl}
    }

    h2 {
      font-size: ${(props) => props.theme.post.fontSizes.xl}
    }

    h3 {
      font-size: ${(props) => props.theme.post.fontSizes.lg}
    }

    h4 {
      font-size: ${(props) => props.theme.post.fontSizes.md}
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
