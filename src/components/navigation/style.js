import styled from 'styled-components';
import { Link } from 'gatsby';
import { StyledOutlineLink } from '../button/style';

export const NavigationWrapper = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  color: white;
  padding: 3rem 1.25rem;
  @media (max-width: 767px) {
  }
`;

export const NavigationList = styled.ul`
  align-items: center;
  display: flex;
  font-size: ${(props) => props.theme.global.fontSizes.base};
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavigationLink = styled(Link)`
  font-family: ${(props) => props.theme.global.fonts.serif};
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

export const LogoLink = styled(Link)`
  line-height: 0;
  margin-right: auto;
`;

export const ListItem = styled.li`
  margin: 0 0.75em;
  color: white;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavigationCTA = styled(StyledOutlineLink)`
  padding: 0.625em 2.75em;
`;
