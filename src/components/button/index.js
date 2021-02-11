import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { hasWhiteArrow } from '../globals';

export const StyledLink = styled(Link)`
  align-items: center;
  background-color: ${({ theme }) => theme.global.colors.primary};
  border-radius: 100px;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.14);
  color: #ffffff;
  display: inline-flex;
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.base};
  font-weight: bold;
  justify-content: center;
  line-height: 1;
  padding: 0.75em 3.25em;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(0.16em);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      box-shadow: none;
      border: none;
      color: ${({ theme }) => theme.global.colors.white};
      margin-left: 30px;
      padding: 1em 0;

      ${hasWhiteArrow}

      &:hover {
        box-shadow: none;
        transform: translateY(0);
      }
    `}

  ${({ borderPrimary }) =>
    borderPrimary &&
    css`
      background: none;
      border: 2px solid ${({ theme }) => theme.global.colors.primary};
      box-shadow: none;
      color: ${({ theme }) => theme.global.colors.primary};

      &:hover {
        background: ${({ theme }) => theme.global.colors.primary};
        box-shadow: none;
        color: ${({ theme }) => theme.global.colors.white};
      }
    `}

  ${({ xs }) =>
    xs &&
    css`
      font-size: ${({ theme }) => theme.global.fontSizes.sm};
    `}
`;

export const StyledOutlineLink = styled(StyledLink)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.global.colors.white};
  box-shadow: none;
  color: ${({ theme }) => theme.global.colors.white};
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.global.colors.primary};
    background-color: ${({ theme }) => theme.global.colors.primary};
    box-shadow: none;
    color: #fff;
    transform: none;
  }
`;
