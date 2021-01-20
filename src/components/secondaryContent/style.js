import styled from 'styled-components';

// TODO: first child of Content to have margin-top: 0 (not working)
export const Content = styled.article`
  max-width: 580px;

  h2 {
    font-size: ${({ theme }) => theme.global.fontSizes.xl};
    margin: 1.4em 0 1em;
  }

  ul {
    margin: 1em 0;
    padding-left: 40px;
  }

  ul > li {
    margin: 0.5em 0;
  }

  @media ${({ theme }) => theme.global.mediaQueries.lg} {
    margin-bottom: 80px;
    max-width: none;
    width: 100%;
  }
`;
