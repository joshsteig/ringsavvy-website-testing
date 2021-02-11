import styled from 'styled-components';

export const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  align-items: flex-start;
  display: flex;
  margin: 1.625em 0;
`;

export const Image = styled.img`
  border-radius: 5px;
  box-shadow: 0 0 25px rgb(0, 0, 0, 0.12);
  height: 430px;
  width: auto;

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    display: none;
  }
`;
