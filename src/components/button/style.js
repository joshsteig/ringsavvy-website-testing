import styled, { css } from 'styled-components';
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
  border: 2px solid ${(props) => props.theme.global.colors.white};
  box-shadow: none;
  color: ${(props) => props.theme.global.colors.white};
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.global.colors.primary};
    background-color: ${(props) => props.theme.global.colors.primary};
    box-shadow: none;
    color: #fff;
    transform: none;
  }
`;

export const Button = styled(Link)`
  font-weight: 600;
  padding: 0.5rem 3rem;
  border-radius: 100px;
  transition: all 0.2s ease;
  cursor: pointer;
  line-height: 1;
  text-align: center;
  font-family: ${(props) => props.theme.global.fonts.serif};

  a {
    color: inherit;
    text-decoration: inherit;
  }

  ${(props) =>
    props.padding === 'large' &&
    css`
      background: transparent;
      padding: 1rem 3rem;
    `}
  ${(props) =>
    props.padding === 'medium' &&
    css`
      background: transparent;
      padding: 0.75rem 2.75rem;
    `}
  ${(props) =>
    props.$transparent &&
    css`
      background: transparent;
      color: white;
      &:hover {
        background-color: #0abe51;
        border-color: #0abe51;
      }
    `}
  ${(props) =>
    props.$hoverColor &&
    css`
      &:hover {
        background: transparent;
        border: none;
        color: #0abe51;
      }
    `}
  ${(props) =>
    props.$whiteBorder &&
    css`
      border: 2px solid white;
    `}
  ${(props) =>
    props.greenBorder &&
    css`
      border: 1px solid #0abe51;
    `}
  ${(props) =>
    props.$primary &&
    css`
      background: #0abe51;
      color: white;
    `}
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
`;
