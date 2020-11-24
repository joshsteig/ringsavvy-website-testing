import styled from 'styled-components';
import { Link } from 'gatsby';
import { StyledOutlineLink } from '../button/style';

export const NavigationList = styled.ul`
  align-items: center;
  display: flex;
  font-size: ${(props) => props.theme.global.fontSizes.base};
  list-style: none;
  margin: 40px 0 60px;
  padding: 0;
`;

export const NavigationLink = styled(Link)`
  font-family: ${(props) => props.theme.global.fonts.serif};
  font-weight: bold;
  text-decoration: none;
`;

export const LogoLink = styled(Link)`
  line-height: 0;
  margin-right: auto;
`;

export const ListItem = styled.li`
  margin: 0 0.75em;
`;

export const NavigationCTA = styled(StyledOutlineLink)`
  padding: 0.625em 2.75em;
`;
