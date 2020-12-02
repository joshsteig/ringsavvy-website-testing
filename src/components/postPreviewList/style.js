import styled from 'styled-components';

export const PostPreviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    flex-basis: 48%;

    @media ${(props) => props.theme.global.mediaQueries.md} {
      flex-basis: 100%;
    }
  }
`;
