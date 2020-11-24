import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  background-color: ${(props) => props.theme.global.colors.primary};
  border-radius: 100px;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.14);
  color: #ffffff;
  display: inline-block;
  font-family: ${(props) => props.theme.global.fonts.serif};
  font-size: ${(props) => props.theme.global.fontSizes.base};
  font-weight: bold;
  line-height: 1;
  padding: 1em 3.25em;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(0.16em);
  }
`;

export const StyledOutlineLink = styled(StyledLink)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.global.colors.primary};
  box-shadow: none;
  color: ${(props) => props.theme.global.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.global.colors.primary};
    box-shadow: none;
    color: #fff;
    transform: none;
  }
`;
