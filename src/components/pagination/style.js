import styled from 'styled-components';
import { Link } from 'gatsby';

export const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 0 80px;
  padding: 0;
`;

export const PaginationLink = styled(Link)`
  background-color: ${(props) =>
    props.$isActive ? props.theme.global.colors.primary : '#fff'};
  border-radius: 100px;
  border: ${(props) =>
    props.$isActive
      ? `1px solid ${props.theme.global.colors.primary}`
      : '1px solid #ddd'};
  color: ${(props) => (props.$isActive ? '#fff' : '#222')};
  display: inline-block;
  font-size: ${({ theme }) => theme.global.fontSizes.base};
  font-weight: bold;
  line-height: 1;
  margin: 2px;
  outline-offset: 3px;
  padding: 1em 1.25em;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.global.colors.primary};
    color: #fff;
  }
`;
