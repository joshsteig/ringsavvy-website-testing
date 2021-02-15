import styled from 'styled-components';

export const Article = styled.article`
  max-width: 605px;

  @media ${({ theme }) => theme.global.mediaQueries.lg} {
    margin-bottom: 80px;
    max-width: none;
    padding: 0 5%;
    width: 100%;
  }
`;
