import styled from 'styled-components';
import { ContentContainer } from '../../components/globals';

// TODO: first child of Content to have margin-top: 0 (not working)
export const Content = styled(ContentContainer)`
  h2,
  h3 {
    margin: 1.4em 0 1em;
  }

  h2 {
    font-size: ${({ theme }) => theme.global.fontSizes.xl};
  }

  ul {
    margin: 1em 0;
    padding-left: 40px;
  }

  ul > li {
    margin: 0.5em 0;
  }

  @media ${({ theme }) => theme.global.mediaQueries.lg} {
    max-width: none;
    width: 100%;
  }
`;
