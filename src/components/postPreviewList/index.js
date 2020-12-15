import styled from 'styled-components';

//TODO: Refactor to use differrent grids. Ex. 3 column grid on home page vs blog 2 column page
export const PostPreviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    flex-basis: 48%;

    @media ${({ theme }) => theme.global.mediaQueries.md} {
      flex-basis: 100%;
    }
  }
`;
